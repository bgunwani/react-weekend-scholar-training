
// Demonstation 1:

// const superHeroes = ['Iron Man', 'Spider Man', 100, false];

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[4]);
// console.log(superHeroes.length);
// console.log(superHeroes.length - 1);

// ---------------------------------------------------------- //

// Demonstation 2:

const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

// console.log(numbers);
// console.log(numbers[2]);
// numbers[2] = "NewThree";
// console.log(numbers[2]);

// ---------------------------------------------------------- //

// Start of the Array: Shift() and unshift()

// numbers.shift()
// console.log(numbers);

// console.log(numbers.shift());
// console.log(numbers);

// console.log(numbers.unshift("Something"));
// console.log(numbers);

// ---------------------------------------------------------- //

// End: pop() and push()

// numbers.pop();
// console.log(numbers);

// numbers.push("Something");
// console.log(numbers);

// ---------------------------------------------------------- //

// Middle: Splice()

// numbers.splice(2, 1, "Something");
// console.log(numbers);

// numbers.splice(2, 2, "Something");
// console.log(numbers);

numbers.splice(2, 2, ["12", "23"]);
console.log(numbers);

// ---------------------------------------------------------- //