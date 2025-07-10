const fs = require("fs");
const path = require("path");
const readline = require("readline");

const htmlTemplate = (projectName) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${projectName}</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>${projectName}</h1>

  <script src="script.js"></script>
</body>
</html>
`;

const cssTemplate = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;

  line-height: 1.5;
  font-weight: 700;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const jsTemplate = `// script.js
console.log("JavaScript is linked and running!");
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter project name: ", function (projectName) {
  const folder = path.join(__dirname, projectName);

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  fs.writeFileSync(path.join(folder, "index.html"), htmlTemplate(projectName));
  fs.writeFileSync(path.join(folder, "style.css"), cssTemplate);
  fs.writeFileSync(path.join(folder, "script.js"), jsTemplate);

  console.log(`✅ Project "${projectName}" created successfully!`);
  rl.close();
});
