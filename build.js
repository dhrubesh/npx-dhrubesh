'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.blue.underline.bold('              Dhrubesh Deb Sharma                 '),
  work: chalk.white('Senior Frontend Developer at') + chalk.green.bold(' Makeen'),
  youtube: chalk.gray('https://bit.ly/3s5vhmU'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('the_Junior_Dev'),
  github: chalk.gray('https://github.com/') + chalk.green('dhrubesh'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('dhrubesh/'),
  web: chalk.cyan('https://dhrubesh.github.io/'),
  npx: chalk.red('npx') + ' ' + chalk.white('dhrubesh'),
  labelWork: chalk.white.bold('       Work:'),
  labelYoutube: chalk.white.bold('    Youtube:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const youtubing = `${data.labelYoutube}  ${data.youtube}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               youtubing + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
