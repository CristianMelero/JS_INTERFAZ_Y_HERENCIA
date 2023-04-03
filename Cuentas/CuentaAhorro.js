import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {

    static cantidadCuentas = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
        CuentaAhorro.cantidadCuentas++;

    }
    
    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 2);
    }
}