addEventListener("DOMContentLoaded", ()=>{
    
// 10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
// Iva, Subtotal y Total de la compra de los artículos.

let prod1, prod2, prod3, prod4, prod5, iva, subtotal, total
prod1= Number(prompt("Ingrese el precio del primer producto: "))
prod2= Number(prompt("Ingrese el precio del segundo producto: "))
prod3= Number(prompt("Ingrese el precio del tercer producto: "))
prod4= Number(prompt("Ingrese el precio del cuarto producto: "))
prod5= Number(prompt("Ingrese el precio del quinto producto: "))

iva= (prod1 + prod2+ prod3+ prod4+ prod5)*0.19
subtotal= prod1 + prod2+ prod3+ prod4+ prod5
total= subtotal + iva
console.log(`El iva es ${iva}, el subtotal es ${subtotal} y el total es ${total}`)
alert(`El iva es ${iva}, el subtotal es ${subtotal} y el total es ${total}`)
})