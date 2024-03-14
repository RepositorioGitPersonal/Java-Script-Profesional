const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    if (confirm("¿Quieres Continuar?")){
        class Calculadora{
            constructor(){
            }
            funcionSuma(num1, num2){
                return parseInt(num1) + parseInt(num2);
            }
            funcionResta(num1, num2){
                return parseInt(num1) - parseInt(num2);
            }
            funcionMultiplicacion(num1, num2){
                return parseInt(num1) * parseInt(num2);
            }
            funcionDivision(num1, num2){
                return parseInt(num1) / parseInt(num2);
            }
        }
        
        const resultadoFinal = new Calculadora();
        alert("Esto es una calculadora");
        let opcion = parseInt(prompt("Opcion 1: Sumar, Opcion 2: Restar, Opción 3: Multiplicar, Opción 4: Dividir"));

        if (opcion == 1){
            let numero1 = parseInt(prompt("Ingrese el primer numero: "));
            let numero2 = parseInt(prompt("Ingrese el segundo número: "));
            resultado = resultadoFinal.funcionSuma(numero1, numero2);
            alert("El resultado de la suma es: " + resultado);
        }else if(opcion == 2){
            let numero1 = parseInt(prompt("Ingrese el primer numero: "));
            let numero2 = parseInt(prompt("Ingrese el segundo número: "));
            resultado = resultadoFinal.funcionResta(numero1, numero2);
            alert("El resultado de la resta es: " + resultado);
        }
        else if(opcion == 3){
            let numero1 = parseInt(prompt("Ingrese el primer numero: "));
            let numero2 = parseInt(prompt("Ingrese el segundo número: "));
            resultado = resultadoFinal.funcionMultiplicacion(numero1, numero2);
            alert("El resultado de la multiplicacion es: " + resultado);
        }
        else if(opcion == 4){
            let numero1 = parseInt(prompt("Ingrese el primer numero: "));
            let numero2 = parseInt(prompt("Ingrese el segundo número: "));
            resultado = resultadoFinal.funcionDivision(numero1, numero2);
            alert("El resultado de la division es: " + resultado);
        }else{
            alert("Opcion no valida");
        }

    }else{
        alert("Bueno dale muchas gracias capo")
    }
});



