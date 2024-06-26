//Mediante fetch obtené los datos de los personajes se encuentra en el endpoint: https://rickandmortyapi.com/api/character  
//Aquí encontrarás documentación del endpoint https://rickandmortyapi.com/documentation/#get-all-characters
//Usando lo aprendido para manejo del DOM capturá el elemento con clase “characterList” y guardalo en una variable. ¿En qué parte del código tendrás que hacer esta parte y los pasos que siguen?
//Creá la variable characters y colocale una cadena de texto vacía. Allí guardarás la información que proceses dentro del for.
fetch("https://rickandmortyapi.com/api/character ")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
        let sec= document.querySelector(".characterList")
        let characters= ""
        for (let i = 0; i < data.results.length; i++) {
            
            characters += `
                <article class= "hijo">
                    <a href="./detalle.html?id=${data.results[i].id}"><img src="${data.results[i].image}" alt=''></a>
                    <p>Name: ${data.results[i].name}</p>
                    <p>Status: ${data.results[i].status}</p>
                </article>
            `;
          }
          sec.innerHTML = characters;


    })
    .catch(function(err){
        console.log(err);
    })




