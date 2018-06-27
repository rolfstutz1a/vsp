export class Station {

    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public static createNone() {
        return new Station('0', '');
    }

    public toString = (): string => {
        return this.name + ' (' + this.id + ')';
    }
}
