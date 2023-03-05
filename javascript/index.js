function criaCalculadora() {
    return {
        display: document.querySelector('.display'),//metodos estao na parte de cima
        inicia() {
            this.clickBotoes();   
            
        },  
       
        realizaConta(){
            let conta = this.display.value;
            try{
                conta =eval(conta);
                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('Conta invalida');
                return;
            }
        },
        // atributos para baixo
        btnClear:document.querySelector('.btn-clear'),
      clearDisplay(){
        this.display.value='';
      },
       
        apagarUm(){
            this.display.value = this.display.value.slice(0 , -1)
        },
       
        clickBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }
                if(el.classList.contains(`btn-eq`)){
                    this.realizaConta();
                }
            }.bind(this));
            
        },

btnParaDisplay(valor){
    this.display.value += valor;
}

    }
}
const Calculadora = criaCalculadora();
Calculadora.inicia();