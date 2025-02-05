//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criando array
let amigos = [];

// Adicionando o nome de amigos
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;

    // Validando o campo, garantido que não esteja vazio
    if(nome.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Armazenando nome, enviando-o para lista, esvaziando o input
    amigos.push(nome);
    atualizarLista();
    document.getElementById('amigo').value = '';
}

// Atualizando a lista com os nomes
function atualizarLista() {
    const elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = '';

    // Criando elemento de lista para cada nome
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        elementoLista.appendChild(li);
    }
}

// Sorteando o nome de um amigo
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('Não há amigos na lista para sortear. Por favor, insira nomes.');
        return;
    }

    //Gerando um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Acessando nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrando o nome sorteado
    document.getElementById('resultado').innerHTML = amigoSorteado;
}