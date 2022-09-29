addEventListener("DOMContentLoaded", ()=>{
    
// 13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
// Los descuentos son los siguientes:
// de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento
let mem, desc, prod

mem= prompt("Ingrese su membresia, si es TipoA ingresa (a), si es TipoB ingresa (b), si es TipoC ingresa (c): ")

if (mem == "a"){
    prod= Number(prompt("Ingrese el precio del producto: "))
    desc= prod*0.10
    console.log(`El descuento del producto es: ${desc}`)
    alert(`El descuento del producto es: ${desc}`)
}
if (mem == "b"){
    prod= Number(prompt("Ingrese el precio del producto: "))
    desc= prod*0.15
    console.log(`El descuento del producto es: ${desc}`)
    alert(`El descuento del producto es: ${desc}`)
}
if (mem == "c"){
    prod= Number(prompt("Ingrese el precio del producto: "))
    desc= prod*0.20
    console.log(`El descuento del producto es: ${desc}`)
    alert(`El descuento del producto es: ${desc}`)
}
})