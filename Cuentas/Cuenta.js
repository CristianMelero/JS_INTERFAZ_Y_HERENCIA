import { Cliente } from "../Cliente.js";

export class Cuenta {
	#cliente;
	#saldo;
	static numeroDeCliente = 0;

	set cliente(valor) {
		if (valor instanceof Cliente) this.#cliente = valor;
	}

	get cliente() {
		return this.#cliente;
	}

	constructor(cliente, agencia, saldo) {
		Cuenta.numeroDeCliente++;

		if (this.constructor == Cuenta) {
			throw new Error ("No se deben instanciar objetos de la clase cuenta");
		}

		this.#cliente = cliente;
		this.numero = Cuenta.numeroDeCliente;
		this.agencia = agencia;
		this.#cliente = cliente;
		this.#saldo = saldo;
	}

	depositoEnCuenta(valor) {
		if (valor > 0) this.#saldo += valor;
		return this.#saldo;
	}

	retirarDeCuenta(valor) {
		throw new Error ("Este método no se debe ejecutar, implemente el método retirar de cuenta en su clase")
	}

	_retirarDeCuenta(valor, comision) {
		valor = valor * (1 + comision / 100);
		if (valor <= this.#saldo) this.#saldo -= valor;
		return this.#saldo;
	}

	verSaldo() {
		return this.#saldo;
	}

	transferirParaCuenta(valor, cuentaDestino) {
		this.retirarDeCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
	}
}
