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
  return `
# ${data.title}
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
[MIT License][https://choosealicense.com/licenses/mit/]
[Apache License][https://choosealicense.com/licenses/apache-2.0/]
[GNU General Public License v2.0][https://choosealicense.com/licenses/gpl-2.0/] 
## Contribution Guidlines
## Tests instructions
## Questions
   Contact me :
   Github:[${data.username}]()
`;
};

module.exports = generateMarkdown;
