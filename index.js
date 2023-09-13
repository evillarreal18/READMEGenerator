//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// Creating an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Please enter the name of your Project",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please add a description of the purpose and functionality for this project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please list and describe the steps to install project",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide a description on how to use your project",
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: "Provide guidelines for other developers to be able to contribute to this project",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please list the tests you've created and provide a brief description on how to run them",
    },
   
    {
        type: 'checkbox',
        name: 'license',
        message: "Please select a license",
        choices: ["MIT", "APACHE 2.0", "CREATIVE COMMONS ATTRIBUTION 4.0 INTERNATIONAL", "MOZILLA PUBLIC LICENSE"],
    },
    {
        type: 'input',
        name: 'badges',
        message: "Select the badges you would like to use from the following list",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Markdown"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
