// ---variables
let $tarjeta = document.getElementById('tarjeta');



//---fetch

fetch('https://rickandmortyapi.com/api/character')
.then((datos)=>{
    return datos.json();
})
.then((datos)=>{
   let personajes = datos.results;
    mostrar(personajes);
});

function mostrar(array){
for(let i = 0; i < array.length; i++){
    $tarjeta.innerHTML +=   `<div id="tarjeta">
                                <div class="card">
                                    <div class="contenedorImg">
                                        <img class="imgPersonaje" src=${array[i].image}>
                                    </div>
                                    <p>Nombre:  </p>
                                    <h2>${array[i].name}</h2>
                                    <p>Genero: ${array[i].gender}</p>
                                    <p>Especie: ${array[i].species} </p>
                                    <p>Estado: ${array[i].status}</p>
                                    <p>Origen: ${array[i].origin.name}</p>
                                    <p>Locación: ${array[i].location.name}</p>
                                </div>
                            </div>`
}
}