
// ES6 (var keyword): Global Scope
// ES6 (let keyword): Local Scope (Block Scope)

// Demonstration 1:

// let iAMGlobal = 'someValue';
// if (true) {
//     let iAmLocal = 'someMoreValue';
//     iAMGlobal = 'SomeNewValue';
//     console.log(iAMGlobal);
//     console.log(iAmLocal);
// }
// // console.log(iAmLocal);
// console.log(iAMGlobal);

// ------------------------------------------------------ //

// Demonstration 2:

let iAMGlobal = 'someValue';
if (true) {
    var iAmLocal = 'someMoreValue';
    const iAmLocalConst = 'someConstantValue';
    iAMGlobal = 'SomeNewValue';
    console.log(iAMGlobal);
    console.log('Inside : ' + iAmLocal);
    console.log('Constant Inside : ' + iAmLocalConst);
}
console.log('Outside : ' + iAmLocal);
console.log(iAMGlobal);
// console.log('Constant Inside : ' + iAmLocalConst);