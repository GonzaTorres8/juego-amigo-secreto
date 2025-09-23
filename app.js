// Lista de nombres 
let amigos = []


// Function para agregar un amigo 
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();


   if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre");
    return;
}

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}ya esta en la lista` )
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = "";

    actualizarLista();
}


//Function actualizar lista de amigos 
function actualizarLista() { 
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "" ;

    for(let i = 0; i <amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}



//Function amigo aleatorio 

function sortearAmigo(){
    if(amigos.length === 0 ) {
        alert("No hay amigos disponibles para soretar , añade uno ")
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado:${amigoSorteado}`;

    listaAmigos.innerHTML = ""; 
    amigos = [];
}