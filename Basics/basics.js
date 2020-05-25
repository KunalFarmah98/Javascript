var name = 'Kunal Farmah';
var age = 21;

// concatenation of non matching types is allowed
console.log(name+' '+age);

function tellGp(age){
    if(age<13){
        console.log('kid');
    }
    else if(age>13 && age<18){
        console.log('teen');
    }
    else 
        console.log('adult')
}


var array = ['kunal','farmah', 21, 'ggwp']
console.log(array)

var today = 2020
var obj = {
    name : 'kunal',
    age : 21,
    birthyr : 1998,
    desig: 'student',
    // function expression to calclate age using keys
    calcAge : function(){
        // this.key gives access to all keys in object
        return this.age = today-this.birthyr;
    },
    calcGp : function(age){
         // this will create a new property and we can use it as we like
        return this.gp = tellGp(age); 
    } 
}

console.log(obj)
console.log(obj.calcAge())
obj.birthyr=2000;
obj.calcAge();
console.log(obj.age)
// gp will be undefined before we call calcGp for first time
obj.calcGp(obj.age)
console.log(obj.gp)
obj.calcGp(13)
console.log(obj.gp)
obj.age = 10
console.log(obj.calcGp(obj.age))