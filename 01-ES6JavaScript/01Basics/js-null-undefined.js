
// An undefined means lack of value. (Not assigned anything.)
// A null value means absense. (You don't the value as of now.)
// A null or undefined value evaluates to false in conditional expression always.

var myValue1;
console.log(myValue1);

// ---------------------------------------- //

var myValue2 = null;
console.log(myValue2);

// ---------------------------------------- //

if (myValue1) {
    console.log('I am good.')
} else {
    console.log('I am bad.');
}

// ---------------------------------------- //

if (myValue2) {
    console.log('I am professional.')
} else {
    console.log('I am beginner.');
}

// ---------------------------------------- //