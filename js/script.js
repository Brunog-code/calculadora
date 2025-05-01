class Calculadora{
    constructor(){
        this.btnAcao = document.querySelectorAll('.btnAcao')
        this.btnValor = document.querySelectorAll('.btnValor')
        this.btnLimpar = document.getElementById('btnClear')
        this.btnCalcular = document.getElementById('btnCalcular')
        this.displayResultado = document.getElementById('displayResultado')
        this.limparProximaTecla = false
        this.expressao = ''
        this.resultado = 0
    }

    adicionarEventos(){
        //evento valor
        this.btnValor.forEach((button) => {
            button.addEventListener('click', () => this.valor(button.textContent))
        })

        //evento acao
        this.btnAcao.forEach((button) => {
            let acao = button.textContent == 'x' ? '*' : button.textContent
            button.addEventListener('click', () => this.teclaAcao(acao))
        })

        //evento calcular
        this.btnCalcular.addEventListener('click', () => this.calcular())
    
        //evento limpar
        this.btnLimpar.addEventListener('click', () => this.limpar())
    }

    valor(valor){
        if(this.limparProximaTecla){
            this.expressao = valor
            this.limparProximaTecla = false
        }else{
            this.expressao += valor
        }
        this.displayResultado.value = this.expressao
    }

    teclaAcao(acao){
        this.expressao += acao
        this.displayResultado.value = this.expressao
        this.limparProximaTecla = false
    }

    calcular(){
        try{
            this.resultado = eval(this.expressao)
            this.displayResultado.value = this.resultado
            this.expressao = this.resultado.toString()
            this.limparProximaTecla = true
        } catch(e){
            this.displayResultado.value = 'Error'
            this.expressao = ''
            this.limparProximaTecla = true
        }
    }

    limpar(){
        this.expressao = ''
        this.displayResultado.value = 0
        this.limparProximaTecla = false
    }
}

const calc = new Calculadora() //instaciar o obj
calc.adicionarEventos() //iniciar a escuta dos botoes