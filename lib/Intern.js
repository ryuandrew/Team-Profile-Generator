// school, getSchool(), getRole() - overridden to return 'Intern'
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// import parent class
const Employee = require('./Employee')

// Intern class that extends the 'Employee' class
class Intern extends Employee{
    constructor(name, id, email, school){
        // call employee constructor
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern'; //overwrite
    }
}

module.exports = Intern