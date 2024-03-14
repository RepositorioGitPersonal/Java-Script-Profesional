/*

PROBLEMA 1

- Crear un sistema para mostrarle a el usuario las particularidades de tres celulares
- Cada Celular debe tener color, peso, resolucion de pantalla, resolución de camara y memoria ram
- Cada celular debe poder prender y apagar, reiniciar, tomar fotos y grabar

*/

class particularidadesCelulares{
    constructor(nombre, color, peso, resoPantalla, resoCamara, ram){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resoPantalla = resoPantalla;
        this.resoCamara = resoCamara;
        this.ram = ram;
        this.encendido = false;
        this.infoCelulares = `<b>${this.nombre}</b> <br><br>
            ${this.color} <br>
            ${this.peso} <br>
            ${this.resoPantalla} <br>
            ${this.resoCamara} <br>
            ${this.ram} <br>`;
        
    }

    tocarBotonEncendido(){
        if (this.encendido == false){
            alert("El celular esta encendiendo");
            this.encendido = true;
        }else{
            alert("El celular esta apagado");
            this.encendido = false;
        }
    }

    reiniciarCelular(){
        if (this.encendido == true){
            alert("El celular se esta reiniciando");
        }else{
            alert("El celular no hace falta reiniciarlo por que ya esta apagado")
        }
        
    }

    tomarFotos(){
        alert("El celular esta tomando una foto");
    }

    grabarVideo(){
        alert("El celular esta grabando un video" );
    }

    verInfoCelulares(){
        document.write(this.infoCelulares)
    }
    
}

const xiaomiRedmiNote12 = new particularidadesCelulares("Xiaomi Redmi Note 12", "Blanco", "170 gramos", "1820 x 1980 px", "50mpx x 48mpx", "12 GB de memoria ram" + "<br>");
const samsungA50 = new particularidadesCelulares("Samsung A50", "Azul Brillante", "156 gramos", "1570 x 1820 px", "25mpx x 48mpx", "8 GB de memoria Ram" + "<br>");
const huaweiP40Pro = new particularidadesCelulares("Huawei P40 Pro", "Azul Brillante", "156 gramos", "1570 x 1820 px", "25mpx x 48mpx", "8 GB de memoria Ram" + "<br>");

xiaomiRedmiNote12.tocarBotonEncendido();
xiaomiRedmiNote12.reiniciarCelular();
xiaomiRedmiNote12.tomarFotos();
xiaomiRedmiNote12.grabarVideo();
xiaomiRedmiNote12.verInfoCelulares();
samsungA50.verInfoCelulares();
huaweiP40Pro.verInfoCelulares();