
// Exemplo de função em JavaScript chamada por um evento
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    calcularAreaRetangulo();
});

// Função de exemplo em JavaScript
function exemplo() {
    alert("Essa função foi chamada pelo botão");
}

// Função para calcular a área do retângulo
function calcularAreaRetangulo() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    let area = base * altura;
    document.getElementById('area').value = area;
    document.getElementById('resultado').innerText = `A área do retângulo é ${area}`;
}

// Exemplo de evento em JavaScript disparado ao pressionar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        alert('Você pressionou a tecla ESC');
    }
});

// Exemplo de evento em JavaScript disparado ao pressionar a tecla 2
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 50) {
        alert('Você pressionou a tecla 2');
    }
});

// Exemplo de evento em JavaScript disparado ao pressionar a tecla ENTER em um campo de texto
document.getElementById('base').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Você pressionou a tecla ENTER no campo base');
    }
});

// Exemplo de evento em JavaScript disparado ao passar o mouse sobre um elemento
document.getElementById('base').addEventListener('mouseover', function() {
    console.log('Você passou o mouse sobre o campo base');
});
