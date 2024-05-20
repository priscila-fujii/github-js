function criaCalculadora(){
    return{

        display: document.querySelector('.display'), //Seleciona o conteúdo do <input>
        //agora o display/<input> é um atributo qua faz parte do objeto calculadora
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btnDel'),

        //daqui para cima serão os OBJETOS
        inicia(){
            this.clickBotoes();
        },
        //Daqui para baixo serão os métodos
        clickBotoes(){
            document.addEventListener('click', e =>{
                const element = e.target;

                if(element.classList.contains('btn-num')){
                    this.btnParaDisplay(element.innerText);
                }
                if(element.classList.contains('btn-clear')){
                    this.clearBoatao();
                }
                if(element.classList.contains('btn-del')){
                    this.apagaUmNum();
                }
                if(element.classList.contains('btn-equal')){
                    this.resultConta();
                }

            } );
        },
        clearBoatao(){
            this.display.value = '';
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        apagaUmNum(){
            this.display.value = this.display.value.slice(0, -1);
        },

        resultConta(){
            let conta = this.display.value;
            //faz uma cópia de toda a string do display
            try{
                conta = eval(conta);
            /*
            O eval()método avalia ou executa um argumento.
            Se o argumento for uma expressão, eval()avalia a expressão.
            Se o argumento for uma ou mais instruções JavaScript,
            eval()executa as instruções.
            **** NÃO use eval() ****
            Executar JavaScript a partir de uma string é um GRANDE risco de segurança.
            Com eval(), código malicioso pode ser executado dentro do seu aplicativo sem permissão.
            Com eval(), o código de terceiros pode ver o escopo da sua aplicação,
            o que pode levar a possíveis ataques.
            */
                if(!conta){
                    alert('conta inválida');
                    return;
                }
                
                this.display.value = String(conta);
            } catch(e){
                alert('Conta inválida...');
                return;
            }
        }
    };
}

const calc = criaCalculadora();
calc.inicia();