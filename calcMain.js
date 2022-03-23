function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }; // função menos longa

    this.capturaEnter = () => {
        document.addEventListener ('keyup', e => {
            if (e.keyCode === 13) {
            this.realizaConta();
        }
        });
    };

    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Cálculo inválido');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Cálculo inválido');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = function () {
        this.display.value = '';
    } // função longa

    this.del = function () {
        this.display.value = this.display.value.slice(0, -1);
    }; // função longa



}

const calculadora = new Calculadora();
calculadora.inicia();
