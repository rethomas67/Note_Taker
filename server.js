//import express, the path module and the router module
const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
//the port for the web app
const PORT = 3001;
//instantiate expree
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
//set the frontend directory
app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//listen to the port for the web application
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
