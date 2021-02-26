const Employee = require('./employee')

let Manager = class extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.office = office;
    }
    printInfo() {
        console.log(`Name: ${this,name} :: ID: ${this.id} :: Email: ${this.email} :: Office: ${this.office}`)
    }
    get Name() {
        return this.name;
    }
    get Id() {
        return this.name;
    }
    get Email() {
        return this.email;
    }
    get GitHub() {
        return this.office;
    }
}

module.exports = Manager;