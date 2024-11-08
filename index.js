//classes start with capital later

function Animal(name) {
    this.name = name;

}


function Dog(name, age) {
    Animal.call(this, name)
    this.age = age;

    console.log(`My name is ${this.name} and its age is ${this.age}`)
}

//The parent of a class dog is instance of a class animal!
// The animal class is a parent of a dog class! 
Dog.prototype = Object.create(Animal.prototype)

// in js object has key valu pair, 'this' key run has a function as a value 
Dog.prototype.run = function(){
    console.log(`${this.name} is running` );
}

//class instance which is my objects
function main() {
    let dog = new Dog('Blue', 4)
    let dog2 = new Dog("Carrot", 6)
    
    dog.run();
    dog2.run();
}

main()