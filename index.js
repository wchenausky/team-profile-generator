const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const welome = "Welcome to my team building website. Here you're able to enter all of your employees information into a document. Ready when you are!"

