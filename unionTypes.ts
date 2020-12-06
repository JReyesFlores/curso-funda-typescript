// Unifica más de un tipo de dato en un solo tipo
type sumaParameter=string|number;
type sumaReturn=number;

function Suma(num1: sumaParameter, num2: sumaParameter): sumaReturn {
    return Number(num1)+Number(num2);
}

interface Interface1 {
    prop1?: number;
}

interface Interface2 {
    prop2?: number;
}

type InterfaceMix=Interface1|Interface2;

const intfcMix: InterfaceMix={
    prop1: 1,
    prop2: 2
}