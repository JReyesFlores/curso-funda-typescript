interface Interfaz1X {
    prop1?: number;
}

interface Interfaz2X {
    prop2?: number;
    prop3: number;
}

type interfaceMix=Interfaz1X&Interfaz2X; //Se requiere la información de ambas interfaces

const interfaceMx: interfaceMix={
    prop3: 3
}
