// Starter examples (function output expectations are provided in README)

// Start coding here...
const makeMultiplier = factor => num => num * factor;

const double = makeMultiplier(2);
console.log(double(5)); // 10

const makeGreeter = greeting => name => `${greeting}, ${name}!`;

const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia")); // "Hi, Mia!"
