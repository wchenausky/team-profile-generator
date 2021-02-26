const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Choice = require('inquirer/lib/objects/choice')

const team = [];

const welome = "Welcome to my team building website. Here you're able to enter all of your employees information into a document. Ready when you are!"

function promptMan() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',

        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next',
            choices: [ 'Manger', 'Engineer', 'Intern', 'Exit']
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers suite number?',
        },
    ])
}

function promptEngin() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',

        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next',
            choices: [ 'Manger', 'Engineer', 'Intern', 'Exit']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?',
        },
        
    ])
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',

        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next',
            choices: [ 'Manger', 'Engineer', 'Intern', 'Exit']
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school and/or university?',
        }
   
    ]).then((response) => {
        const Intern = new Intern(response.name, reponse.id, response.email, response.school);
        team.push(intern);
        newTeamMember();
    })
};

function newTeamMember () {
    inquirer.prompt ([
        {
            type: 'list',
            name: "Which is the next Employee?",
            choices: ['Engineer', 'Intern', 'Done']
        },
    ]).then((response) => {
        if (response.nextEmployee === "Engineer") {
            promptEngin()
        }
        else if (response.nextEmployee === "Intern") {
            promptIntern()
        }
        else {
            makeTeam()
        }
    })
}

