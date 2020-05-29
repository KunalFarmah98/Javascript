// base constructor (class)
var john = {
    name: 'John',
    yob: 1998,
    job:'teacher'
};

// fucntion constructor
var Person = function(name,yob,job){
    this.name = name;
    this.yob = yob;
    this.job = job;
    /*
        Adding a method to constructor will lead to multiple copies
        of that function for every object created using it    
    */

    // this.calcAge  = function{
    //     console.log(2020- this.yob);
    // }
}

/* This will make a calcAge method for all objects separately

// constructing an object using constructor 
var john = new Person('John',1998,'teacher');
john.calcAge();

var johnny = new Person('Johnny', 1890, 'homo');
*/



/* Adding inheritable method to the prototype prototype, hence
    all objects share the same copy and don't have a Personal one for them
*/

Person.prototype.calcAge  = function(){
    console.log(2020- this.yob);
}

Person.prototype.lastname = 'Smith';

var sunny = new Person('Sunny', 1990, 'boxer');
console.log(sunny);
// as sunny inherits lastname as it is, it is its own property

var jb = new Person('JB', 1999, 'gg');
jb.lastname = 'Singh';
console.log(jb);

// as we have modified the value of lastname for jb, it will become its own property

console.log(sunny.lastname);
console.log(jb.lastname);



var Person_proto = {
    calcAge : function(){
        console.log(2020-this.yob);
    }
}

// Object.create(prototype,object specifying values to be populated)

var jane = Object.create(Person_proto,
    {
        name: {value: 'Jane'},
        yob: {value: 1987},
        job: {value:'teacher'}
    });




/* IIFE */

(function() {
    var score  = Math.random()*10;
    console.log(score>=5);
})();

(function(arg){
    console.log(arg);
})(2020);


/* Closures */

function retirement(retirementAge){
    var a=' yrs left until retirement';
    return function(age){
        // it has access to var a and retirementAge as it is inner function
        console.log(retirementAge-age + a);
    }
}

var retirementInd = retirement(70);
// even retirement has returned, we can call the var as a function as it returned a function
// that has acccess to var a
retirementInd(23);

retirement(65)(30);



/* Bind, Call, Apply*/

var john = {
    name: 'John',
    age: 24,
    display: function(timeofday, message){
        console.log('Good ' + timeofday +'from '+this.age+' years  old'+this.name + message);
    }
};


var emily = {
    name: 'Emily',
    age: 16
};

john.display('Morning',' Yo Boi');

// call and apply can modify this and make another object borrow another object's mehtod
// call takes actual format
john.display.call(emily,'Morning', '!! Yoouhoo');
// apply takes arguments as a list, even if methods doesn't accept a list
john.display.apply(emily,['Evenening','!! Yoouhoo']);

// bind helps in presetting some parameters and returns a copy of the method

var afternoonGreet = john.display.bind(emily,'Afternoon'); // presetting Afternoon as timeofday
afternoonGreet('!!Woah');




