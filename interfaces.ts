type mydni=number;

interface PersonaZ {
    altura?: number; //Permite asignar un atributo opcional
    edad: number;
    nombre: string;
    apellido: string;
    dni: mydni;
}

const personaZ: PersonaZ={
    nombre: 'Jhon Phileppe',
    apellido: 'Reyes Flores',
    edad: 28,
    //altura: 1.72,
    dni: 47428053
}