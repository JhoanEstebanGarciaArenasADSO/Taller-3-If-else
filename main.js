addEventListener("DOMContentLoaded", ()=>{
// 2. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
let num = Number(prompt(`Escriba un número`))
let num1 = Number(prompt(`Escriba un segundo número`))
let num2 = Number(prompt(`Escriba un tercer número`))

if (num > num1 && num > num2) {
    console.log(`El numero ${num} es el mayor`)
}
if (num1 > num && num1 > num2) {
    console.log(`El numero ${num1} es el mayor`)
}
else {
    console.log(`El numero ${num2} es el mayor.`)
}
})