addEventListener("DOMContentLoaded", ()=>{
// 4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
// ¿Qué figura quiere calcular (Escriba T o C)?
// Triangulo = base * altura / 2
// Circulo = PI * radio* radio

let fig = prompt(`Elige la figura a la que le quiere calcular el area, si es Triangulo escriba (T) y si es circulo escriba(C)`)

if (fig == 'T') {
    let base = Number(prompt("Escribe la base del triangulo: "))
    let altura = Number(prompt("Escribe la altura del triangulo: "))
    let area = (base * altura)/2
    console.log(`El area del triangulo es: ${area}`)
}
if (fig == 'C') {
    let radio = Number(prompt("Escribe el radio del circulo: "))
    let area = Math.PI * radio**2
    console.log(`El area del circulo es: ${area}`)
}

})