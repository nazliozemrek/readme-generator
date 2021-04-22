// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
# Title
  ${data.title}
## Description
  ${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Conttributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
    ${data.installation}
    
## Usage
![Image of Yaktocat]
(https://octodex.github.com/images/yaktocat.png)
## Credits
[https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md#license]
## License
[License][https://choosealicense.com/licenses/${data.license}]
## Contribution Guidlines
## Tests instructions
## Questions
   Contact me :
   Github:(https://github.com/${data.username})
`;
};

module.exports = generateMarkdown;
