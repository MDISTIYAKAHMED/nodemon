const readline = require("readline");
const { spawn } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = "";

if (ans == ""){
  rl.question("Input your file path -> ", function (answer) {
    ans = answer;
    const child = spawn('nodemon', [`${ans}`]);
    child.stdout.on('data', (data) => {
      console.log(`${data}`);
    });
  });
}else{
  const child = spawn('nodemon', [`${ans}`]);
    child.stdout.on('data', (data) => {
      console.log(`${data}`);
    });
}