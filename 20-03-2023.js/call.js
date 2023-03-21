let obj = {
    firstName: "xyz",
    lastName: "abc",
   
};
 function  fullname(country, state)
 {
   console.log(this.firstName +" "+ this.lastName +" "+ country + " " +state);
 } 
 
let obj2 = {
    firstName: "xyz1",
    lastName:"abc2"
};
fullname.call(obj2, "India", "j&k");
fullname.apply(obj, ["Pakistan", "lahore"]);
let fnc = fullname.bind(obj2, "Sri lanka", "hosi");
fnc();