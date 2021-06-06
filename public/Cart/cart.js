//Get Items form localstorage onload page
function init() {
    let Name = localStorage.getItem('Name')
    let Price = localStorage.getItem('Price')

    let title = []
    let price = []
    if (Name && Price) {
        title = JSON.parse(Name)
        price = JSON.parse(Price)
    }

    for (let cnt = 0; cnt < title.length; cnt = cnt + 1) {
        addItemCart(title[cnt], price[cnt])
    }

}

function addItemCart(Name, Price) {
    let cartElement = document.getElementById('cartElement')

    cartElement.innerHTML += `
    <div class="element" id='cartOne'>
    <div class="eleinfo">
                    <h2 class="eleh2">${Name}</h2>
                    <div class='origniaLPrice'>
                    <p>Original Price:</p>
                    <p class="elep" id='oriPrice'> ${Price}</p>
                    </div>

                    <div class='origniaLPrice'>
                    <p>Total Price:</p>
                    <p class="elep fiexPrice" id='pdtPrice'>${Price}</p>
                    </div>
                    <div class="item">
                        <ion-icon name="remove-circle-outline" class="iocon" id='restPrice' onclick='restProduct(1, this.nextElementSibling, this.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild, this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild)'></ion-icon>
                        <div class="countItem" id='countItem'>1</div>
                        <ion-icon name="add-circle-outline" class="iocon" id='addPrice' onclick='addProduct(1, this.parentElement.firstElementChild.nextElementSibling, this.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild, this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild)'></ion-icon>
                    </div>
                    </div>
                    <div>
                    <ion-icon name="close-outline" onclick='delteEvents(this.parentElement.parentElement)' id='delll' style='cursor: pointer;'></ion-icon>
</div>
</div>`

}


// Delte events
function delteEvents(parntEle) {
    let o = parntEle
    o.remove()

    let Name = localStorage.getItem('Name')
    let Price = localStorage.getItem('Price')

    let title = []
    let price = []
    if (Name && Price) {
        title = JSON.parse(Name)
        price = JSON.parse(Price)
    }

    title.splice(0, 1)
    price.splice(0, 1)

    localStorage.setItem('Name', JSON.stringify(title))
    localStorage.setItem('Price', JSON.stringify(price))
    location.reload()
}

async function addProduct(num, id, origPrice, totalPrice) {
    let addPrice = id
    addPrice.innerHTML = parseFloat(addPrice.innerHTML) + num
    let orignalPrice = origPrice.innerText
    let y = parseFloat(orignalPrice) * addPrice.innerHTML

    totalPrice.innerText = parseFloat(y).toFixed(2) + '€'

    let subTotl = document.getElementById('subTotl')
    let totlSb = document.getElementById('lasttd')
    let fiexPrice = document.querySelectorAll('.fiexPrice')
    fiexPrice.forEach(element => {
        subTotl.innerHTML = parseFloat(element.innerText).toFixed(2) + '€'
        totlSb.innerHTML = parseFloat(element.innerText).toFixed(2) + '€'
    });
}

async function restProduct(num, id, origPrice, totalPrice) {
    let countItem = id
    if (countItem.innerHTML == 1) {
        countItem.innerHTML = 1
    } else {
        countItem.innerHTML = parseFloat(countItem.innerHTML) - num
        let orignalPrice = origPrice.innerText
        let y = parseFloat(totalPrice.innerText) - parseFloat(orignalPrice)

        totalPrice.innerText = parseFloat(y).toFixed(2) + '€'
    }

    let subTotl = document.getElementById('subTotl')
    let totlSb = document.getElementById('lasttd')
    let fiexPrice = document.querySelectorAll('.fiexPrice')
    fiexPrice.forEach(element => {
        subTotl.innerHTML = parseFloat(element.innerText).toFixed(2) + '€'
        totlSb.innerHTML = parseFloat(element.innerText).toFixed(2) + '€'
    });
}