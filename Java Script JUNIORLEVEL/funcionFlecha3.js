const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}


alert("¿Que operación deseas realizar?")
let operacion = prompt("suma: 1, resta: 2, división: 3, multiplicacion: 4");


if (operacion == 1){
    let numero1 = prompt("Ingresa el primer número");
    let numero2 = prompt("Ingresa el segundo número");
    resultado = sumar(numero1, numero2)
    alert(resultado);
}
else if(operacion == 2){
    let numero1 = prompt("Ingresa el primer número");
    let numero2 = prompt("Ingresa el segundo número");
    resultado = restar(numero1, numero2)
    alert(resultado);
}
else if(operacion == 3){
    let numero1 = prompt("Ingresa el primer número");
    let numero2 = prompt("Ingresa el segundo número");
    resultado = dividir(numero1, numero2)
    alert(resultado);
}
else if(operacion == 4){
    let numero1 = prompt("Ingresa el primer número");
    let numero2 = prompt("Ingresa el segundo número");
    resultado = multiplicar(numero1, numero2)
    alert(resultado);
}
else{
    alert("Número de seleccion no válido")
}

