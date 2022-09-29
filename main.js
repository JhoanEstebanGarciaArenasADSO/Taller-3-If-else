addEventListener("DOMContentLoaded", ()=>{
// 6. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
// en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
// mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

let temper = Number(prompt(`Escribe la temperatura: `))
let presion = Number(prompt(`Escribe la presion: `))
if (temper > 100 || presion > 200) {
    console.log(`ALARMA`)
}
else{
    console.log(`NORMAL`)
}

})