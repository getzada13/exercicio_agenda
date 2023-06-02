const form = document.getElementById('form-agenda');
let linhas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    const nome = inputNomeContato.value;
    const numero = inputNumeroContato.value;

    if (verificarNomeRepetido(nome)) {
        alert('já existe um contato com esse nome!');
        return;
    }

    let linha = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaNumero = document.createElement('td');

    colunaNome.textContent = nome;
    colunaNumero.textContent = numero;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaNumero);

    linhas.push(linha);

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
    linhas.forEach(function(linha) {
        corpoTabela.appendChild(linha);
    });

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});

function verificarNomeRepetido(nome) {
    const corpoTabela = document.querySelector('tbody');
    const nomes = corpoTabela.getElementsByTagName('td');

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].textContent === nome) {
            return true;
        }
    }

    return false;
}
