fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let seccion= document.querySelector(".characterList")
  let characters= " "

  for(let i=0; i<data.results.length; i+=1){
        characters+=`<article class= "articulo">
         <img src=${data.results[i].image} alt=''>
          <a href="./detalles.html?id=${data.results[i].id}"><p>Name:${data.results[i].name}</p></a>
          <p>Status:${data.results[i].status}</p>
 </article>
`
  }
  seccion.innerHTML= characters
  
 
})
.catch(function(error) {
  console.log("Error: " + error);
})
