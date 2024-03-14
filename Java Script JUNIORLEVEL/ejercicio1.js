/*Crea un programa que calcule el área de un triángulo. Pide al usuario que ingrese la base y la altura del triángulo, y luego muestra el resultado en la pantalla.*/

class areaDelTriangulo{
    constructor(base, altura){
        this.baseTriangulo = base;
        this.alturaTriangulo = altura;
        this.resultado = (this.baseTriangulo * this.alturaTriangulo) / 2;
    }
    resultadoEnPantalla(){
        document.write(this.resultado)
    }
}

let base = parseFloat(prompt("Ingrese la base: "));
let altura = parseFloat(prompt("Ingrese la altura: "))

const ResultadoFinal = new areaDelTriangulo(base, altura);
ResultadoFinal.resultadoEnPantalla();

