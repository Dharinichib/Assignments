var array = [43, 98, 78, 67, 12];
var num = 43;
var n = array.length
function L_Search(array, n, num)
{  for(var i = 0; i<n; i++)
{    if(array[i] == num){
      return i+1;}
                        }
            return -1;
            
}
 let result = L_Search(array, n, num);
 result = -1 ? console.log("NUMBER DOESN'T EXIST.") : console.log("NUMBER EXIST AT INDEX "+res); 
