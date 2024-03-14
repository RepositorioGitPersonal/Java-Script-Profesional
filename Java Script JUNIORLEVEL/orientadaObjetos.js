class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacionAnimal = `Hola soy un ${this.especie}, tengo ${this.edad}, años y soy de color ${this.color}`;
    }
    verInformacion(){
        document.write(this.informacionAnimal)
    }
    
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    ladrar(){
        alert("WAW!")
    }
    static volar(){
        alert("Puedo Volar")
    }

    set setRaza(newName){
        this.raza = newName;
    }

    get getVolar(){
        return  this.raza;
    }
}


const perro = new Perro("Gato", 3, "blanco con negro", "Pitbul" );
const pajaro = new Animal("Pajaro Carpintero", 5, "Cafe");


Perro.setRaza = "Doberman";
document.write(Perro.setRaza);


