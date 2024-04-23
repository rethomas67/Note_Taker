//create a modular router
const router = require("express").Router();

// Import our modular routers for api/notes
const notesRouter = require("./notes");
router.use("/notes", notesRouter);
//export the routes
module.exports = router;
