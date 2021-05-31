class CalcController {

    // nomes de classe sempre inciciam em letra maiúscula
    // o que importa é o que tem dentro da classe, classe vazia nao serve de nada.

    // dentro da classe sempre encontramos variáveis e funções


    constructor() {

        //dentro dos parenteses passamos os parametros, e dentro das chaves o que vai fazer

        this._displayCalc = "0";
        this._dataAtual;

        // o comando interno this referencia  atributos e métodos.
    }

    get displayCalc() {
        return this._displayCalc;
    }
    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        this.dataAtual = valor;
    }

}
