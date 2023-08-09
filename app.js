// ---- elementos del html

//------------filtros
let $tarjeta = document.getElementById('tarjeta');
let $mujerBoton = document.getElementById('mujeres');
let $hombreBoton = document.getElementById('hombres');
let $sinGeneroBoton = document.getElementById('sin');
let $desconocidoBoton = document.getElementById('desconocido');
let $todosBoton = document.getElementById('todos');
//------------paginado
let $principioBoton = document.getElementById('principio');
let $menosBoton = document.getElementById('antes');
let $numeroPagina = document.getElementById('nroPagina')
let $masBoton = document.getElementById('despues');
let $finalBoton = document.getElementById('final');


//---variables 

let listaPorGenero ;
let personajes = [];
let resultado ;
let resultadoUno ;
let resultadoDos ;
let resultadoTres ;
let resultadoCuatro ;
let pagina = 1 ;

//---fetch

function usarFetch(numeroPagina){
    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
    .then((datos)=>{
        return datos.json();
    })
    .then((datos)=>{
        personajes = datos.results;
        mostrar(personajes);
    });
}

//-------------------------------------------
//----------- FETCH INICIAL------------------
//-------------------------------------------

usarFetch(pagina);
    $numeroPagina.innerHTML = `Pág. ${pagina}/42`;
    // $principioBoton.disabled = true;
    // $menosBoton.disabled = true;
    // $principioBoton.classList.remove('botonPaginado');
    // $principioBoton.classList.add('botonPaginadoApagado');
    // $menosBoton.classList.remove('botonPaginado');
    // $menosBoton.classList.add('botonPaginadoApagado');

        // ............ FUNCION MOSTRAR .............................

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

//--------------------------------------
// -------------- FILTROS --------------
//--------------------------------------

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


//--------------------------------------------------------------
//----------------------PAGINADOS-------------------------------
//--------------------------------------------------------------

function primera(){
    usarFetch(pagina);
        $numeroPagina.innerHTML = `Pág. 1/42`;

        $principioBoton.disabled = true;
        $menosBoton.disabled = true;

        $principioBoton.classList.remove('botonPaginado');
        $principioBoton.classList.add('botonPaginadoApagado');
        $menosBoton.classList.remove('botonPaginado');
        $menosBoton.classList.add('botonPaginadoApagado');      
}

function anterior(){
    pagina--;
    usarFetch(pagina);
        $numeroPagina.innerHTML = `Pág. ${pagina}/42`;

        $principioBoton.disabled = false;
        $menosBoton.disabled = false;
        $masBoton.disabled = false;
        $finalBoton.disabled = false;

        $principioBoton.classList.remove('botonPaginadoApagado');
        $principioBoton.classList.add('botonPaginado');
        $menosBoton.classList.remove('botonPaginadoApagado');
        $menosBoton.classList.add('botonPaginado');
      
    if (pagina === 1){
        usarFetch(pagina);
            $numeroPagina.innerHTML = `Pág. 1/42`;

            $principioBoton.disabled = true;
            $menosBoton.disabled = true;

            $principioBoton.classList.remove('botonPaginado');
            $principioBoton.classList.add('botonPaginadoApagado');
            $menosBoton.classList.remove('botonPaginado');
            $menosBoton.classList.add('botonPaginadoApagado');
    } 
}

function siguiente(){
    pagina++;
    usarFetch(pagina);
        $numeroPagina.innerHTML = `Pág. ${pagina}/42`;

        $principioBoton.disabled = false;
        $menosBoton.disabled = false;
        $masBoton.disabled = false;
        $finalBoton.disabled = false;

        $principioBoton.classList.remove('botonPaginadoApagado');
        $principioBoton.classList.add('botonPaginado');
        $menosBoton.classList.remove('botonPaginadoApagado');
        $menosBoton.classList.add('botonPaginado');
        
    if (pagina === 42){
        $finalBoton.disabled = true;
        $masBoton.disabled = true;

        $finalBoton.classList.remove('botonPaginado');
        $finalBoton.classList.add('botonPaginadoApagado');
        $masBoton.classList.remove('botonPaginado');
        $masBoton.classList.add('botonPaginadoApagado');
    }

}

function ultima(){
    usarFetch(pagina);
    $numeroPagina.innerHTML = `Pág. 42/42`;
        $finalBoton.disabled = true;
        $masBoton.disabled = true;

        $masBoton.classList.remove('botonPaginado');
        $masBoton.classList.add('botonPaginadoApagado');
        $finalBoton.classList.remove('botonPaginado');
        $finalBoton.classList.add('botonPaginadoApagado');
}


//------eventos-----

$mujerBoton.addEventListener('click',filtrarMujeres)
$hombreBoton.addEventListener('click',filtrarHombres)
$sinGeneroBoton.addEventListener('click',filtrarSinGenero)
$desconocidoBoton.addEventListener('click',filtrarDesconocido)
$todosBoton.addEventListener('click',filtrarTodos)
//------------------------------------------------------

$principioBoton.addEventListener('click',primera)
$masBoton.addEventListener('click',siguiente)
$menosBoton.addEventListener('click',anterior)
$finalBoton.addEventListener('click',ultima)