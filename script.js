var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor
var Person = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}


//Method
Person.prototype.calculateAge = 
    function() {
        console.log(2016 - this.yearOfBirth);
    };

//Properties

Person.prototype.lastName = 'Smith';



//Instantiation

var john = new Person('John', 1990, 'Teacher');

var jane = new Person('Jane', 1969, 'Designer');

var mark = new Person('mark', 1948, 'Retired');



//Calling the function

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//Checking the Property

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);










