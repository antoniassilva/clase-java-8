let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id= queryStringObj.get('id');
console.log(id)

fetch(`https://rickandmortyapi.com/api/character/${id}`)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);
    document.querySelector(".titulo").innerHTML+=data.name
    document.querySelector(".statu").innerHTML+=data.status
    document.querySelector(".especie").innerHTML+=data.species
    document.querySelector(".foto").src=data.image

})
	.catch(function(error){
	console.log('El error es: ' + error);
})
