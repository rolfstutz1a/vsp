export class Station {

    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public static createInitialStation() {
        return new Station('8502119', 'Lenzburg');
    }

    public toString = (): string => {
        return this.name + ' (' + this.id + ')';
    }
}
