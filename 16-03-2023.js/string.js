let string = "How many vowels in a given sentence";
 let str = string.toLowerCase();
 
function calculate_vowels(){
    let vowels = "aeiou";
    let vowels_count = 0;
    let consonants_count = 0;
for(var i of str)
{
    vowels.includes(i) ? vowels_count++ : consonants_count++;
    }

console.log("TOTAL NUMBER OF VOWELS ARE: "+vowels_count );
console.log("TOTAL NUMBER OF CONSONANTS ARE: "+consonants_count );}

calculate_vowels();
