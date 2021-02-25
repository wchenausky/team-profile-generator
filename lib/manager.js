const Employee = require('./employee')

class Manager extends Emp {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.github = github;
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