addEventListener("DOMContentLoaded", ()=>{
// 3. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o
// si son iguales.
let num1 = Number(prompt(`Escriba el valor 1`))
let num2 = Number(prompt(`Escriba el valor 2`))
let num3 = Number(prompt(`Escriba el valor 3`))

if (num1 > num2 && num1 > num3) {
    console.log(`El valor ${num1} es el mayor`)
}
if (num1 < num2 && num1 < num3) {
    console.log(`El valor ${num1} es el menor`)
}
if (num1 == num2) {
    console.log(`El valor 1 es igual al valor 2`)
}
if (num1 == num3) {
    console.log(`El valor 1 es igual al valor 3`)
}
if (num2 > num3 && num2 > num3){
    console.log(`El valor ${num2} es el mayor`)
}
if (num2 < num3 && num2 < num1){
    console.log(`El valor ${num2} es el menor`)
}
if (num2 == num3){
    console.log(`El valor 2 es igual al valor 3`)
}
if (num3 > num1 && num3 > num2){
    console.log(`El valor ${num3} es el mayor`)
}
if (num3 < num1 && num3 < num2){
    console.log(`El valor ${num3} es el menor`)
}

})