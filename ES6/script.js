// let and const

const name = 'jhasa';
// error
// name  = 'ggwp';

let name1 = 'jhasa';
name1 = 'jj';

/* var is function-scoped, let and const is block scoped */

function gg(name){
    if(name!=""){
        var yes = "yes";
        // no is scoped in this if, while var is allowed anywhere in function
        let no = "no";
    }
    console.log(yes);
    // error
    // console.log(no);
}



/* IIFE using blocks  

    No need to create a fucntion just to keep vars restricted
    
 */

{
    let b = '20';
    const a = 50;
    var c = 40;
}

// not allowed
// console.log(b);
// console.log(a);
//allowed
console.log(c);



/* Strings */

let str = 'Jhasa re';
let newname = 'oof';

const yob = 1998;

function calcAge(yr){
    let age = yr-yob;
    // placeholder concatenation
    // use ` instead of single quotes
    console.log(`${str} was born in ${yob} and is ${age} years old`);  
}

calcAge(2020);



/* Arrow Functions  */

const yrs = [1998,1997,1990,1987];

// simple arrow function
let ages = yrs.map(el => 2020-el);
console.log(ages);

// multiple parameter arrow function
ages = yrs.map((el,ind)=>`Age = ${2020-el} for index = ${ind}`);
console.log(yrs);

// arrow function returning something
ages = yrs.map((el,ind)=>{
    let print = `Age = ${2020-el} for index = ${ind}`;
    return print;
});

console.log(ages); 


/* Arrow fucntion has its own this keyword, similar to method call that points to the caller */

const box = {
    color: 'green',
    pos :1,
    clickme: function(){
        document.querySelector('.green')
        .addEventListener('click',()=>{
            // using this.pos and this.color in a normal function would not work
            var str  = `This is a box number ${this.pos} and it is ${this.color}`;
            alert(str);
        })
    }
}

box.clickme();


function Person(name) {
    this.name =name;
}

Person.prototype.friend = function(friends){
    var arr = friends.map(el=> `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Jhasa','Re','Loba'];
new Person('John').friend(friends);



/* Destructuring */


const [names,age]  = ['john',26];
console.log(names);
console.log(age);

const obj ={
    fn: 'John',
    ln: 'Smith'
};

const {fn,ln}=obj;
console.log(fn);
console.log(ln);

