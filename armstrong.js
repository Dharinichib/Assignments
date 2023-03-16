let sum = 0;
const number = 321;
function armstrong(){
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum = sum + remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log("An Armstrong number");
}
else {
    console.log("Not an Armstrong number.");
}}
armstrong();