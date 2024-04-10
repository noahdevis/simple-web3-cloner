const { exec } = require('child_process');

// Define the URL of the web3.js GitHub repository
const web3RepoUrl = 'https://github.com/ethereum/web3.js.git';

// Define the directory where you want to clone the repository
const destinationDir = './web3';

// Execute Git clone command
exec(`git clone ${web3RepoUrl} ${destinationDir}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Repository cloned successfully to ${destinationDir}`);
});
