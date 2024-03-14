/*
Desarrolla un programa que genere una lista de números primos. Pide al usuario que ingrese un número máximo, y luego muestra todos los números primos hasta ese número */


const numeroMaximo = parseInt(prompt("Ingrese el número maximo"));

const esPrimo = (numero)=>{
    if (numero <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return false;
        }
        
    }
    return true;
}

const numerosPrimos = [];

for (let i = 2; i <= numeroMaximo; i++){
    if (esPrimo(i)){
        numerosPrimos.push(i);
        
    }
}

document.write("Numeros primos hasta el " + numeroMaximo + " son: " + "<br>");

document.write(numerosPrimos);
