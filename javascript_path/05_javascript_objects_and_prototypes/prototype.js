"use strict";

// Have an object for all animals to inherit from
function Animal(voice) {
    this.voice = voice || "grunt";
}

// All animals should be able to speak
Animal.prototype.speak = function () {
    return this.voice;
}



// Create cats with a custom name and color.
function Cat(name, color) {
    // Make sure to call the Animal constructor here
    Animal.call(this, 'meow');
    this.name = name;
    this.color = color;
}

// Cat is an Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;



var basil = new Cat("Basil", "orange");

console.log(basil.speak());