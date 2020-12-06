//Decorators implementados a métodos
function log(target, key) {
    console.log(`${key} se ha llamado`);
}

class Persona {
    private name: string;

    constructor(_name: string) {
        this.name=_name;
    }

    @log
    sayMyName() {
        console.log(`${this.name}`);
    }
}

const persona: Persona=new Persona('Jhon Phileppe Reyes Flores');
persona.sayMyName();