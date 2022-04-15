// TODO: Create a function that returns a license badge based on which license is passed in
const lincenses = ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License","Eclipse Public License 1.0"]
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===lincenses[0]){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license===lincenses[1]){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) "
  }else if (license===lincenses[2]) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) "
  }else if (license===lincenses[3]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0) "
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===lincenses[0]){
    return `[${lincenses[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===lincenses[1]){
    return `[${lincenses[1]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license===lincenses[2]) {
    return `[${lincenses[2]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license===lincenses[3]){
    return `[${lincenses[3]}](https://opensource.org/licenses/EPL-1.0)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===lincenses[0]){
    return `Click here to learn more ${lincenses[0]}`
  }else if (license===lincenses[1]) {
    return `Click here to learn more ${lincenses[1]}`
  }else if (license===lincenses[2]){
    return `Click here to learn more ${lincenses[2]}`
  }else if (license===lincenses[3]){
    return `Click here to learn more ${lincenses[3]}`
  }else {
    return ""
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Usage](#usage)
  3. [Installation](#installation)
  4. [License](#license)
  5. [Contribute](#contribute)
  6. [Questions](#questions)
  
  ## Badges
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Usage
  ${data.usage}


  ## Installation
  ${data.install}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribute
  ${data.contribute}

  ## Questions
  ### Available Contacts:
  [${data.username}](https://github.com/${data.username})
  ${data.email}`;
}

module.exports = generateMarkdown;
