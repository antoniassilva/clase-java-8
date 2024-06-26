

let queryString=location.search
let queryObj= new URLSearchParams(queryString)

let id = queryObj.get("id");
console.log(id);

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let section = document.querySelector(".sec");
        section.innerHTML = `<h2>${data.name}</h2>
                            <img src=${data.image}>
                            <p>Especie: ${data.species}</p>
                            <a class="carrito" href="./carrito.html">agregar a fav</a>`;

        
    })
    .catch(function(err) {
        console.log(err);
    });

    Modificar el archivo detalle.js para que el texto "Agregar al carrito" guarde el id del personaje en un array y luego el array se guarde en localStorage. La funcionalidad debe permitir guardar múltiples ids. Probala agregando a diferentes personajes y comprobando que se guarden los ids. 
    Revisá si los archivos carrito.html y carrito.js están correctamente vinculados.
    