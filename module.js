const color = require("cli-color");
const path = require("path");
const fs = require("fs");
const os = require("os");

// console.log(color.red("Hello"));

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname, "newfolder", "something.js"));

// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("folder created");
// });

// fs.writeFile(path.join(__dirname, "test", "test.txt"), "hello world", (err) => {
//   if (err) {
//     throw err;
//   }

//   fs.appendFile(
//     path.join(__dirname, "test", "test.txt"),
//     "hello node",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("data added");
//     }
//   );

//   console.log("file created");
// });

// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }

//   const content = Buffer.from(data);

//   console.log(content.toString());
// });

// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());

const Emitter = require("events");

// const myEmitter = new Emitter();

// myEmitter.on("somename", (data) => {
//   console.log(data);
// });

// myEmitter.emit("somename", {
//   name: "Karan",
// });

// class Auth {
//   register(username) {
//     console.log("registered successfully...");
//   }
// }

// const auth = new Auth();
// auth.register("karan");
