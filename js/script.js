'use strict'

var Human = {
	name: 'T100',
	age: 30,
	sex: 'male',
	height: 180,
	weight: 150
};

var Worker = {
	job: 'IT',
	salary: '$500',
	work: function(){
		console.log('Working hard');
	},
};

var Student = {
	university: 'GoIT',
	scholarship: '$10',
	watchTV: function(){
		console.log(`"Game of Thrones" on HBO`);
	},
};

Student.__proto__ = Human;

Worker.__proto__ = Student;


console.log("Human", Human);
console.log("Student", Student);
console.log("Worker", Worker);

console.log(
`
Human => Student => Worker

Human's name is ${Student.name},
Student's name is ${Student.name},
Worker's name is ${Worker.name}

Human's sex is ${Student.sex},
When Worker was Student his scholarship was ${Student.scholarship},
Worker's university is ${Worker.university},

`);

Worker.watchTV();