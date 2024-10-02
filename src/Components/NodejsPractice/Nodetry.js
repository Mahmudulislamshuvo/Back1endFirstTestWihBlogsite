const { log } = require("console");
const fs = require("fs");

// create new file
fs.writeFileSync("Test1.txt", "Hello bal siru", (err) => {
  if (err) {
    console.error();
  }
});

// to add value + with previous
fs.appendFileSync("Test1.txt", "add more value with previous", (error) => {
  console.log(error);
});

// to create empty file
fs.writeFileSync("texxtest2.txt", "", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.writeFileSync("shuvo.txt", "Hellow Shuvo How are you?", (err) => {
  if (err) {
    console.log(err);
  }
});

to read
const Mydata = fs.readFileSync("shuvo.txt", "utf-8");
console.log(Mydata);

to rename
fs.renameSync("shuvo.txt", "sumona.txt");
fs.unlinkSync("sumona.txt");

====================Assyncronas way====================

fs.writeFile("Shuvo.txt", "", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFile("Shuvo.txt", "Hi babe how you doing today?", (err) => {
  if (err) {
    log(err);
  }
});

// to real data way one
fs.readFile("Shuvo.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  }
  log(data);
});

fs.rename("Shuvo.txt", "sumona.txt", (err) => {
  if (err) {
    log(err);
  }
});

// to real data way two
fs.readFile("sumona.txt", (err, data) => {
  if (err) {
    return;
  }
  log(data.toString());
});

fs.unlink("sumona.txt", (err) => {
  if (err) {
    log(err);
  }
});

const { log } = require("console");
const path = require("path");

const fullpath = __filename;
console.log(path.extname(fullpath));
// to see directory
console.log(
  path.format({
    root: "/",
    dir: "shuvo",
    name: "online",
    ext: "js",
  })
);

log(path.join("shuvo", "koy", "ace", "index.js", "../.."));

const url = require("url");

console.log(
  url.parse(
    "https://www.youtube.com/results?search_query=set+ctrl%2Bk+to+rerun+the+terminal+code+in+vs+code"
  )
);

const { log } = require("console");
const os = require("os");
log(os.cpus());
