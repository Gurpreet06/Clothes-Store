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
                    <p class="elep">${Price}</p>
                    <div class="item">
                        <ion-icon name="remove-circle-outline" class="iocon"></ion-icon>
                        <div class="countItem">1</div>
                        <ion-icon name="add-circle-outline" class="iocon"></ion-icon>
                    </div>
                    </div>
                    <div>
                    <ion-icon name="close-outline" onclick='delteEvents()' style='cursor: pointer;'></ion-icon>
</div>
</div>`

}


// Delte events
function delteEvents() {
    let o = document.getElementById('cartOne')
    o.parentElement.removeChild(o)


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
