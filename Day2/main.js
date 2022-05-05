class Person {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    introduce() {
        console.log(`Hi! I am ${this.name}, currently ${this.age} years old and my skin color is ${this.color}`);
    }
}


class Noble extends Person {
    constructor(name, age, color, nationality, isDead) {
        super(name, age, color);
        this.salary = 35;
        this.nationality = nationality;
        this.isDead = isDead;
    }

    boast() {
        if (this.isDead){
        console.log(`Haha! I am ${this.name}, currently ${this.age} years old, belong to the ${this.color} tribe and earn ${this.salary} per year and live in ${this.nationality} and ${this.isDead}!`);
        }
    }
}

const noble = new Noble('Sinh', 25, 'golden', 'Thailand', true);
noble.boast();


