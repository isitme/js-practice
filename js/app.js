

 var person = function calculateAge(name, yearOfBirth, job){
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
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












