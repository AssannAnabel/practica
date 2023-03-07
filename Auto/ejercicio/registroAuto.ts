/*consultar, borrar,actualizar,y dar de alta*/
import { Auto } from "./autos";

const fs = require("fs");

let listaVehiculos: any[] = [];

const data = fs.readFileSync("./listado.json", "utf8");
    const vehiculos = JSON.parse(data);
    for (let i = 0; i < vehiculos.length; i++) {
      listaVehiculos.push(vehiculos[i]);
    }

export class RegistroAuto {
  //consultar listado.

  consultar() {
    console.log(listaVehiculos)
  }

  darAlta(auto: Auto, array: Auto[]) {
    //NO TOCAR--AGREGA NUEVO AUTO AL LISTADO
    if (array.push(auto)) {
      console.log("Se incorporo vehiculo ", auto, " para la venta");
      this.consultar(); //opcional
    } else {
      console.log("el auto ", auto, " no se pudo incorporar");
    }
  }

  darBaja(nombre: string, array: Auto[]): any {
    let autoBaja = array.findIndex((auto) => auto.modelo === nombre);

    if (autoBaja >= 0) {
      array.splice(autoBaja, 1);
      console.log("El vehiculo ", nombre, "se dio de baja");
      console.log(array);

      return array;
    } else {
      console.log(
        "El vehiculo ",
        nombre,
        " no pudo darse de baja porque no se encontro"
      );
    }
  }

  consultarAuto(modelo: string, array: Auto[]) {//FUNCIONA
    let autoEncontrado = array.find((auto) => auto.modelo === modelo);
      if (autoEncontrado) {
      console.log(modelo, " Esta disponible ", autoEncontrado);
      return autoEncontrado;
    } else {
      console.log(modelo, " No esta disponible");
    }
  }
}

let suran = new Auto("Suran", "Renault", 2016, "Rojo", "Sedan", 59004);
let corolla= new Auto("Corolla", "Toyota", 2011, "Gris", "Sedan", 202456);
let vendedor = new RegistroAuto();

//vendedor.consultar() //CONSULTA LISTADO DE AUTOS
//vendedor.consultarAuto("k", listaVehiculos); //CONSULTA POR UN AUTO ESPECIFICO
//vendedor.darAlta(corolla, listaVehiculos); // agrega un nuevo auto
//vendedor.darAlta(suran, listaVehiculos); // agrega un nuevo auto
vendedor.darBaja("k", listaVehiculos); //Elimina un vehiculo y devuelve el listado modificado
//console.log(listaVehiculos);

