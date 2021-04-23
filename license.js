let badge = ''
function renderlicenseBadge(data) {
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
function renderLicenseSection(data) {
    if(data[0] === ''){
        console.log('license section is empty')
    }
}


  module.exports ={renderlicenseBadge,renderLicenseLink,renderLicenseSection};