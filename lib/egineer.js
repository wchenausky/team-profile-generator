const Employee = require('../lib/employee');

let Engineer = class extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    printInfo() {
        console.log(`Name: ${this,name} :: ID: ${this.id} :: Email: ${this.email} :: GitHub: ${this.github}`)
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
        return this.github;
    }
}

module.exports = Engineer;
