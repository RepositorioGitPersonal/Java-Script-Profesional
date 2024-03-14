let materias = {
    fisica : [90, 6,4, "Fisica"],
    matematicas : [84, 9,1, "Matematicas"],
    logica : [92, 8,9, "Logica"],
    quimica : [78, 6,4, "Quimica"],
    calculo : [75, 6,3, "Calculo"],
    programacion : [100, 10,8, "Programacion"],
    biologia : [87, 8,2, "Biologia"],
    español : [69, 4,1, "Español"]
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencias >= 90){
            console.log("%c   Asistencias en orden", "color: green");
        }else{
            console.log("%c   Falta de Asistencias", "color: red");
        }

        if (promedio >= 7){
            console.log("%c   Promedio en orden", "color: green");
        }else{
            console.log("%c   Promedio Desaprobado", "color: red");
        }

        if (trabajos >= 3){
            console.log("%c   Trabajos Practicos en Orden", "color:green");
        }else{
            console.log("%c   Faltan Trabajos Practicos", "color: red")
        }
    }
}

aprobo();