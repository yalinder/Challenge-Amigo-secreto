
let nombres = []; //arreglo que contiene a todos los amigos
let nombre = "";
const ul = document.getElementById("listaAmigos");
let newli = "";
let newUl = document.getElementById("resultado"); 
let nombresSorteados = []; //Arreglo que contiene a los amigos ya sorteados

function limpiarCampo (){

    document.getElementById("amigo").value = "";
}

//Función para tomar amigo del input y agregarlo al array y a la lista
function addAmigo(){

    nombre = document.getElementById("amigo").value;

    if(nombre === "" || nombre.includes(" ")){

        alert("Por favor, inserte un nombre.");
    }
    else if(nombres.includes(nombre)){

        addLista(nombre);
    }
    else{
        
        nombres.push(nombre);
            addLista(nombre);
    }

    limpiarCampo();
}

//Función para crear un nuevo elemento li
function newLi()
{     
    newli = document.createElement("li");
}

//Función para agregar li al ul 
function addLista(element){

     newLi();
    newli.textContent = element;
    ul.appendChild(newli); 
}

//Función para sortear amigos
function sortearAmigo()
{
    let max = nombres.length - 1;
    let selecAmigo = 0;

    if(nombres.length > 0)
    {
        //Este do while evita que un nombre sorteado se vuelva a sortear
        do 
        {  
            selecAmigo = Math.floor(Math.random() * (max + 1));

            if(nombresSorteados.length == nombres.length) 
            {
                alert("¡Todos los nombres sorteados! Añade uno nuevo o reinicie la página");
                break;
            }
        }

        while(nombresSorteados.includes(nombres[selecAmigo])); 

        //Parte que agrega el nombre sorteado a la lista
        if(nombres.length > nombresSorteados.length)
        {
            newLi();
            newli.textContent = nombres[selecAmigo];
            nombresSorteados.push(nombres[selecAmigo]);                
            newUl.appendChild(newli); 
        }
    }
    else alert("Inserte un nombre, por favor");
}

//Ocultar amigo de la lista
  ul.addEventListener("click", function(evento) 
  {
    if (evento.target.tagName === "LI") 
    {          
     ul.removeChild(evento.target);
    }
  });

  //Ocultar amigo sorteado
   newUl.addEventListener("click", function(evento)
    {
    if (evento.target.tagName === "LI") 
    {       
     newUl.removeChild(evento.target);
    }
  });
