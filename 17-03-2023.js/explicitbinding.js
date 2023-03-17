let person = 
{
    firstName : "abc",
    lastName : "def",
    age : 25,
    };

let person_2 = 
    {
        firstName : "abc",
        lastName : "def",
        age : 22,
        };

    let Age = function(){
        console.log(this.age); 
       }
       var x = Age.bind(person);
       var y = Age.bind(person_2);
       x();
       y();