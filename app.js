// Array para armazenar os nomes
let nomes = [];

// Função para adicionar nomes
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome) {
        nomes.push(nome); // Adiciona o nome ao array
        atualizarListaAmigos(); // Atualiza a lista na tela
        inputAmigo.value = ''; // Limpa o campo de input

        // Habilita o botão "Recomeçar o Jogo" após o primeiro nome ser inserido
        const botaoRecomecar = document.querySelector('.button-restart');
        if (nomes.length === 1) {
            botaoRecomecar.disabled = false;
        }
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    nomes.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${nome}`;
        listaAmigos.appendChild(li);
    });
}

// Função para recomeçar o jogo
function recomecarJogo() {
    // Limpa o array de nomes
    nomes = [];

    // Limpa a lista de nomes na tela
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Limpa o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Desabilita o botão "Recomeçar o Jogo"
    const botaoRecomecar = document.querySelector('.button-restart');
    botaoRecomecar.disabled = true;

    // Foca no campo de input para facilitar a adição de novos nomes
    document.getElementById('amigo').focus();
}

// Função para sortear um nome
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length); // Sorteia um índice
    const nomeSorteado = nomes[indiceSorteado]; // Pega o nome sorteado

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}