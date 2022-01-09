const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// This creates a new file or overwrites the existing file with the same name
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

// This appends a this to the existing file
writeFileSync(
  "./content/result-sync.txt",
  `This is another result: ${first}, ${second} `,
  { flag: "a" }
);
