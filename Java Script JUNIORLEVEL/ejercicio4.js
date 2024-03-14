/*
Crea un programa que encuentre el número mayor en un arreglo de números. Pide al usuario que ingrese una serie de números separados por comas, y luego determina y muestra el número mayor en la consola.*/

const numeroMayorDeLaLista = ()=>{
    let cantidadDeNumeros = parseInt(prompt("Ingrese la cantidad de números a ingresar: "));
    let numeroMayor = 0;
    let lista = [];
    for (let i = 1; i <= cantidadDeNumeros; i++){
        let numerosAIngresar = parseInt(prompt("Ingrese el número " + i + " :"));
        lista.push(numerosAIngresar)

        if (numerosAIngresar > numeroMayor){
            numeroMayor = numerosAIngresar;
        }
    }
    document.write("Esta es la lista de números que ingresate:  " + "<br>" + "[" + lista +"]"+ "<br>");

    document.write("El número mayor de la lista es: "+numeroMayor)
}

numeroMayorDeLaLista()

