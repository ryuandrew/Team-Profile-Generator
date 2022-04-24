// github - username, getGithub(), getRole() - overridden to return 'Engineer'
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// import parent class
const Employee = require('./Employee')

// Engineer class that extends the 'Employee' class
class Engineer extends Employee{
    constructor(name, id, email, github){
        // call employee constructor
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'; //overwrite
    }
}

module.exports = Engineer