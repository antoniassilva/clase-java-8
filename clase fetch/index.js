fetch("https://rickandmortyapi.com/api/character/1")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let personaje= document.querySelector("article")
        personaje.innerHTML= `<h2>${data.name}</h2> <img src="${data.image}">`
        
    })
    .catch(function(err){
        console.log(err);
    })
