// ejercicio 2 


let nombre=prompt('ingrese su nombre')
let edad = prompt('ingrese su edad')
fanDeportes= confirm('te gustan los deportes')
let respuesta= alert('Muchas gracias ' + nombre + ' por responder nustras preguntas')

let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes, 
    deportistaProfesional: function() { 
        if (this.fanDeportes) { 
            return 'Sí, soy fan de los deportes';
        } else {
            return 'No soy tan fan aún de los deportes';
        }
    }
};

console.log(usuario.deportistaProfesional())