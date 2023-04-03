import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta
{
    static cantidadCuentas = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
        CuentaNomina.cantidadCuentas++;

    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 1);
    }
}