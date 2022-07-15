

export abstract class Rule {
    // maybe ID
    protected name: string;
    protected description: string;
    protected image: string;

    constructor(name: string, description: string, image: string) {
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public getName() {
        return this.name;
    }
}


export abstract class BasicRule extends Rule {

}

export abstract class CaseRule extends Rule {

}

export abstract class ContradictionRule extends Rule {

}
