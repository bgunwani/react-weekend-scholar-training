
// Vanilla JavaScript

// Creating a Class:
function Customer() {
    this.firstName = 'King';
    this.lastName = 'Kochhar';
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
var customer1 = new Customer();
customer1.getFullName();