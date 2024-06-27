

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

   
    