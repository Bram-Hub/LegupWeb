

export abstract class Rule {
    // maybe ID
    name: string;
    description: string;
    image: string;

    constructor(name: string, description: string, image: string) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}


export abstract class BasicRule extends Rule {

}

export abstract class CaseRule extends Rule {

}

export abstract class ContradictionRule extends Rule {

}
