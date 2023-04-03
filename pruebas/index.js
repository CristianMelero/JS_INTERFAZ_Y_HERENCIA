class Cuenta {
  titular;
  #saldo;
  numero;

    constructor(titular, numero) {
      this.titular = titular;
      this.numero = numero;
      this.#saldo = 0;
    }

    get saldo() {
      return this.#saldo
    }

  }
  
  class CuentaCorriente extends Cuenta {
    constructor(titular, numero) {
      super(titular, numero);
    }
  }
  
  const cuenta = new CuentaCorriente("Pedro", 1245);
  console.log(cuenta.saldo)
