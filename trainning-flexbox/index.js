
const divChilds= document.querySelectorAll('.child');
//const divChildren = divContainer.children;


divChilds.forEach((divs,index, divContainer) => {
    if(divs.textContent == "_"){
        divs.textContent = "Exemplo";
        console.log(divs.textContent);  
    }
});

//console.log(divChilds); 
