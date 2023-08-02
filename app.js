// ---variables
let personajes ;




//---fetch

fetch('https://rickandmortyapi.com/api/character')
.then((datos)=>{
    return datos.json();
})
.then((datos)=>{
    personajes = datos.results;
    console.log(personajes)
})