/*let person = 
{
    firstName : "abc",
    lastName : "def",
    age : 25,
    person_1 : {
        age_1 :23,
    Age : function age(){
        console.log(this.age, this.age_1); 
       }}
}
person.person_1.Age();*/
let person = 
{
    firstName : "abc",
    lastName : "def",
    age : 25,
    Age : function age(){
        console.log(this.age);
    }
}
person.Age();
