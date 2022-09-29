addEventListener("DOMContentLoaded", ()=>{
    
// 9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los 
// impares. Numero par es aquel que su residuo igual a cero (num mod !=0


let canum, sumpar=0, sumimpar=0, j, nu  
canum= Number(prompt("Ingrese la cantidad de numeros que quiera ingresar: "))
for ( j= 0; j < canum; j++) {
    nu= Number(prompt("Ingrese un numero: "))
    if(nu%2 == 0){
        sumpar += nu
    }
    else{
        sumimpar +=nu
    }
}
console.log(`La suma de los pares es ${sumpar} y la suma de los impares es ${sumimpar}`)
alert(`La suma de los pares de ${sumpar} \n La suma de los impares es de ${sumimpar}`)

})