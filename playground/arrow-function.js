/* var square = (x) => {
 	return x * x;
 };
*/

var square = x => x*x;
console.log(square(9));



//arrow functions cannot bind this keyword
//arrow functions cannot bind arguments array
var user = {
	name: 'Chirag',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);	
	}

};


user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
