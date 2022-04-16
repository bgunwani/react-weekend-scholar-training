
// Vanilla JavaScript:

// -------------------------------- //

/* Simple Function */

// function sayHello() {
//     console.log('Hello World');
// }

// sayHello();

// -------------------------------- //

/* Parameterized Function */

// function getFullName(firstName, lastName) {
//     // console.log(firstName + ' ' + lastName);
//     // ES6 (Literal String)
//     console.log(`${firstName} ${lastName}!!`);
// }

// getFullName('King', 'Kochhar');             // King Kochhar!!
// getFullName('King', 'Kochhar', 'Smith');    // King Kochhar!!
// getFullName(100, 200)                       // 100 200!!
// getFullName('King');                        // King undefined!!
// getFullName();                              // undefined undefined!!


// -------------------------------- //

/* Function with Return Statement */

// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}!!`;
// }

// console.log(getFullName('King', 'Kochhar'));             // King Kochhar!!

// ------------------------------------------------------------------------ //
// ES6 Modern JavaScript
// ------------------------------------------------------------------------ //

/* Function Expression */

// var printName = function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}!!`;
// }

// // Error: getFullName is not defined
// // console.log(getFullName('Bhawna', 'Gunwani'));

// console.log(printName('Bhawna', 'Gunwani'));

// ------------------------------------------------------------------------ //

/* Annonymous Function (Unnamed Function) */

// var printName = function (firstName, lastName) {
//     return `${firstName} ${lastName}!!`;
// }

// // Error: getFullName is not defined
// // console.log(getFullName('Bhawna', 'Gunwani'));

// console.log(printName('Sarah', 'Bowling'));

// ------------------------------------------------------------------------ //

/* Arrow Function */

var result = () => {
    console.log('Hello World');
    console.log('Hey, Modern JavaScript!!');
}

result();

// ------------------------------------------------------------------------ //

/* Arrow Function */

var result = () => console.log('Hello World');

result();

// ------------------------------------------------------------------------ //

/* Arrow Function */

var printName1 = (firstName, lastName) => console.log(`${firstName} ${lastName}!!`);
var printName2 = (firstName, lastName) => `${firstName} ${lastName}!!`;

printName1('Gautam', 'Bhalla');
console.log(printName2('Shreya', 'Ghoshal'));