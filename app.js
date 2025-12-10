// Create a file named app.js. 
// ○ Use yargs to parse a --city argument provided by the user.  
// ○ Simulate fetching weather data by returning a hardcoded response for 
// different cities. 
// ○ Use chalk to style the output, emphasizing the city name and weather 
// details.
// 3. Understand Dependency Management: 
// ○ Review the package.json file and identify where the installed 
// dependencies are listed. 
// ○ Explain the role of the node_modules directory and why it should not 
// be included in version control. 
// ○ Create a .gitignore file and add node_modules to it. 
// 4. Test the App: 
// ○ Run the app with a city name argument (e.g., node app.js --city="New York"). 
// ○ Ensure it displays the correct simulated weather data. 
// 5. Simulate Dependency Issues: 
// ○ Delete the node_modules folder. 
// ○ Use npm install to reinstall all dependencies from package.json. 
// ○ Verify the app still works correctly. 
// Expected Deliverables 
// 1. A functioning weather-app project with: 
// ○ app.js implementing the functionality described. 
// ○ Properly listed dependencies in package.json. 
// ○ .gitignore file excluding node_modules. 
// 2. A short written response commented within the code, addressing: 
// ○ The purpose of package.json in managing dependencies. 
// ○ Why node_modules should not be included in version control. 
// ○ How npm install reinstalls dependencies and its importance in 
// collaborative projects. 


const chalk = require('chalk');

//copied these const statements from the npm information. I'm not fully sure why it is this way and not just 'yargs'
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).parse()

// argument

const weatherMap = {
    "New York": "cloudy",
    "St. Louis": "sunny"
};

let weather = weatherMap[argv.city] || "unknown";

console.log(`Here is the weather for ${chalk.blue(argv.city)}: It will be a ${chalk.yellow(weather)} day. `);