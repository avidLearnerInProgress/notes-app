//console.log("\nStarting notes.js")

const fs = require('fs');

var fetchNotes = () => {

    //used try catch as when you are inserting first note there is no file named notes-data.json
    //hence without try catch error is thrown
    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    } catch(e){
        //do nothing
        return [];
    }
};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes), function(err){
            if(err)
                console.log("Error!");
        });

};


var addNote = (title, body) => {
    /*console.log('\nAdding note..');
    console.log('Title: ' + title);
    console.log('Body: ' + body);
    */

    //stringify() while file write
    //parse() while file read

    var notes = fetchNotes();
    var note = {title,body}; //note structure
    
    
    /*var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });*/

    var duplicateNotes = notes.filter((note) => note.title === title);
    //filter is like for each loop. It goes over all the notes to check for duplicate titles

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

    //console.log('\n');
};

var removeNote = (title) => {
    //console.log('\nRemoving Note: '+ title);
    //console.log('\n');

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};


var getAllNotes = () => {
    //console.log('\nGetting all notes..');
    //console.log('\n');

   return fetchNotes();
    

};

var getNote = (title) => {
    //console.log('\nReading Note: '+title);
    //console.log('\n');


    var notes = fetchNotes();
    var resultNote = notes.filter((note) => note.title === title);
    return resultNote[0];
};

var logNote = (note) => {
    //debugger;
    console.log("");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};


// format --> name:value
//if name is same as value we can skip the value var in es6
module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote,
    logNote
};



/*
//module.exports.age = 24;
//module.exports --> used to export function to other files

module.exports.addFunction = function(a, b) {
    console.log("Add operation");
    return a + b;
}*/