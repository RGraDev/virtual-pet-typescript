const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const FITNESS_THRESHOLD = 5;
const HUNGER_THRESHOLD = 3;
const NOT_ALIVE_ERROR = "Your pet is no longer alive :(";

export class Pet {
    private _age: number;
    private _hunger: number
    private _fitness: number;
    private readonly _name: string;
    private _children: Pet[] = [];

    constructor(name: string) {
        this._name = name;
        this._age = 0;
        this._hunger = 0;
        this._fitness = 10;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get hunger(): number {
        return this._hunger;
    }

    set hunger(value: number) {
        this._hunger = value;
    }

    get fitness(): number {
        return this._fitness;
    }

    set fitness(value: number) {
        this._fitness = value;
    }

    get name(): string {
        return this._name;
    }

    get children(): Pet[] {
        return this._children;
    }

    get isAlive() {
        return this._age < 30 && this._hunger < 10 && this._fitness > 0;
    }

    growUp() {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_ERROR);
        }

        this._age++;
        this._hunger += 5;
        this._fitness -= 3;
    }

    walk() {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_ERROR);
        }

        if (this._fitness + 4 > MAX_FITNESS) {
            this._fitness = MAX_FITNESS;
        } else {
            this._fitness += 4;
        }
    }

    feed() {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_ERROR);
        }

        if (this._hunger - 3 < MIN_HUNGER) {
            this._hunger = MIN_HUNGER;
        } else {
            this._hunger -= 3;
        }
    }

    checkUp() {
        if (!this.isAlive) {
            return NOT_ALIVE_ERROR;
        }

        if (this._hunger >= HUNGER_THRESHOLD && this._fitness <= FITNESS_THRESHOLD) {
            return "I am hungry AND I need a walk";
        } else if (this._hunger >= HUNGER_THRESHOLD) {
            return "I am hungry";
        } else if (this._fitness <= FITNESS_THRESHOLD) {
            return "I need a walk";
        } else {
            return "I feel great!";
        }
    }

    adoptChild(child: Pet) {
        if (!this.isAlive) {
            throw new Error(NOT_ALIVE_ERROR);
        }

        this._children.push(child);
    }
}