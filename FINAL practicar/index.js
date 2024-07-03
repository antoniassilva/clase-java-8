fetch("https://rickandmortyapi.com/api/character ")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
        let seccion= document.querySelector(".characterList")
        let info= ""

        for (let i=0; i<data.results.length; i+=1) {
            info+= ` <article class= "hijo">
         <img src= ${data.results[i].image} alt=''>
          <p>Name:${data.results[i].name}</p>
          <p>Status:${data.results[i].status}</p>
        </article>`;
         }

         seccion.innerHTML=info;
    })
    .catch(function(err){
        console.log(err);
    })
