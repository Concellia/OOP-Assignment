class Person { 
    constructor(name,age,gender,interest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;

        
    }
 talk(){console.log("Hello my name is " + this.name + ", I am a " + this.age + " year old " + this.gender + ", I love " + this.interest[0] + " and " + this.interest[1] + ".");};
};
var person1 = new Person("Bianca", 25, "female", ["singing", "Reading"]);
console.log(person1 instanceof Person);
console.log(person1.talk());
var person2 = new Person("Tiyiselani", 16, "male", ["Racing","Dancing"]);
console.log(person2.talk());
