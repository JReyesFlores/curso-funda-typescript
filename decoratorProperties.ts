function logProperty(target, key) {
    let _val=this[key];
    const getter=() => {
        console.log(`Get: ${key} => ${_val}`)
        return _val;
    }

    const setter=(newValue) => {
        console.log(`Set: ${key} => ${newValue}`);
        _val=newValue;
    }
    const objtectProperty={
        get: getter,
        set: setter
    };

    Object.defineProperty(target, key, objtectProperty);
}

class Viaje {
    @logProperty
    private name: string;

    constructor(_name: string) {
        this.name=_name;
    }
}

const v=new Viaje('viaje #1');
