let refAddCart = document.getElementById('addToCart')
let refName = document.getElementById('item-name')
let refPrice = document.getElementById('item-price')

// Listen Clicks in create button
refAddCart.addEventListener('click', function (evt) {
    evt.preventDefault()

    let Name = localStorage.getItem('Name')
    let Price = localStorage.getItem('Price')

    let title = []
    let price = []
    if (Name && Price) {
        title = JSON.parse(Name)
        price = JSON.parse(Price)
    }

    //Push data that recevied form user
    title.push(refName.innerHTML)
    price.push(refPrice.innerHTML)

    // Add push data to localStoarge
    localStorage.setItem('Name', JSON.stringify(title))
    localStorage.setItem('Price', JSON.stringify(price))
    location.reload()

})