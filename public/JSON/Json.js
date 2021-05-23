function init() {

    let refPlantilla = document.getElementById('plantilla')
    let refcartas = document.getElementById('cartas')
    let html = ''

    for (cnt = 0; cnt < productRecomendades.length; cnt = cnt + 1) {
        html = html + refPlantilla.innerHTML
            .replace(/{{nom}}/g, productRecomendades[cnt].nom)
            .replace(/{{descipcion}}/g, productRecomendades[cnt].descipcion)
            .replace(/{{imatge}}/g, productRecomendades[cnt].imatge)
    }
    refcartas.innerHTML = html

    let reftemplates = document.getElementById('templates')
    let reffetured = document.getElementById('fetured')
    let htmls = ''

    for (cnt = 0; cnt < feturedProducts.length; cnt = cnt + 1) {
        htmls = htmls + reftemplates.innerHTML
            .replace(/{{name}}/g, feturedProducts[cnt].name)
            .replace(/{{price}}/g, feturedProducts[cnt].price)
            .replace(/{{imatge}}/g, feturedProducts[cnt].imatge)
            .replace(/{{link}}/g, feturedProducts[cnt].link)
    }
    reffetured.innerHTML = htmls



    let reftemplate = document.getElementById('newProducts')
    let refLatest = document.getElementById('latestProducts')
    let template = ''

    for (cnt = 0; cnt < latestProducts.length; cnt = cnt + 1) {
        template = template + reftemplate.innerHTML
            .replace(/{{names}}/g, latestProducts[cnt].name)
            .replace(/{{prices}}/g, latestProducts[cnt].price)
            .replace(/{{imatge}}/g, latestProducts[cnt].imatge)
            .replace(/{{link}}/g, latestProducts[cnt].link)
    }
    refLatest.innerHTML = template


}
