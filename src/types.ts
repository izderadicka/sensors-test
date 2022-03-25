export class Orientation {
    constructor(public alpha:number, public beta: number, public gamma:number) {}

    toString() {
        return `a: ${this.alpha.toFixed(2)}; b:${this.beta.toFixed(2)}; g: ${this.gamma.toFixed(2)}`
    }
}
