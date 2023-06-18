const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizarTabela();
})

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já existe`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}