addEventListener("DOMContentLoaded", ()=>{

let num = Number(prompt(`Escriba un número`))

if (num > 0 && num <= 100) {
    console.log(`El número  ${num} es positivo y menor o igual a 100`)
}
else {
    console.log(`El número que ingreso es negativo o mayor a 100.`)
}
})