// Tipos de datos:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Solo se podrá asignar del tipo indicado
let a: string='hola';
a='Holas...!!!';

let b: number=10;
b=200;
b+=50;

const num1=10;
b+=num1;

//funciones
function suma(num1: number, num2: number) {
    return num1+num2;
}

// Admite diferentes tipos de variables
let anyValue: any=10;
anyValue='hola';

function sumaJavascriptVanilla(num1, num2) {
    return num1+num2;
}

// Type:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// define un tipo de dato en base a uno generico.
type dni = string;

let dninumber: dni='1221';