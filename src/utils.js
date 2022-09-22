console.log(`utils.js is running`);

const square = (x) => x * x;

const add = (a, b) => a + b;

/* export const meow = () => { console.log('meow'); } */

export default (a, b) => a - b;

// NOT AN OBJECT DEFINITION!
// just naming references to objects that you want to export
export { square, add /*, subtract as default */ };