addEventListener("DOMContentLoaded", ()=>{
    
// 11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
// de computación

let nom, apellido, edad, nota1, nota2, nota3, promed, i
for (i=0; i < 5; i++) {
    nom=prompt("Ingresa tus nombres: ")
    apellido=prompt("Ingresa tus apellidos: ")
    edad=Number(prompt("Ingresa tu edad: "))
    nota1=Number(prompt("Ingresa la nota 1: "))
    nota2=Number(prompt("Ingresa la nota 2: "))
    nota3=Number(prompt("Ingresa la nota 3: "))
    promed= (nota1+nota2+nota3)/3
    console.log(`La nota promedio del estudiante  ${nom} ${apellido} es ${promed}`)
    alert(`La nota promedio del estudiante  ${nom} ${apellido} es ${promed}`)
}

})