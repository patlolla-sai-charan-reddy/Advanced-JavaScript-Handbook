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

//Objects and Functions

//Functions are also objects

var years = [1990, 1991, 2010, 1993, 1994];

function arrayCalculation(arr, fn) { //fn here is used for a callback function
    
    var arrayResult = [];
    
    for(var i = 0; i < arr.length; i++) {
        arrayResult.push(fn(arr[i]));
    }
    
    return arrayResult;
    
}

function calculateAge(el) { //Callback Function
    return 2016 - el;
}

function isFullAge(el) { //Callback function
    return el >= 18;
}

function calculateHeartRate(el) { //Callback Function
    if( el >= 18 && el <= 81) {
        return Math.round(206.97-(0.67 * el));
    } else {
        return 'Age Matters!';
    }
}

var ages = arrayCalculation(years, calculateAge);
var fullAges = arrayCalculation(ages, isFullAge);
var heartRate = arrayCalculation(ages, calculateHeartRate);


console.log(ages);
console.log(fullAges);
console.log(heartRate);


//Functions returning another function

function interviewQuestion(job) {
    if(job == 'Designer') {
        return function(name) {
            console.log(name + ', Can you plase explain what is 1');
        }
    } else if (job == 'Teacher') {
        return function(name) {
            console.log(name + ', Can you plase explain what is 2');
        }
    } else {
        return function(name) {
            console.log(name + ', Can you plase explain what is 3');
        }
    }
}


var x = interviewQuestion('Teacher'); //sai, Can you plase explain what is 2
var y = interviewQuestion('Designer'); //charan, Can you plase explain what is 1


x('sai');
y('charan');
y('Reddy');

interviewQuestion('teacher')('Mark'); //Mark, Can you plase explain what is 3


//Immediately Invoked Function expressions (IIFE)


//Structure of IIFE
(function () {
    
})();



//This is the way we write generally

function game() {
    var score = Math.random() * 10; //we cannot access score variable from outside
    console.log(score >= 5);
}

game();


//This is the way to write in IIFE
(function () {
    var score = Math.random() * 10; //we cannot access score variable from outside
    console.log(score >= 5);
})();


//Ex:
(function (goodluck) {
    var score = Math.random() * 10; //we cannot access score variable from outside
    console.log(score >= 5 - goodluck);
})(5); //passing argument to function



//Closures -An inner function has always access to the variable and parameters of its outer function,
//even after the outer function has returned.

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(55);
retirementUS(1990); //29 years left until retirement.

retirement(55)(1990); //29 years left until retirement.

var retirementGermany = retirement(65);

retirementGermany(1991); //40 years left until retirement.


//Example of interview using the closures

function interviewQuestion(job) {
    
    return function(name) {
        if(job == 'Designer') {
            console.log(name + ', Can you plase explain what is 1');
    } else if (job == 'Teacher') {
        
            console.log(name + ', Can you plase explain what is 2');
        
    } else {
        return function(name) {
            console.log(name + ', Can you plase explain what is 3');
        }
    }
}
    
}

interviewQuestion('Designer')('Sai'); //Sai, Can you plase explain what is 1


//Bind, Call and Apply - Functions are special kind of objects

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good '+ timeOfDay + ' ' + this.name);
        } else if(style === 'friendly') {
            console.log('Good '+ timeOfDay + ' ' + this.name);
        }
    }
};

//Another Object -- the call methods first argument is always set to this variable

var emily = {
    name: 'Emily',
    age: 35,
    job: 'Designer'
};

john.presentation('formal', 'morning'); //Good Morning
john.presentation('formal', 'Afternoon'); //Good Afternoon
john.presentation('friendly', 'Evening'); //Good Evening

//Call METHOD - the below process is called method borrowing --call method allows us to set "this" variable


john.presentation.call(emily, 'friendly', 'afternoon'); //Good afternoon Emily

//Apply method accepts as an array


//Bind generates a copy of a function, that we can store somewhere

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning'); //Good Morning John

johnFriendly('night'); //Good night John


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon'); //Good afternoon Emily

*/



































































































































































































































