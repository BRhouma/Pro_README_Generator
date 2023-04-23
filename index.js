// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your Project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select license for this project.',
        choices: ["MIT", "APACHE2.0", "Boost1.0", 'MPL2.0', "BSD2", "BSD3", "none"],
    },
    {
        type: 'input',
        name: 'require',
        message: 'List dependencies here.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'State the languages or technologies associated with this project.',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
        console.log("Welcome to my README!!");
        writeToFile('README.md', generateMarkdown({ ...inquirerResponse }));
    });
}

init();