class calculadora{
    constructor(){

    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    exponenciacion(num, expo){
        return parseInt(num) ** parseInt(expo);
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const Calculadora = new calculadora();

alert("Calculadora");
let opcion = prompt("Opcion 1: sumar, Opcion 2: restar, Opcion 3: multiplicar, Opcion 4: dividir, Opcion 5: Exponenciar, Opcion 6: Raiz Cuadrada, Opcion 7: Raiz Cubica");

if (opcion == 1){
    let numero1 = prompt("Ingrese el primer número: ");
    let numero2 = prompt("Ingrese el segundo número: ");
    resultado = Calculadora.sumar(numero1, numero2);
    alert("El resultado de la suma es " + resultado);
}
else if(opcion == 2){
    let numero1 = prompt("Ingrese el primer número: ");
    let numero2 = prompt("Ingrese el segundo número: ");
    resultado = Calculadora.restar(numero1, numero2);
    alert("El resultado de la resta es " + resultado);
}
else if(opcion == 3){
    let numero1 = prompt("Ingrese el primer número: ");
    let numero2 = prompt("Ingrese el segundo número: ");
    resultado = Calculadora.multiplicar(numero1, numero2);
    alert("El resultado de la multiplicacion es " + resultado);
}
else if(opcion == 4){
    let numero1 = prompt("Ingrese el primer número: ");
    let numero2 = prompt("Ingrese el segundo número: ");
    resultado = Calculadora.dividir(numero1, numero2);
    alert("El resultado de la division es " + resultado);
}
else if(opcion == 5){
    let numero = prompt("Ingrese el número a exponenciar: ");
    let exponente = prompt("Ingrese el exponente: ");
    resultado = Calculadora.exponenciacion(numero, exponente);
    alert("El resultado de la potencia es " + resultado);
}
else if(opcion == 6){
    let numero = prompt("Ingrese el número: ");
    resultado= Calculadora.raizCuadrada(numero);
    alert("El resultado de la raiz cuadrada del número es " + resultado);
}
else if(opcion == 7){
    let numero = prompt("Ingrese el número: ");
    resultado = Calculadora.raizCubica(numero);
    alert("El resultado de la raiz cúbica del número es " + resultado);
}
else{
    alert("Opcion no valida");

}