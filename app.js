//console.log('Starting app.js');

//predefined modules
const fs = require('fs');
const _ = require('lodash')
//yargs makes passing keyvalue pairs as command line arguments easier
const yargs = require('yargs');


//internal dependency files
const notes = require('./notes.js')

const titleOptions = {

        describe : 'Title of note',
        demand : true,
        alias : 't'

};

const bodyOptions = {

        describe : 'Body of note',
        demand : true,
        alias : 'b'

};


const arg = yargs

.command('add','Add a new note',{

    title: titleOptions,
    body: bodyOptions
    
})
.command('list','List of all notes')
.command('read','Read a note',{

    title: titleOptions

})
.command('remove','Remove a note'{

    title: titleOptions
})

.help()
.argv;

var command = argv._[0];

//console.log('\nYargs:', arg);
//var command = process.argv[2];
//console.log('Command:', command);
//console.log('\nProcess:', process.argv);

if (command === 'add') {

    //console.log('Adding new note');
    var noteAdded = notes.addNote(arg.title, arg.body);

    if(noteAdded){
        console.log("\nSuccessfully added new note in database!");
        notes.logNote(noteAdded);
    }
    else
        console.log("\nNote with same title already exists");

} else if (command === 'list') {

    //console.log('Listing all notes');
    var allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

    //console.log('Reading note');
    var note = notes.getNote(arg.title);
    if(note){
        console.log("\nNote with title: "+ arg.title + " found!");
        notes.logNote(note);
    }
    else{
        console.log('Note not found!');
    }

} else if (command === 'remove') {
    
    //console.log('Removing note');
    var noteRemoved = notes.removeNote(arg.title);
    var message = noteRemoved ? "Note Removed!" : "Note not found!";
    console.log(message);

} else {
    console.log('Command not recognised');
}

/*
console.log(_.isString(true));
console.log(_.isString('Chirag'));

var filteredArray = _.uniq(['Shah', 1, 'Chirag', 1, 2, 3, 4]);
console.log(filteredArray);


var res = notes.addNote();
console.log(res);

var res = notes.addFunction(4, 5);
console.log('Result:' + res);


const os = require('os');
var user = os.userInfo();

//remember the ` symbol while using es6 feature
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
    if (err) {
        console.log(err);
    }
});
*/