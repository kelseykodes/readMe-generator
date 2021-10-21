const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your porject?',
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
        type: 'input',
          message: 'Select a license:',
          name: 'license',
    },
    {
        type: 'input',
          message: 'What is your github username?',
          name: 'github',
    },
  ])
//   .then((answers => {
  const generateHTML = ({title, description, installation, usage, contributors, license, github}) => (
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your ReadME</title>
      </head>
      <body>
          <header>ReadME</header>
          <h1>${title}</h1>
          <h3>${description}<h3>
          <h3>${installation}</h3>
          <h2>${usage}</h2>
          <h2>${contributors}</h2>
          <h2${license}</h2>
          <h3><a href="https://github.com/${github}"></a></h3>
      
      </body>
      </html>`
  );