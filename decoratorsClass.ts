function init(target) {
    return class extends target {
        nombre='Jhon Phileppe';
        apellido='Reyes Flores';

        sayMyName() {
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

@init
class P {
    constructor() { }

    sayMyName() { }
}

const p:P = new P();
console.log(p.sayMyName()); // Jhon Phileppe Reyes Flores