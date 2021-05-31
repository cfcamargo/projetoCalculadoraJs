class CalcController {

    // nomes de classe sempre inciciam em letra maiúscula
    // o que importa é o que tem dentro da classe, classe vazia nao serve de nada.

    // dentro da classe sempre encontramos variáveis e funções


    constructor() {

        //dentro dos parenteses passamos os parametros, e dentro das chaves o que vai fazer

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

        // o comando interno this referencia  atributos e métodos.
    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");


        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "12/05/2018"
        timeEl.innerHTML = "00:00"


    }

    get displayCalc() {
        return this._displayCalc;
    }
    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(valor) {
        this.currentDate = valor;
    }

}
