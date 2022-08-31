// Regular ES5 function

function square(x) {
    return x * x;
};

console.log(square(3));

// Arrow function

/*

const squareArrow = (x) => {
    return x * x;
};

*/

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// Challenge solution

const getFirstNameVerbose = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameExpression = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameVerbose('Michael Jordan'));
console.log(getFirstNameExpression('Ivica Kostelić'));