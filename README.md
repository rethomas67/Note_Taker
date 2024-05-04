# Note_Taker

## Description

The application initializes by retrieving "/" the index.html file. After the user clicks, Get Started the application is routed to "/notes" the notes.html file. Once the user is on "/notes", the application fetches the route "/api/notes', reads all of the notes from a json file and renders a list of clickable note titles and a fav-icon garbage can to delete the item to a sidebar on the left.. When the note title is clicked, the right side bar displays the note title and details for the selected note. When, the deletion icon is clicked, the "/api/notes " delete(/:id) method is called reads all contents of the json file, splices the array to remove the note, resaves the json file, and reloads the list. When the New Note button is clicked, the sidebar to the right has inputs for the Note Title and the Note Text. After the user enters information into both fields, buttons to save a new note and clear form are presented. Clear form allows the user to reenter the information. The save button the "/api/notes " post method is called, appends the new note to the JSON file with an UUID id created by the crypto package, and reloads the list on the left sidebar.

## Installation

N/A

## Usage

When Note Taker is opened, a link is presented for the notes page. When the link to the notes page is clicked, the notes page is opened with a list of existing notes. After a note title and note's text are entered, a save button and clear form button are displayed on the navigation bar at the top of the page. After the save button is clicked, the new note is save and appears on the left sidebar. When an existing note is clicked on the left sidebar, the right sidebar displays the note title and details on the right sidebar, and a button for a new note appears. When the new button is pressed, empty fields are displayed to enter a new note title and text, and the clear button disappears.

Live URL:
https://ret-note-taker-dfb070aa0c2b.herokuapp.com/

The link to the GitHub repository is:
https://github.com/rethomas67/Note_Taker

## Credits

N/A

## License

N/A
