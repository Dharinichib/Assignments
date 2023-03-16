function recursion(num)  
{   
if (num == 1)  
{  
return [0, 1];  
}  
else  
{  
var total = recursion (num - 1);  
total.push( total[ total.length - 1] + total[ total.length - 2]);  
return total;  
}  }
console.log("FIBONACCI SERIES: "+recursion(4));