// MODULES

// keren = "mewwww";

// console.log(keren);

////////////////////////////////////////

// let { addition } = require("./addition");

// addition(10, 4);
// addition(43, 78);
// addition(2, 6);
// addition(56, 32);

//////////////////////////////////////////////////////////

// // WEB SERVER

// let http = require("http");

// // PORT

// const port = parseInt(process.env.port) || 4000;

// // WEB SERVER -- CREATE

// http
//   .createServer((req, res) => {
//     const currUrl = req.url;
//     console.log("Url: ", currUrl, "\nMethod: ", req.method);
//     res.writeHead(200, { "Content-type": "text/html" });
//     switch (currUrl) {
//       case "/":
//         res.end("You are home");
//         break;
//       case "/about":
//         res.end("About me page");
//         break;
//       case "/data":
//         res.end("Page data");
//         break;
//       default:
//         res.end("Page / content was not found");
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is running at port ${port}`);
//   });

/////////////////////////////////////////////////////////

// EXPRESS.JS

const express = require("express");

// PORT

const port = parseInt(process.env.port) || 4000;

// EXPRESS APP

const app = express();

// ROUTER

const route = express.Router();

app.use(route);

// HOME or "/" ---- NB

route.get("/", (req, res) => {
  res.status(200).send("Well done !");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
