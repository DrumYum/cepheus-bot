const fs = require("fs");

const clearBuild = () => fs.rmSync("./build", { force: true, recursive: true });

process.stdout.write("Clearing build directory... ");
clearBuild();
process.stdout.write("Done!\n");
