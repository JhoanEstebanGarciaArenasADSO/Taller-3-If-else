addEventListener("DOMContentLoaded", ()=>{
// 7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
// $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let total = Number(prompt(`Ingrese el total del consumo: `))
if (total > 130000) {
    let desc = total * 0.15
    let todesc= total - desc
    console.log(`El descuento es de ${desc}`)
    console.log(`El total aplicando el descuento es de ${todesc}`)
}
else{
    console.log(`No se aplica descuento`)
}

})