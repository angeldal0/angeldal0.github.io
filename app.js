/*

var form = document.getElementById("filtrar");

form.addEventListener("submit", filtrarPalabra);

//

function filtrarPalabra(e){
    e.preventDefault();
    //mira marico el parametro aqui en realidad no vale pa nah, el parametro es simplemente que se cumple el evento
    var filtrarPalabras = document.getElementById("palabra").value; //obtenemos la palabra
    filtrarPalabras = filtrarPalabras.toLowerCase(); //la pasamos a minusculas

    var palabra = document.getElementsByClassName("contenido"); //crea un array que contiene a todos los p de la clase contenido


    /*es una funcion que por cada indice del array hará una iteración con cada uno o sea Array.form(palabra)"esto indica el array a trabajar".forEach"por cada indice"
    (function"realizara esta funcion(filtrando"este es el contenido del array por iteracion")){

    Array.from(palabra).forEach(function(filtrando){ 
        var filtrado = filtrando.firstChild.textContent; //variable que contendra el texto de ese p
        filtrado = filtrado.toLocaleLowerCase(); //todo a minusculas igual
        if (filtrado.match(filtrarPalabras) != -1){
            console.log("filtrado: " + filtrado +"   Filtrando " + filtrarPalabras);
            filtrando.style.color="yellow";
        }else{
            filtrando.style.color="#555555";
        }

    })
    
} */

/*******************************************************************/
/*                      script del menu                            */
/*******************************************************************/

var botonMenu = document.getElementById("botonMenu"); //recivo la palabra menu del coheader
var menu = document.getElementById("menu"); // recivo el div contenedor del menu

botonMenu.addEventListener("mouseenter", mostrarMenu); // cuando el evento museup ocurra que es cuando pase el puntero sobre la palabra menu, este será mostrado

menu.addEventListener("mouseenter", mostrarMenu); // cuando el evento museup ocurra que es cuando pase el puntero sobre la palabra menu, este será mostrado
menu.addEventListener("mouseleave", ocultarMenu); // cuando el mouse entre y salga del menu, este se ocultará, pero debe entrar, si sale sin entrar no se ocultara

function mostrarMenu(e){
    menu.style.display = "block"; //hace el menu visible
}

function ocultarMenu(e){
    menu.style.display = "none"; //hace el menu invisible
}

/*******************************************************************/
/*                    script del buscador de posts                 */
/*******************************************************************/

var form = document.getElementById("botoncito");

form.addEventListener("click", filtrarPalabra);

function filtrarPalabra(e){
    e.preventDefault();
    var palabraClave = document.getElementById("palabra").value;
    var titulos = document.getElementsByClassName("post-tittle");
    palabraClave = palabraClave.toLowerCase();
    if(palabraClave === "" || palabraClave === " "){
        return;
    }

    for (var i = 0; i < titulos.length; i++){
        var palabra = titulos[i].innerHTML;
        console.log("hola" + i);
        if (palabra.toLowerCase().indexOf(palabraClave) != -1){
            titulos[i].className = "post-tittle resaltando";
        } else {
            titulos[i].className = "post-tittle normal";
        }
        
    }    
    
}










  //  if (str.includes(palabraClave)){
    //    console.log("marica siiii");      
    //}

