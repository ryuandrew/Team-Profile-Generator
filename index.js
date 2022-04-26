// start the app
// create a team
    // enter manager's name, id, email, officeNumber
    // add ee
        // option: engineer
            // enter name, id, email, github username
        // option: intern
            // enter name, id, email, school
// HTML file is generated
    // click email address <a href>
    // click github username <a href>

const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')  //enable interaction with the file system
const generateHtml = require('./src/generateHtml')  //link to create page
const { default: generate } = require('@babel/generator')

const team = []


const managerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: 'input',
            message: "What is the manager's id?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ]).then(({name, id, email, officeNumber}) => {
        const newManager = new Manager (name, id, email, officeNumber) //create a new constructor with new values. 
        team.push(newManager)
        createTeam()
    })
}
 

const createTeam = ()=>{
    inquirer.prompt([
        {
            type:'list',
            message: "Select a team member",
            name: 'selectEmployee',
            choices: ['engineer', 'intern', 'quit']
        },
    ]).then((ans) => {
        switch(ans.selectEmployee) {
            case 'engineer':
                engineerInfo()
                break;
            case 'intern':
                internInfo()
                break;
            default:
                fs.writeFileSync('output/index.html', generateHtml(team)) //generateHtml will return a string/data of the html
        }
    })
}


const engineerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: 'input',
            message: "What is the engineer's id?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: "github"
        },
    ]).then(({name, id, email, github}) => {
        const newEngineer = new Engineer (name, id, email, github) //create a new constructor with new values. 
        team.push(newEngineer)
        createTeam()
    })
}


const internInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: 'input',
            message: "What is the intern's id?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: 'input',
            message: "Which school is the intern attening or graduate from?",
            name: "school"
        },
    ]).then(({name, id, email, school}) => {
        const newIntern = new Intern (name, id, email, school) //create a new constructor with new values. 
        team.push(newIntern)
        createTeam()
    })
}

managerInfo();
