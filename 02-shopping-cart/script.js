// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

const totals = cart.map(item => item.price * item.quantity);
console.log("Total price per item:", totals);

const descriptions = cart.map(item => `${item.name} - ₱${item.price}`);
console.log("Item descriptions:", descriptions);

const totalCartValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(`Total cart value: ₱${totalCartValue}`);