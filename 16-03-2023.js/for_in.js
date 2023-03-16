var person = {
    firstName : "Abc",
    lastName : "cde ",
    Age : 12
};
let str = "";
for(let obj in person)
{
  console.log(`${obj} = ${person[obj]}`);
  //str = str + person[obj]+ " ";
}
//console.log(str);