
var divs;
function inputTextInDiv(){
    divs  = document.querySelectorAll('childs');
    divs.forEach(div => {
        var estilo = div.querySelector('.child');
        estilo.innerHTML = "Exemplo";
    });
}
inputTextInDiv();

