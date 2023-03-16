var person ={
    Roll_no : 01,
    firstName : "abc",
    lastName : "def",
    email : "abc@gmail.com",
    year : 2000,
    "this is movie": true,
    age : function(){
        return (2023 - this.year);
    }
};
console.log(person.age());
for( obj in person)
{
    console.log(`${obj} = ${person[obj]}`);
}
