// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are your installation instructions?',
    name: 'installation',
  },
  {
  type: 'input',
    message: 'Explain the usage of your app:',
    name: 'usage',
  },
  {
  type: 'input',
    message: 'Please list any contributors:',
    name: 'contributors',
  },
  {
      type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
      type: 'input',
        message: 'What is your github username?',
        name: 'github',
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync (path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses)=>{
    writeToFile('readme.md', markdown({...responses}))
  })
}

// Function call to initialize app
init();
