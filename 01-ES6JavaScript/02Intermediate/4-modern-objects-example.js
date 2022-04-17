
// Modern ES6 JavaScript

// Demonstration 1:

// class Customer {
//     constructor() {
//         this.firstName = 'King';
//         this.lastName = 'Kochhar';
//     }
//     getFullName = function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// var cust1 = new Customer();
// cust1.getFullName();

// -------------------------------------------------------- //

// Demonstration 2:

// class Customer {
//     // Default Parameters
//     constructor(fName = 'Unknowning') {
//         this.firstName = fName;
//         this.lastName = lName || 'Unknowing';
//     }
//     getFullName = function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// var cust1 = new Customer('Bhawna', 'Gunwani');
// cust1.getFullName();

// var cust2 = new Customer();
// cust2.getFullName();

// -------------------------------------------------------- //

// Demonstration 3:

class Person {
    constructor() {
        console.log('Person Constructor Called!!');
        this.name = 'Gautam';
        this.age = 23;
    }
    displayDetails1 = function () {
        console.log('Name : ' + this.name);
        console.log('Age : ' + this.age);
    }
}

class Customer extends Person {
    constructor() {
        super();
        console.log('Customer Constructor Called!!');
        this.article = 'article1';
        this.amount = 1000;
    }
    displayDetails2 = function () {
        //super.displayDetails();
        console.log('Article : ' + this.article);
        console.log('Amount : ' + this.amount);
    }
}

var objOne = new Customer();
objOne.displayDetails1();
objOne.displayDetails2();

// -------------------------------------------------------- //

// Demonstration 3:

// class Person {
//     constructor(name, age) {
//         console.log('Person Constructor Called!!');
//         this.name = name;
//         this.age = age;
//     }
//     displayDetails1 = function () {
//         console.log('Name : ' + this.name);
//         console.log('Age : ' + this.age);
//     }
// }

// class Customer extends Person {
//     constructor(name, age, article, amount) {
//         super(name, age);
//         console.log('Customer Constructor Called!!');
//         this.article = article;
//         this.amount = amount;
//     }
//     displayDetails2 = function () {
//         console.log('Article : ' + this.article);
//         console.log('Amount : ' + this.amount);
//     }
// }

// var objOne = new Customer('Kochhar', 34, 'Mouse', 1000);
// objOne.displayDetails1();
// objOne.displayDetails2();

