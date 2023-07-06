import fs from "fs";

fs.appendFile("my-file.txt", "Created Node.js file", (err) => {
  if (err) throw err;
  console.log("File is saved!");
});

setTimeout(() => console.log("Finish"), 30000);
