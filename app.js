// ---- ELEMENTOS DEL HTML

//--------------- menu responsive
let $menuBoton = document.getElementById('menu');
let $cerrarBoton = document.getElementById('cerrar');
let $menuTodos = document.getElementById('opcion1')
let $menuMuejeres = document.getElementById('opcion2')
let $menuHombres = document.getElementById('opcion3')
let $menuSGenero = document.getElementById('opcion4')
let $menuDesconocido = document.getElementById('opcion5')

//------------filtros
let $tarjeta = document.getElementById('tarjeta');
let $mujerBoton = document.getElementById('mujeres');
let $hombreBoton = document.getElementById('hombres');
let $sinGeneroBoton = document.getElementById('sin');
let $desconocidoBoton = document.getElementById('desconocido');
let $todosBoton = document.getElementById('todos');
let $contador = document.getElementById('contadorTarjetas');

//------------paginado
let $principioBoton = document.getElementById('principio');
let $menosBoton = document.getElementById('antes');
let $numeroPagina = document.getElementById('nroPagina')
let $masBoton = document.getElementById('despues');
let $finalBoton = document.getElementById('final');
let $nroPaginaUsuario = document.getElementById('pagina');

//------------- Ver Mas

let $verMasBoton = document.getElementById('masInfo');
let $infoVentana = document.getElementById('infoVentana');
let $cerrarVentanaB = document.getElementById('cerrarVentana');

//---variables 

let listaPorGenero ;
let personajes = [];
let resultado ;
let resultadoUno ;
let resultadoDos ;
let resultadoTres ;
let resultadoCuatro ;
let pagina = 1 ;
let numeroIngresado ;

//---fetch

fetch('https://rickandmortyapi.com/api/character')
.then((datos)=>{
    return datos.json();
})
.then((datos)=>{
    personajes = datos.results;
    console.log(personajes)
})