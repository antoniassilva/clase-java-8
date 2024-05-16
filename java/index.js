function area(altura, ancho) {
    return altura*ancho 
}
let rectangulo=area(4,2)
console.log(rectangulo)

function largo(array){
    return array.length;
}
let LargoArray= largo(["casa", "auto", "bano", "perro", "caballo"])
console.log(LargoArray)

function palabra(x){
    return x.length;
}
let cantidadDeLetras= palabra("antonia")
console.log(cantidadDeLetras)

function precio(x){
    iva=x*0.21
    return x + iva
}

let PrecioFinal = precio(100)
console.log(PrecioFinal)

let misDatos={
    nombre: 'antonia',
    dni: 47178377,
    comidas: ['milanesa', 'atun','rapiditas'],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " y mi dni es " + this.dni +". Mi primer comida favorita es " + this.comidas[0];
    }
}

console.log(misDatos.saludar())

let auto={
    marca: 'ford',
    modelo: 'fiesta',
    anio: 2018,
    posicion: 0,
    avanzar: function(n) {
    
            return this.posicion += n;
        
    },
    retroceder: function(n)  {
            return this.posicion -= n;
        }
    
}

let anaza= auto.avanzar(10)
let retrocedio= auto.retroceder(15)

console.log(auto.posicion)

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n) {
        this.energia-= 10;
        return "eneria restante " + this.energia
    }


}

ironMan.getPoder(5)

console.log(ironMan.getPoder())

for (let i=0; i<5; i++) {
    console.log('Practicando con el bucle for');
  };
  
for (let i=0; i<10; i++) {
    console.log('Dando la vuelta número ' + i);
  };

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}

for (let i=100; i>=0; i--) {
    console.log(i); 
  };

let base= 2
let resultado=[]

for (let i=1; i<=10; i+=1) {
   resultado.push(base*i);
}

console.log(resultado)

let gannacias=[2,-4,8,-1,22,4,5,-3,-10,7]
let suma=0

for (let i=0; i<gannacias.length; i+=1){
    suma+=gannacias[i]
}

console.log(suma)

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]

for (let i=0; i<healingIsDifficult.length; i+=1){
     console.log(i+1 + " " + healingIsDifficult[i])
}

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19,
        ciudad: "Casterly Rock"
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; i<got.length; i+=1){
    console.log('Hola ' + got[i].nombre + ' ' + got[i].apellido + ' de la ciudad ' + got[i].ciudad)
}