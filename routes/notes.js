//create a modular router for the notes page
const notes = require("express").Router();
//file system import
const fs = require("fs");
const util = require("util");
//import the GUID package
const crypto = require("crypto");

// Promise version of fs.readFile
const destination = "./db/db.json";
const readFromFile = util.promisify(fs.readFile);

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile(destination).then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  //mapping the title and text from the request
  const { title, text } = req.body;

  //create a new note object and use the UUID package to generate a GUID
  if (req.body) {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      text,
    };

    //read the contents from the backend file
    readFromFile(destination).then((data) => {
      //convert the string to an array object
      const parseData = JSON.parse(data);
      //add the new note to the array
      parseData.push(newNote);

      //write the updated data to the data file
      fs.writeFile(destination, JSON.stringify(parseData), (err) =>
        err
          ? console.error(err)
          : console.info(`\nData written to ${destination}`)
      );
    });
    res.json(`Note added successfully`);
  } else {
    res.error("Error in adding tip");
  }
});

//export the route
module.exports = notes;
