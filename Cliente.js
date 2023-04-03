export class Cliente
{
    nombreCliente;
    dniCliente;
    cuilCliente;
    autenticable;
    #clave

    constructor(nombreCliente, dniCliente, cuilCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.cuilCliente = cuilCliente;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }

	autenticable(clave) {
		return clave == this.#clave;
	}
}