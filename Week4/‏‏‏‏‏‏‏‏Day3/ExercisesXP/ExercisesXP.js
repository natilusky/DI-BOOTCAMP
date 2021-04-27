// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"]; 

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// guess:  ["bread","carrot","potato","chicken","apple","orange"]
//outcome: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// guess:  ["USA"]
//outcome: ["U", "S", "A"]

// Exercise 2 : Employees
// Instructions
// Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
users.map(first => console.log(`Hello ${first.firstName}`));

//Using the filter() method, congratulate only the Full Stack Residents.
const programer =  users.filter(function(userRole) {
    return userRole.role == 'Full Stack Resident';
});
for (prog of programer){
	console.log(`congratulate ${prog.firstName} ${prog.lastName}`)
}

//Exercise 3 : Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//1. Use the reduce() method to combine all of these into a single string.
const str = epic.reduce((acc,char) => {
	return acc+ " " + char;
},"");
console.log(str);

// Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

//Use the filter() method to congratulate the students that passed the course.
const passed = (item) => item.isPassed === true;
const congrat = (item) => console.log('Congrats ' + item.name);
student.filter(passed).forEach(congrat);