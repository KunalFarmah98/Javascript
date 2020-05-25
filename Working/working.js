// Lecture: Hoisting


// functions
// function can be called before defintition
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}

// function expression can not be called before defintition
//retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables
// age is undefined rn
console.log(age);
var age = 23;
// now age has a value 23
console.log(age);

function foo() {
    // here local age is not defined yet
    console.log(age);
    var age = 65;
    // only local age is changed and global stays untouched
    console.log(age);
}
foo();
// vecrified that global stays untouched
console.log(age);




/////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        // it has access to c, b as well as a as scope chain goes upwards
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        // it has access to third as it is in the global scope
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    // it has access to only d and a, hence c is not found
    //console.log(c);
    console.log(a+d);
}




/////////////////////////////////////
// Lecture: The this keyword


console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
