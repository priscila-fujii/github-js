/*
var divarray = document.querySelectorAll('.container');
function inputTextInDiv(){
 
    divarray.forEach(div => {
        var estilo = div.querySelector('.child');
        estilo.querySelector('p').textContent = "Exemplo";
    });
}
inputTextInDiv();
*/
var divarray = document.querySelectorAll('.container');
 
divarray.forEach(child => {
    //var paragrafo = div.querySelectorAll('div');
    var div = child.querySelector('p').textContent;
    div = 'Exemplo';
    console.log(div);
})