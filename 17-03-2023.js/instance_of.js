function school(Roll_No, Name, grade ){
 this.Roll_No = Roll_No;
 this.Name = Name;
 this.grade = grade;
}
let student = new school(01, "ABC", "C");
console.log(student instanceof school);//