class Transporte {
    private velocidad: number;
    private formaMovilidad: string;

    constructor(_velocidad: number, _formaMovilidad: string) {
        this.velocidad=_velocidad;
        this.formaMovilidad=_formaMovilidad;
    }

    getVelocidad() {
        return this.velocidad;
    }

    setVelocidad(_velocidad: number) {
        this.velocidad=_velocidad;
    }

    getFormaMovilidad() {
        return this.formaMovilidad;
    }

    setFormaMovilidad(_formaMovilidad: string) {
        this.formaMovilidad=_formaMovilidad;
    }
}

class Auto extends Transporte {
    private cantidadPuertas: number;

    constructor(_cantidadPuertas: number, _velocidad: number, _formaMovilidad: string) {
        super(_cantidadPuertas, _formaMovilidad);// Utiliza el constructor de la clase padre
        this.cantidadPuertas=_cantidadPuertas;
    }

    getVelocidad() {
        return super.getVelocidad()+10;
    }

    getCantidadPuertas() {
        return this.cantidadPuertas;
    }

    setCantidadPuertas(_cantidadPuertas: number) {
        this.cantidadPuertas=_cantidadPuertas;
    }
}

const transp: Transporte=new Transporte(20, 'Suelo');
const auto: Auto=new Auto(4, 20, 'suelo');