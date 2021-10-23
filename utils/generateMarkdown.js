// TODO: Create a function that returns a license badge based on which license is passed in
// could use switch statement here
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if (license === 'APACHE 2.0') 
     return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  if (license === 'BSD 3') 
     return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   const badge = renderLicenseBadge(license)
  return `
# Project Title: ${data.title} 

  ${renderLicenseBadge(data.license)}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributing)
  - [License](#license)
  - [Questions](#questions)

# Description: 
  ${data.description}
## Installation:
  ${data.installation} 
## Usage:
  ${data.usage} 
## Contributing:
  ${data.contributors} 
# License:
 The repo is licensed by: ${data.license} 
# Questions:
Click here for my Github: https://github.com/${data.github}
# Email Me:
  Shoot me an email!: ${data.email} 
`;
}
module.exports = generateMarkdown;
