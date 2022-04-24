// takes in info about employees on a SW engineering team, then generates an HTML webpage that displays summaries for each person. 
// write a unit test for every part of the code and ensure it passes
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  
// {
//   "dependencies": {
//     "inquirer": "^8.2.2",
//     "jest": "^27.5.1"
//   }
// }

const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')  //enable interaction with the file system
const path = require('./src/generateHtml')  //link to create page
// const path = require('path')

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

const managerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: 'input',
            message: "What is the manager's id?",
            name: "managerId"
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: "managerEmail"
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: "managerOfficeNumber"
        },
    ]).then(ans => {
        console.log(ans)

    })
}
 

const engineerInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: "engineerName"
        },
        {
            type: 'input',
            message: "What is the engineer's id?",
            name: "engineerName"
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: "engineerEmail"
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: "engineerGithub"
        },
    ]).then(ans => {
        console.log(ans)
    })
}


const internInfo = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "internName"
        },
        {
            type: 'input',
            message: "What is the intern's id?",
            name: "internName"
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: "internEmail"
        },
        {
            type: 'input',
            message: "Which school is the intern attening or graduate from?",
            name: "internSchool"
        },
    ]).then(ans => {
        console.log(ans)
    })
}

