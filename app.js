// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if(inputAmigo.value == "") {
        alert("Ingrese un nombre");
    }
    listaAmigos.push(inputAmigo.value);
    console.log(listaAmigos);

    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
};

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    console.log(random);

    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`
    console.log(amigoSecreto);
};
