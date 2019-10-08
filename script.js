const fs = require("fs-extra");
const { promisify } = require("util");

const fsCopy = promisify(fs.copy);
const fsRemove = promisify(fs.remove);

main();

async function main() {
  await fsRemove("./assets");
  await fsCopy("./dist", "./");  
  console.log("run script success!");
}