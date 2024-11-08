//main cookie cutter
class Animal {
    constructor(name){
        this.name = name;
    }

    run(){
        console.log(`${this.name} is running` ); 
    }
}

//different shapes cookie cutters
class Dog extends Animal{
    constructor(name) {
        super(name)
        console.log(`My name is ${this.name} and I'm a dog`)
    }
    bark(){
        console.log(`${this.name}: woof woof`);
    }
}

//different shapes cookie cutters
class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(`My name is ${this.name} and I'm a cat`)
    }
    miyaw(){
        console.log(`${this.name}: miyaw miyaw`);
    }

}

// These are the cookies 
function main() {
    let dog = new Dog('Blue');
    let dog2 = new Dog('Carrot');
    let cat = new Cat ('Miyav');
    
    dog.run();
    dog2.run();
    cat.run();
    dog.bark();
    cat.miyaw();
}

main()