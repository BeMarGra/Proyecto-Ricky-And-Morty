// ---- elementos del html
let $tarjeta = document.getElementById('tarjeta');
let $mujerBoton = document.getElementById('mujeres');
let $hombreBoton = document.getElementById('hombres');
let $sinGeneroBoton = document.getElementById('sin');
let $desconocidoBoton = document.getElementById('desconocido');
let $todosBoton = document.getElementById('todos');


//---variables 

let listaPorGenero ;
let personajes = [];
let resultado ;
let resultadoUno ;
let resultadoDos ;
let resultadoTres ;
let resultadoCuatro ;

//---fetch

fetch('https://rickandmortyapi.com/api/character')
.then((datos)=>{
    return datos.json();
})
.then((datos)=>{
   personajes = datos.results;
    mostrar(personajes);
});

function mostrar(array){
    $tarjeta.innerHTML = '';
for(let i = 0; i < array.length; i++){
    $tarjeta.innerHTML +=   `<div class="card">
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
                        
                            </div>`
}
console.log(personajes);
}

// ---- FILTROS---------

function filtrarTodos(){
    $mujerBoton.classList.remove('botonFiltroApretado');
    $mujerBoton.classList.add('filtros');
    $hombreBoton.classList.remove('botonFiltroApretado');
    $hombreBoton.classList.add('filtros');
    $sinGeneroBoton.classList.remove('botonFiltroApretado');
    $sinGeneroBoton.classList.add('filtros');
    $desconocidoBoton.classList.remove('botonFiltroApretado');
    $desconocidoBoton.classList.add('filtros');
    $todosBoton.classList.remove('filtros');
    $todosBoton.classList.add('botonFiltroApretado');
    mostrar(personajes);
}  

function filtrarMujeres(){
    $mujerBoton.classList.remove('filtros');
    $mujerBoton.classList.add('botonFiltroApretado');
    $hombreBoton.classList.remove('botonFiltroApretado');
    $hombreBoton.classList.add('filtros');
    $sinGeneroBoton.classList.remove('botonFiltroApretado');
    $sinGeneroBoton.classList.add('filtros');
    $desconocidoBoton.classList.remove('botonFiltroApretado');
    $desconocidoBoton.classList.add('filtros');
    $todosBoton.classList.remove('botonFiltroApretado');
    $todosBoton.classList.add('filtros');
    resultadoCuatro = personajes.filter((personaje)=>{
       return personaje.gender === 'Female';
    })
mostrar(resultadoCuatro);
}   

function filtrarHombres(){
    $mujerBoton.classList.remove('botonFiltroApretado');
    $mujerBoton.classList.add('filtros');
    $hombreBoton.classList.remove('filtros');
    $hombreBoton.classList.add('botonFiltroApretado');
    $sinGeneroBoton.classList.remove('botonFiltroApretado');
    $sinGeneroBoton.classList.add('filtros');
    $desconocidoBoton.classList.remove('botonFiltroApretado');
    $desconocidoBoton.classList.add('filtros');
    $todosBoton.classList.remove('botonFiltroApretado');
    $todosBoton.classList.add('filtros');
    resultadoUno = personajes.filter((personaje)=>{
       return personaje.gender === 'Male';
    })
mostrar(resultadoUno);
}   

function filtrarSinGenero(){
    $mujerBoton.classList.remove('botonFiltroApretado');
    $mujerBoton.classList.add('filtros');
    $hombreBoton.classList.remove('botonFiltroApretado');
    $hombreBoton.classList.add('filtros');
    $sinGeneroBoton.classList.remove('filtros');
    $sinGeneroBoton.classList.add('botonFiltroApretado');
    $desconocidoBoton.classList.remove('botonFiltroApretado');
    $desconocidoBoton.classList.add('filtros');
    $todosBoton.classList.remove('botonFiltroApretado');
    $todosBoton.classList.add('filtros');
    resultadoDos = personajes.filter((personaje)=>{
       return personaje.gender === 'genderless';
    })
mostrar(resultadoDos);
}   

function filtrarDesconocido(){
    $mujerBoton.classList.remove('botonFiltroApretado');
    $mujerBoton.classList.add('filtros');
    $hombreBoton.classList.remove('botonFiltroApretado');
    $hombreBoton.classList.add('filtros');
    $sinGeneroBoton.classList.remove('botonFiltroApretado');
    $sinGeneroBoton.classList.add('filtros');
    $desconocidoBoton.classList.remove('filtros');
    $desconocidoBoton.classList.add('botonFiltroApretado');
    $todosBoton.classList.remove('botonFiltroApretado');
    $todosBoton.classList.add('filtros');
    resultadoTres = personajes.filter((personaje)=>{
       return personaje.gender === 'unknown';
    })
mostrar(resultadoTres);
}   

 

//------eventos-----

$mujerBoton.addEventListener('click',filtrarMujeres)
$hombreBoton.addEventListener('click',filtrarHombres)
$sinGeneroBoton.addEventListener('click',filtrarSinGenero)
$desconocidoBoton.addEventListener('click',filtrarDesconocido)
$todosBoton.addEventListener('click',filtrarTodos)
