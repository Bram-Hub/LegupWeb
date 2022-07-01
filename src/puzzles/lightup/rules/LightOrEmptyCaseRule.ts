import { CaseRule } from "@/models/rules";

export class LightOrEmptyCaseRule extends CaseRule {
    constructor() {
        super(
            "Light Or Empty",
            "description",
            "img"
        );
    }
}
