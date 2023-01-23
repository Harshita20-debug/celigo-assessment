
//1
const Person = new Object();
Person.firstName="Harshita";
Person.LastName="Rai";
Person.age=23;
console.log(Person);

 
//2
const person={
    firstName:"Harshita",
    lastName:"rai",
    age:23

};
console.log(person);
//3

function Per(firstName,lastName,age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

const per=new Per("Harshita","rai",23);
console.log(per);