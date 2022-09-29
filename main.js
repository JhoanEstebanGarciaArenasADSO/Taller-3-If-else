addEventListener("DOMContentLoaded", ()=>{
    
// 12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
// caso contrario indicar con un mensaje que la operación no es posible realizarla

let num1, num2, res

num1= Number(prompt("Ingrese un numero: "))
num2= Number(prompt("Ingrese otro numero: "))

if (num1>num2){
    res = num1 - num2
    console.log(`El resultado de la resta es: ${res}`)
    alert(`El resultado de la resta es: ${res}`)
}
else{
    console.log(`La operacion no es posible realizarla`)
    alert(`La operacion no es posible realizarla`)
}
})