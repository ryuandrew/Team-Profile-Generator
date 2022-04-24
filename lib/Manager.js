// officeNumber, getRole() - overridden to return 'Manager'
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

const Employee = require('./Employee')

// Manager class that extends the 'Employee' class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        // call employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    get officeNumber(){
        return this.officeNumber;
    }

    get Role(){
        return 'Manager'; //overwrite
    }
}

module.exports = Manager