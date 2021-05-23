async function checkForm() {
    let refFormMail = document.getElementById('formMail')
    let refFormPwd = document.getElementById('formPassword')
    let refFormButton = document.getElementById('formButton')

    let validMail = refFormMail.checkValidity()
    let validPwd = refFormPwd.checkValidity()


    if (refFormMail.value == '') validMail = false
    if (refFormPwd.value == '') validPwd = false

    if (validMail && validPwd) {
        refFormButton.removeAttribute('disabled')
    } else {
        refFormButton.setAttribute('disabled', 'true')
    }
}

async function queryLogIn(evt) {
    let refFormMail = document.getElementById('formMail')
    let refFormPwd = document.getElementById('formPassword')
    let checkPassHash = MD5(`${refFormPwd.value}`)
    let response = {}
    evt.preventDefault(); // Stop page to reload onclick in sumbit button

    let obj = {
        type: 'appLogIn',
        mail: refFormMail.value,
        contrasenya: checkPassHash
    }

    for (cnt = 0; cnt < b.length; cnt = cnt + 1) {
        if (refFormMail.value == b[cnt].mail && MD5(`${refFormPwd.value}`) == b[cnt].contrasenya) {
            try {
                response = await queryServer('/query', obj)
            } catch (e) {
                console.log(e)
            }

            if (response.status == 'ok') {
                await hideElement('formButton')
                await showElement('boxSpinner')
                await wait(2000)
                await hideElement('boxSpinner')
                localStorage.setItem('usrTokenId', b[cnt].id)
                refFormMail.value = ''
                refFormPwd.value = ''
                checkForm()
                history.back() // Tornar a la pàgina anterior (que ha cridat a login)
            } else {
                console.log('ko')
                await showElement('boxError')
            }
            return
        }
        
    }
    await hideElement('formButton')
    await showElement('boxSpinner')
    await wait(2000)
    await hideElement('boxSpinner')
    await showElement('boxError')
    await showElement('formButton')
    await wait(1500)
    await hideElement('boxError')
}

async function queryServer(url, obj) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
        req.onreadystatechange = (res) => {
            let responseObj = null
            if (req.readyState === 4) {
                try {
                    responseObj = JSON.parse(req.responseText)
                } catch (e) {
                    console.log(e, req.responseText)
                    return reject('Parsing response to JSON')
                }
                if (req.status >= 200 && req.status < 300) {
                    return resolve(responseObj)
                } else if (req.status >= 400) {
                    return reject('Unauthorized')
                } else {
                    return reject(responseObj)
                }
            }
        }
        req.open('POST', url, true)
        req.send(JSON.stringify(obj))
    })
}

async function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time)
    })
}

/**
 * Hides an element
 * @param {id} id of the element to hide
 */
async function hideElement(id) {
    document.getElementById(id).style.display = 'none'
}

/**
 * Shows an element
 * @param {id} id of the element to show
 */
async function showElement(id) {
    document.getElementById(id).style.display = 'block'
}
