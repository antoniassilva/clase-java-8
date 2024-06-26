let frutas= ['banana', 'manzana', 'pera']
let frutasString = JSON.stringify(frutas)

sessionStorage.setItem('frutas', frutasString)

let frutasTraidas = sessionStorage.getItem('frutas')

let frutasParseadas= JSON.parse(frutasTraidas)
console.log(frutasParseadas)