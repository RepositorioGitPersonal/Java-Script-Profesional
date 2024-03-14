/*
Escribe una función que determine si un número es par o impar. Pide al usuario que ingrese un número, y muestra el resultado en la consola.
 */

const ParEImpar = ()=>{
    let numero = parseInt(prompt("Ingrese el número: "));
    if (numero % 2 == 0){
        document.write("El número " + numero + " es un par");
    }
    else if(numero != numero){
        confirm("Esto no es un número");
    }
    else{
        document.write("El número " + numero + " es un impar");
    }
}
ParEImpar();


