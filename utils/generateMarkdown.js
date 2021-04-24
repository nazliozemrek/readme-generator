// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = ''
const renderlicenseBadge = (data) => {
    if(data[0] === 'MIT'){
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        console.log(badge)
    } else if (data[0] === 'apache-2.0' ) {
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        console.log(badge)
    } else if (data[0] === 'gpl-2.0') {
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        console.log(badge);
    } else {
        console.log('no badge')
    }
  }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data[0] === 'MIT'){
      badge = '(https://opensource.org/licenses/MIT)'
      console.log(badge)
  } else if (data[0] === 'apache-2.0' ) {
      badge = '(https://opensource.org/licenses/Apache-2.0)'
      console.log(badge)
  } else if (data[0] === 'gpl-2.0') {
      badge = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
      console.log(badge);
  } else {
      console.log('no link')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data[0] === ''){
      console.log('license section is empty')
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  renderlicenseBadge(data.license)
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
## Badges
${badge}
## Contribution Guidelines
The [Contributor Covenant](https://www.contributor-covenant.org/).
## Tests instructions
## Questions
   Contact me :
   Github:(https://github.com/${data.username})
`
}

module.exports = generateMarkdown



