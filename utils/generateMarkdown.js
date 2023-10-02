// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  };

  const licenseBadges = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Creative Commons Attribution 4.0 International': 'https://creativecommons.org/licenses/by/4.0/',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };
  
  if (license in licenseBadges) {
    return licenseBadges[license]; 
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Creative Commons Attribution 4.0 International': 'https://creativecommons.org/licenses/by/4.0/',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };

  if (license in licenseURLs) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](${licenseURLs[license]})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## License
      
        Licensed under the ${license} license.`;
  } 
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
${renderLicenseLink(data.license)}
## Description:
${data.description}
## Installation:
### You must install the following for this app to function:
${data.installation}
## Usage:
${data.usage}
## Contributors:
${data.contributions}
## Tests:
### Run the following commands in your terminal to test this app:
${data.tests}
## Questions:
### If you have any questions, you may contact me at either
### Github: https://github.com/${data.github}
or
### Email: 
${data.email}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
