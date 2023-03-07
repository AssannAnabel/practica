/*Ejercicio 2
• Implementar la clase Matriz. En vez de consultar 
los valores con los corchetes, se debe hacer 
(desde afuera) a través de un método → get(x, y)*/
export class Matrix{
    mtx:number [][];
    
    constructor(){
        this.mtx=[
            [1,2,3,4,5,6],
            [2,4,6,8,9,7],
        ]

    }

    getposicion(posX:number,posY:number){
        return `el valor de la posicion ${posX} Y la posicion ${posY} es: ${this.mtx[posX][posY]}`
    }
    
}