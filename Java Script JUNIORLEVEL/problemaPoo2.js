/*

PROBLEMA 2

-Implementar lo mismo de el anterior ejercicio pero con mejores cualidades a celulares de alta gama

camara super lenta
Reconocimiento Facial
Una camara extra

*/


class Celulares{
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

class celularesGamaAlta extends Celulares{
    constructor(nombre, color, peso, resoPantalla, resoCamara, ram, camaraExtra){
        super(nombre, color, peso, resoPantalla, resoCamara, ram);
        this.camaraExtra = camaraExtra;
        this.infoGamaAlta = `<b>${this.nombre}</b> <br><br>
        Color : ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolucion de Pantalla: ${this.resoPantalla} <br>
        Resolucion de Camara: ${this.resoCamara} <br>
        Memoria Ram: ${this.ram} <br>
        Camara Extra: ${this.camaraExtra} <br>
        `;
    }

    gravarVideoLento(){
        alert("Esta grabando un video en resolucion lentisima men");
    }

    reconocimientoFacial(){
        alert("Esta reconociendo tu rostro para poder acceder al mobile");
    }

    mostrarInfo(){
        document.write(this.infoGamaAlta);
    }
    
}

const iPhone14ProMax = new celularesGamaAlta("iPhone 14 Pro Max", "Blanco Esmeralda", "220 gramos", "2800 x 3500 px", "100mpx x 120mpx", "16 GB de memoria ram", "Full HD" + "<br>");
const samsungS24Ultra = new celularesGamaAlta("Samsung S24 Ultra", "Negro Profundo", "198 gramos", "2750 x 3200 px", "80mpx x 100mpx", "12 GB de memoria ram", "Full HD 4k" + "<br>");


iPhone14ProMax.gravarVideoLento();
samsungS24Ultra.reconocimientoFacial();
iPhone14ProMax.mostrarInfo();
samsungS24Ultra.mostrarInfo();
/*
const xiaomiRedmiNote12 = new Celulares("Xiaomi Redmi Note 12", "Blanco", "170 gramos", "1820 x 1980 px", "50mpx x 48mpx", "12 GB de memoria ram" + "<br>");
const samsungA50 = new Celulares("Samsung A50", "Azul Brillante", "156 gramos", "1570 x 1820 px", "25mpx x 48mpx", "8 GB de memoria Ram" + "<br>");
const huaweiP40Pro = new Celulares("Huawei P40 Pro", "Azul Brillante", "156 gramos", "1570 x 1820 px", "25mpx x 48mpx", "8 GB de memoria Ram" + "<br>");

xiaomiRedmiNote12.tocarBotonEncendido();
xiaomiRedmiNote12.reiniciarCelular();
xiaomiRedmiNote12.tomarFotos();
xiaomiRedmiNote12.grabarVideo();
xiaomiRedmiNote12.verInfoCelulares();
samsungA50.verInfoCelulares();
huaweiP40Pro.verInfoCelulares();*/