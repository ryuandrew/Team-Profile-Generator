# Team-Profile-Generator

## Description

The Team-Profile-Generator app will take in information about employees and generate an HTML webpage that displays summaries for each person. The application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

The application will be invoked by using the following command:

```bash
node index.js
```


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```


## Installation
```
User must install Node.js. To run node, Visual Studio Code with Gitbash/Command line interface is required. Then, run the following commands to include 'package.json':
* npm init -y
* npm i inquirer
* npm i jest
```


## Usage

```
To use the Team Profile generator, run the command 'node.js' in terminal and answer all the questions. After answering the prompts and selecting quit, a new HTML file will be generated under the output folder.
```


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
✅  THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
✅  THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
✅  THEN that GitHub profile opens in a new tab

WHEN I start the application
✅  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
✅  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
✅  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
✅  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
✅  THEN I exit the application, and the HTML is generated
```


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/badge/License-MIT-yellow.svg)


---
## Demo

The video demo of the app can be found here:


---
## Screenshot
![]()


---
### Github: https://github.com/ryuandrew/Team-Profile-Generator