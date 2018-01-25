
// Inheritance and Prototype for function construction..
/*
 var person = function calculateAge(name, yearOfBirth, job){
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job,
    this.calculateAge = function(){
        console.log(2018 - this.yearOfBirth);
    }
 }

 person.prototype.lastName = "islam";

 var jhon = new person("Rakibul", 1997, "Student");
 var jane = new person("jane", 1995, "teacher");
 var max = new person("max", 1992, "developer");

 jhon.calculateAge();
 console.log(jhon.name+" "+jhon.lastName);

 const name = "rakibul";

 console.log(name);
*/

// Premitive example: This will change
/*
var a = 10;
var b = a;

a = 23;

console.log(a);
console.log(b);
*/
// Object Example:  This won't change
/*
var obj1 = {
    name: "Rakibul",
    age: 20
};

var obj2 = obj1;

obj1.name = "Fulon";

console.log(obj1.name);
console.log(obj2.name);
*/
// Object and Premitive Example with function
/*
var age = 20;
var obj = {
    name: "Rakibul",
    city: "Jhenaidah"
};

function change(a, b){
    a = 25;
    b.city = "London";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
/*
// First Class Functions Passing Functions as Arguments
var year = [1995, 1923,1952, 1975, 1956];

function arrCal(arr, fn){
    var arrRes = [];

    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


function calculateAge(el){
    return 2018 - el;
}

var ages = arrCal(year, calculateAge);

console.log(ages);
*/

/*
// Function returning Function

function interviewQuestion(job){
    if(job === "Designer"){
        return function(name){
            console.log(name + " Can you tell me what UI design is?");
        }
    }
    else if(job === "Teacher"){
        return function(name){
            console.log(name + " Can you tell what is the most interestion thing about teaching?");
        }
    }
    else{
        console.log("Please tell me What do you do");
    }
}

var designerQuestion = interviewQuestion("Designer");
var teacherQuestion = interviewQuestion("Teacher");

designerQuestion("Fulon");
teacherQuestion("Rakibul");
*/ 

/*
// Immediately Invoked Function Expressions (IIFE)
// This is a function without name and {argument(Perameter) or 
you can creater an argument like this}
// This is just a Data Privacy

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/*

// Have to Understant (closures)

*/
/*
// Bind, call and Apply

var rakibul = {
    name: "Rakibul",
    age: 20,
    job: "Student",
    presentation: function(style, timeOfday){
        if(style === "formal"){
            console.log("Good "+ timeOfday + " Ladies and Gentelmen. "+
        "I\'m " + 
        this.name+ " I\'m a "+
        this.job+" I\'m "+
        this.age);            
        }
        else if(style === "friendly"){
            console.log("Hay! What\'s up? I\'m'" + 
        this.name+ " I\'m a "+
        this.job+" I\'m "+
        this.age);
    
            
        }
    }
}


rakibul.presentation("friendly", "afternoon");


var fulon = {
    name: "Fulon",
    age: 20,
    job: "Student",
}


rakibul.presentation.call(fulon, "formal", "morning");

// The is Bind.
var rakibulBind = rakibul.presentation.bind(rakibul, "friendly");
rakibulBind("morning");


var fulonBind = rakibul.presentation.bind(fulon, "formal");
fulonBind("afternoon");
*/







































































