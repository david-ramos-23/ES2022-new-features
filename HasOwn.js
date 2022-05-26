const customer = {
	name: 'David',
};

console.log(Object.hasOwn(customer, 'name')); // true
console.log(Object.hasOwn(customer, 'surname')); // false

console.log(Object.hasOwn(customer, 'toString')); // false
// We can use toString() thanks to Prototypical Inheritance
customer.toString();
