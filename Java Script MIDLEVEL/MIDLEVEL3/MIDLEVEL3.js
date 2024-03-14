alumnos = [{
    nombre: "Jair Estiven",
    email: "estiven@gmail.com",
    materia: "Educación Física"
},{
    nombre: "Paola Hernandez",
    email: "paola@gmail.com",
    materia: "psicologia"
},{
    nombre: "Luisa Hernandez",
    email: "luisah@gmail.com",
    materia: "enfermeria"
},{
    nombre: "Magaly Ortiz",
    email: "magaly@gmail.com",
    materia: "mercadeo"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode +=  `
            <div class="grid-item nombre">${nombre}</div>
            <div class="grid-item email">${email}</div>
            <div  class="grid-item materia">${materia}</div>
            <div class="grid-item semana">
                <select class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>`;
    
}
    contenedor.innerHTML = htmlCode;


boton.addEventListener("click", ()=>{
    if(confirm("¿Estas seguro de que quieres confirmar las semanas de esa forma?")){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    
    }else{

    }
})
