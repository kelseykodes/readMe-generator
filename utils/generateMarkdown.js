// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Your ReadMe:
# Project Title: 
  ${data.title} 
# Description: 
  ${data.description}
# Installation:
  ${data.installation} 
# Usage:
  ${data.usage} 
# Contributing:
  ${data.contributors} 
# License:
  ${data.license} 
# Questions:
 <a href="https://github.com/${data.github}>SomeLink</a>
#Email me: 
${data.email}
`;
}

module.exports = generateMarkdown;


// Description, Installation, Usage, Contributing, and Tests