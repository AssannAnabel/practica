/*consultar, borrar,actualizar,y dar de alta*/
import { Auto } from "./autos";
import fs from "fs";

export class RegistroAuto {

  data() { return JSON.parse(fs.readFileSync("./listado.json", "utf-8"))}

   consultarListadoAutos() {
    console.log(this.data())
  }

  darAlta(auto: Auto,) {
    
    let car = [...this.data(), auto];
    fs.writeFileSync("./listado.json", JSON.stringify(car, null, 2));  
    console.log(this.data());
      
  }

  darBaja(modelo: string) {
    let listado= this.data(); 
    let autoBaja = listado.findIndex((listado:{modelo:string}) => listado.modelo === modelo);      

   if (autoBaja >= 0) {
      listado.splice(autoBaja, 1);
      console.log("El vehiculo ", modelo, "se dio de baja");
      fs.writeFileSync("./listado.json", JSON.stringify(listado));
      console.log(this.data());    
    } else {
      console.log(
        "El vehiculo ",modelo ," no pudo darse de baja porque no se encontro"
      );
    }
  }

  consultarAuto(modelo: string) {
    let autoEncontrado = this.data().find((auto:{modelo:string}) => auto.modelo === modelo);
      if (autoEncontrado) {
      console.log(modelo, " Esta disponible ", autoEncontrado);
      return autoEncontrado;
    } else {
      console.log(modelo, " No esta disponible");
    }
  }
}




