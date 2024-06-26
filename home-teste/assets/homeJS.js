/*
const reqform = document.querySelector('form');
const btnaction = reqform.addEventListener('submit',
function initial(){
    var texto = this.elements['texto'].value;
    if(texto){
        console.log('certo');
    }
});

initial();
*/
const btn = document.querySelector('.btn');
const url = "./menu/principal.html";

function novaJanela(url, nome){
    var nome = document.getElementById("nome").value;
    if(nome == 'yone'){
        window.open(url, '_blank');
    }
}
btn.addEventListener('click', () => {
    novaJanela(url, nome);
});