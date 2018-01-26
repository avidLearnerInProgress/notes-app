
/*
var obj = {
	name : 'Chirag'
};

//stringify() --> converts object to json string
var stringObj = JSON.stringify(obj); 

console.log(typeof stringObj);
console.log(stringObj);


var personString = '{"name" : "Chirag Shah", "age" : 25}';

//parse() --> converts json string back to object
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

var originalNote = {
	title : 'Some title',
	body : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

console.log(typeof originalNoteString);

fs.writeFileSync('notes.json',originalNoteString, function(err){
	if(err)
		console.log("Error!");
});

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

