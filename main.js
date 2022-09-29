addEventListener("DOMContentLoaded", ()=>{
    
// 8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
// la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
// a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.

let trab = prompt(`Ingrese en que trabaja, si es en planta ingresa (P), si es en administrativo ingresa (A): `)
let hor = Number(prompt("Ingrese las horas trabajadas: "))
if (trab ==  "P") {
    let sueld = 20000 * hor
    console.log(`Su sueldo es ${sueld}`)
}
if (trab == "A" ) {
    let sueld = 10000 * hor
    console.log(`Su sueldo es ${sueld}`)
}

})