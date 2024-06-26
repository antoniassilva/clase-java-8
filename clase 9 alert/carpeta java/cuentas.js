//Creá el archivo cuentas.html su correspondiente archivo js y vinculalos.
//Dentro del archivo js, mediante un prompt solicitá al usuario que ingrese un número y guardalo en una variable. Con otro prompt solicitá otro número y también guardalo en una variable.
//Creá una función con nombre multiplicar que reciba 2 parámetros (números) y que retorne la frase: “El resultado de multiplicar num1 y num2 es: resultado”. Ejecutá la función y mostrá el resultado por consola.
let primerNumero= prompt('numero1')
let segundoNumero= prompt('numero2')

function multiplicar(x,y){
    resultado= x*y 
    return 'El resultado de multiplicar num1 y num2 es: ' + resultado
}

console.log(multiplicar(primerNumero, segundoNumero))
