/*
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


//Object.create -method

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

//Result -> In console : john --> object {name: "john", yearOfBirth: 1990, job: "teacher"};


//Another way of adding the property

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1987 },
    job: { value: 'designer' }
});

*/


//Primitives vs Objects

//Primitives
var a = 23;
var b = a;

a = 46;
console.log(a); //46
console.log(b); //23

//Objects

var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;

//mutation

obj.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30



//Primitive and object in a function


var age = 27;

var obj = {
    name: 'Sai',
    city: 'Edison'
};

function change(a, b) {
    a = 30;
    b.city = 'SFO';
}

change(age, obj);

console.log(age); //27

console.log(obj.city); //SFO

































































































































