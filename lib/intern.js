const Employee = require('./employee')

class Intern extends Emp {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.github = github;
    }
    printInfo() {
        console.log(`Name: ${this,name} :: ID: ${this.id} :: Email: ${this.email} :: School: ${this.school}`)
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
        return this.school;
    }
}

module.exports = Intern;
