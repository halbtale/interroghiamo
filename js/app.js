var input = document.querySelector('.input');
var output = document.querySelector('.output');
var btn = document.querySelector('.btn');

function generaAlunnoCasuale() {
    var numeroAlunni = input.value;
    var numeroCasuale = Math.floor(Math.random() * numeroAlunni + 1);
    output.innerHTML = numeroCasuale;
}

btn.addEventListener('click', generaAlunnoCasuale);

console.log('funziona');
