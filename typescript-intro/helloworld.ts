class Greater {
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return "Hello, " + this.greeting
    }
}

let greeter = new Greater("Mariah")