// arguments object is no longer bound with arrow functions

// ES5
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

// ES6
const addArrow = (a, b) => {
    // console.log(arguments); --> doesn't work
    return a + b;
};

console.log(add(13, 15, 41));

// this keyword is also no longer bound

const user = {
    name: 'Dario',
    cities: ['Slavonski Brod', 'Zagreb', 'Osijek'],
    printPlacesLived() /* == printPlacesLived: function() */ {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // ES5 Doesn't work because it REBINDS THIS
        /*
        this.cities.forEach(function () {
            console.log(this.name + ' has lived in ' + city);
        });
        */

        // ES6 arrow function works because it doesn't rebind 
        // this
        /*
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        */
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 7],
    multiplyBy: 4,
    multiply() {    
        return this.numbers.map((number) => number * this.multiplyBy);;
    }
};

console.log(multiplier.multiply());