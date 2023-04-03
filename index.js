/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente = new Cliente("Leonardo", "13804050", "123224"); 

const cliente2 = new Cliente("María", "16979808", "8989");

const ccLeonardo = new CuentaCorriente(cliente, "001");
const ccMaria = new CuentaCorriente(cliente2, "002");

const caLeonardo = new CuentaAhorro(cliente, "001", 0);
const caAhorroMaria = new CuentaAhorro(cliente2, "001", 0);

const cnLeonardo = new CuentaNomina(cliente, "001");

const empleado = new Empleado("Juan Perez", "8548885", 10000);
const gerente = new Gerente("Pedro Vivas", "45454554", 12000);
const director = new Director("Mariana Moreno", "4554487", 15000);

empleado.asignarClave("12345")
gerente.asignarClave("12346")


console.log(SistemaAutenticacion.login(empleado, "12345"));
console.log(SistemaAutenticacion.login(gerente, "1236"));

console.log(SistemaAutenticacion.login(cliente, "1236"));


// let saldo = cuentaDeLeonardo.verSaldo();

// saldo = cuentaDeLeonardo.depositoEnCuenta(150);
// cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

// const saldoMaria = cuentaDeMaria.verSaldo();

// console.log('Cuenta de Maria',cuentaDeMaria);

// console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

// const saldoLeonardo = cuentaDeLeonardo.verSaldo();
// console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
// console.log(CuentaCorriente.cantidadCuentas);

// console.log(CuentaCorriente.cantidadCuentas);
