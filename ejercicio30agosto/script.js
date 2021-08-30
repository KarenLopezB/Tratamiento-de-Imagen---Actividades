//Diferencia entre var y let - const

var a = 7;
var b = 12;

if(a === 7){
    let a = 4; //El alcance es dentro del bloque if
    var b = 1; //El alcance es dentro de la función

    console.log("Dentro del if:"+a+ "-" +b);
}

console.log("Fuera del if:"+a+ "-" +b);

function varTest(){
    var x = 31;
    if (true) {
        var x = 71; //misma variable
        console.log(x); // 71
    }
    console.log(x); // 71
}

function letTest() {
    let x = 31;
    if (true) {
        let x = 71; //asigna nuevo valor
        console.log(x); // 71
    }
    console.log(x); // 31
}

varTest();
letTest();

//Objeto
const persona = {
    Nombre:"Karen",
    Apellido:"López",
    Edad: 21,
    Carrera: "IPM"
};

const autos = {
    Marca: "NISSAN",
    Modelo: "Sentra",
    Año: "2017",
    Serie: 057,
    Color: "Gris"
};


document.getElementById('persona').innerHTML = persona.Nombre + " tiene la edad de " + persona.Edad + ". Estudió " + persona.Carrera;

document.getElementById('autos').innerHTML = autos["Marca"] + " Modelo: " + autos["Modelo"] + ". Año: " + autos["Año"];


const carros = ["BMW", "VOLVO", "Sabaru", "FORD", "Renault"];

let text ="";
for (let i = 0; i < carros.length; i++ ) {
    text += carros[i] + "<br>";
}

document.getElementById('carros').innerHTML = text;


let numero = "";
let i = 0;

while (i < 10) {
    numero += "<br>El número es " + i;
    i++;
}

document.getElementById('conteo').innerHTML = numero;

//------------------------------------------------

let dia;
switch (new Date().getDay()) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
}

document.getElementById('fecha').innerHTML = "El día de hoy es: " + dia;