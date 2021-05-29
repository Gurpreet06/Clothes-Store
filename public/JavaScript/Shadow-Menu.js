//Shadow DOM MENU
let MenuInputHTML = `
<!--MOBIL MENU-->
<div id="mobilmenu">
    <span class="material-icons" ontouchend='mostraMenu(event)'>drag_handle</span>
    <div class="hiddenmenu"><a href="../index.html"><b>Clothes</b> Store</a></div>
    <div class="btn"><a href="#"><span class="material-icons">shopping_cart</span></div></a>
</div>
<!--End of MOBIL MENU-->

<!----MOBIL CONTENT-->
<div id='menuSmall' class='mobile' ontouchend='amagaMenu(event)'>
    <div id="menuContainer">
        <div ontouchend='navega(event, "./productes.html")'><a href="../index.html">Home</a></div>
        <div ontouchend='navega(event, "./productes.html")'><a href="../About-us/about-us.html">About Us</a></div>
        <div ontouchend='navega(event, "./contactar.html")'><a href="../log-signup/login-page.html">Your Account</a>
        </div>
    </div>
</div>
<!----End of MOBIL CONTENT-->

<!---DESKTOP-->
<div id="menu">
    <div class="menu1">
    <div class="center">
            <div class="menulogo"> <a href="../index.html"> <b>Clothes</b> Store</a> </div>
    </div>
        <div class="menu3">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../About-us/about-us.html">About Us</a></li>
                <li><a href="../Products-info/all-Products.html">Products</a></li>
                <li id='usrLogInd'><a href="../log-signup/login-page.html">Your Account</a></li>
                <a href="../Cart/cart-Index.html"><div class="btn"><span class="material-icons">shopping_cart</span></div></a>
            </ul>
        </div>
    </div>
</div>
<!---End of DESKTOP-->
`
let MenuInputCSS = `
/* MOBILE */
#mobilmenu {
 display: none;
}
#menuSmall {
    background-color: rgba(200, 200, 200, 0.5);
    backdrop-filter: saturate(200%) blur(5px);
    display: none;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.25s ease;
}
#menuContainer {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    height: 100%;
    position: absolute;
    left: 0px;
    overflow: hidden;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    width: 75%;
    will-change: transform;
}
#menuSmall > #menuContainer > div {
    border-bottom: 1px solid lightgrey;
    padding: 0 2em;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 330px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
#menuSmall > #menuContainer > div:last-child {
    margin-bottom: 10px;
}
#menuSmall > #menuContainer > div > a {
    color: black;
    text-decoration: none;
    font-size: 17px;
    
}
#menuSmall > #menuContainer > div > a:visited {
    color: black;
}

/* CART ITEM */
#menuslideback {
    background-color: rgba(200, 200, 200, 0.5);
    backdrop-filter: saturate(200%) blur(5px);
    display: none;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.25s ease;
}

#menuslideinner {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    height: 100%;
    position: absolute;
    right: 0px;
    overflow: hidden;
    top: 0px;
    transform: translatex(100%);
    transition: transform 0.5s ease;
    width: 55%;
    will-change: transform;
    padding: 24px;
}
/* DESKTOP */
#menu{
    position: sticky;
    justify-content: space-between;
    backdrop-filter: saturate(150%) blur(30px);
    top: 0px;
    padding-top: 2px;
    z-index: 100;
}
.menu1{
    align-items: center;
    display: flex;
    font-size: 0.9em;
    height: 48px;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    margin-top: 6px;
}
.proahre{
    text-decoration: none;
}
.proahre:visited{
    color: black;
}
.center > div{
    margin-left: 10px;
    color: grey;
    cursor: pointer;
    font-size: 22px;
}
.menulogo > a{
    font-size: 23px;
    user-select: none;
    text-decoration: none;
    color: grey;
}

.menu3 > ul{
    display: flex;
    list-style: none;
    align-items: center;
}
.menu3 > ul a {
    margin: 20px;
    text-decoration: none;
    color: grey;
}
.menu3 > ul a:hover {
    color: #AA87E3;
    font-weight: bold;
}
.btn{
    cursor: pointer;
    background-image: linear-gradient(#AA87E3, #9172DA );
    border: 1px solid #AA87E3;
    color: white;
    border-radius: 11px;
}
/* End of DESKTOP */

@media only screen and (max-width: 768px) {
    .body{
        background: white;
    }
    #mobilmenu {
        align-items: center;
        backdrop-filter: saturate(150%) blur(30px);
        background-color: rgba(255,255,255,0.7);
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        position: sticky;
        top: 0px;
        padding: 11px;
        margin-top: -3px;
    }
    .btn{
        padding: 1px;
        cursor: pointer;
        border-radius: 11px;
    }
    .hiddenmenu{
        font-weight: bold;
        cursor: pointer;
    }
    .hiddenmenu > a > b{
        color: #AA87E3;
    }
    .hiddenmenu >  a{
        text-decoration: none;
        color: black;
    }
    .hiddenmenu >  a:visited{
        color: black;
    }
    #mobilmenu > span {
        font-size: 35px;
        cursor: pointer;
    }
    #menu{
        display: none;
    }
}
.material-icons {
    font-family: 'Material Icons';
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    padding: 8px;
}
`
class MenuInput extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    attributeChangedCallback(name, oldValue, newValue) { }

    async connectedCallback() {
        this.shadow.innerHTML = MenuInputHTML

        //Create a style tag to add CSS
        this.elmStyle = document.createElement('style')
        this.elmStyle.textContent = MenuInputCSS
        this.shadow.appendChild(this.elmStyle)

        //Create a script tag to add Slide Menu JS
        this.shadow.querySelector('#menuSmall').addEventListener('click', (evt) => { this.amagaMenu(evt) })

    }

    async mostrar() {
        let refSmall = this.shadow.querySelector('#menuSmall')
        let refContainer = this.shadow.querySelector('#menuContainer')

        refSmall.style.display = 'flex'
        await this.wait(100)
        //await this.promiseWaitUntilPropertyValue('menuSmall', 'display', 'flex')

        // Activar l'animació
        refSmall.style.transition = 'opacity ' + menuTransition
        refContainer.style.transition = 'transform ' + menuTransition

        // Animar perquè es mostri
        refSmall.style.opacity = 1
        refContainer.style.transform = 'translateX(0)'

        await this.promiseTransitionEnd(refSmall)

    }

    wait(time) {
        return new Promise(async (resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    promiseTransitionEnd(ref) {
        return new Promise(async (resolve, reject) => {
            ref.addEventListener('transitionend', () => {
                resolve()
            })
        })
    }

    promiseWaitUntilPropertyValue(ref, property, value) {
        return new Promise(async (resolve, reject) => {
            let style = window.getComputedStyle(ref),
                now = style.getPropertyValue(property)
            if (now === value) {
                resolve()
            } else {
                await promiseWait(1)
                await promiseWaitUntilPropertyValue(ref, property, value)
            }
        })
    }

    async amagaMenu(evt) {
        let refBody = document.getElementsByTagName('body')[0],
            refSmall = this.shadow.querySelector('#menuSmall'),
            refContainer = this.shadow.querySelector('#menuContainer'),
            target = ''

        if (typeof evt !== 'undefined') {
            if (evt.cancelable) evt.preventDefault()
            evt.stopPropagation()
            target = evt.target.id
        }

        if (target === 'menuSmall') {
            refBody.style.overflow = 'auto'
            // Activar l'animació
            refSmall.style.transition = 'opacity ' + menuTransition
            refContainer.style.transition = 'transform ' + menuTransition
            // Animar perquè s'amagui
            refSmall.style.opacity = 0
            refContainer.style.transform = 'translateX(-100%)'

            await promiseTransitionEnd(refSmall)
            refSmall.style.display = 'none'
        }
    }
}
customElements.define('menu-menu', MenuInput)





//Shadow DOM Footer
let footerInputHTML = `
<div id="footer">
<div class="col">
    <h5 class="">About Us</h5>
    <ul>
        <li><a href="./About-us/about-us.html">Our Story</a></li>
        <li><a href="">Career</a></li>
    </ul>
</div>
<div class="col">
    <h5 class="">Support</h5>
    <ul>
        <li><a href="#">Contact Us</a></li>
        <li><a href="../Cart/cart-Index.html">Your Order</a></li>
        <li><a href=""></a></li>
    </ul>
</div>
<div class="col">
    <h5 class="">Information</h5>
    <ul>
        <li><a href="./FAQ-Terms/index-Terms.html">Terms & Conditions</a></li>
        <li><a href="./FAQ-Terms/index-FAQ.html">FAQ</a></li>
    </ul>
</div>
<div class="col">
    <h5>Follow us on Social Media</h5>
    <ul class="social-media">
        <li><a href=""><img src="../Image/Social-Media/facebook.png"></a></li>
        <li class="social-center"><a href=""><img src="../Image/Social-Media/twitter.png"></a>
        </li>
        <li><a href=""><img src="../Image/Social-Media/Instagram.png"></a></li>
    </ul>
</div>
</div>
<div style="background:  #000000;">
<div class="bottomfooter">
    <div class="bottomline">Clothes Store, Copyright © 2020.</div>
</div>
</div>
<!--End of FOOTER-->
`
let footerInputCSS = `
/* FOOTER */
#footer{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: #000000;
    font-size: 14px;
    padding: 5px 0px 30px;
}

.col {
    margin-top: 16px;
}
#footer h5{
    color: white;
    margin-top: 0px;
    margin-left: 21px;
    padding-left: 16px;
    font-size: 15px;
    font-weight: 600;
    user-select: none;
}

#footer ul {
    list-style: none;
}
#footer ul li{
    line-height: 2em;
}
#footer ul a{
    color: grey;
    text-decoration: none;
}

#footer ul a:hover{
    color: #AA87E3;
    cursor: pointer;
    font-weight: bold;
}
.social-media{
    display: flex;
}
.social-center{
    margin-left: 15px;
    margin-right: 15px;
}
.bottomfooter{
    display: flex;
    flex-direction: row;
    padding: 1px 0px 35px;
    max-width: 1010px;
    margin-right: auto;
    margin-left: auto;
    border-top: 1px solid #cecece;
}
.bottomline{
    font-size: 15px;
    color: #86868b;
    padding-top: 10px;
}
/* END OF FOOTER */

@media only screen and (max-width: 768px) {
    #footer{
        display: flex;
        flex-direction: column;
    }
    #footer h5{
        font-size: 20px;
        margin-bottom: 18px;
    }
    #footer ul a {
        font-size: 17px;
    }
    .col {
        text-align: center;
        margin-left: -55px;
    }
    .social-media {
        display: flex;
        justify-content: center;
    }
    .bottomfooter{
        max-width: 280px;
        margin-left: auto;
        margin-right: auto;
    }
    .bottomline {
        font-size: 17px;
    }
}
`
class footerInput extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    async connectedCallback() {
        this.shadow.innerHTML = footerInputHTML

        this.elmStyle = document.createElement('style')
        this.elmStyle.textContent = footerInputCSS
        this.shadow.appendChild(this.elmStyle)

    }
}
customElements.define('menu-footer', footerInput)