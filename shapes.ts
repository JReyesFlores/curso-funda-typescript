class PersonaX {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(_edad: number, _altura: number, _dni: string) {
        this.edad=_edad;
        this.altura=_altura;
        this.dni=_dni;
    }
}

class AlumnoX extends PersonaX {
    private matricula: string;

    constructor(_edad: number, _altura: number, _dni: string, _matricula: string) {
        super(_edad, _altura, _dni);
        this.matricula=_matricula;
    }
}

let personax: PersonaX=new PersonaX(28, 1.72, '47428053');
let alumnox: AlumnoX=new AlumnoX(29,1.82,'47425102','x15s2s2d');

personax = alumnox; // La clase padre puede adquirir la información de las clases hijas.
//alumnox = personax; // La clase hija no puede tomar la información de la clase padre.