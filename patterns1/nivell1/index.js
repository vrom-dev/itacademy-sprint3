const { readdir, readFile, writeFile } = require("fs").promises;
const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
const readAndReverse = async () => {
  const files = await readdir(inbox)
  await Promise.all(files.map(async (file) => {
    const inputFile = join(inbox, file)
    const outputFile = join(outbox, file)
    const content = await readFile(inputFile, 'utf-8')
    await writeFile(outputFile, reverseText(content))
    console.log(`${file} was successfully saved in the outbox!`)
  }))
    .catch(error => console.log(error))
}

readAndReverse()
