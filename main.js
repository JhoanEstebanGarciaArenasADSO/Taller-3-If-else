addEventListener("DOMContentLoaded", ()=>{
// 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
// área triangulo= lado * lado.

let lado1 = prompt(`Escribe un lado del rectangulo`)
let lado2 = prompt(`Escribe un segundo lado del rectangulo`)
if (lado1 > 0 && lado2 > 0) {
    let area = lado1 * lado2
    console.log(`El area del rectangulo es: ${area}`)
}
else{
    console.log(`Los lados no son positivos o un lado no es positivo`)
}

})