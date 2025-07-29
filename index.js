/**
* PART 1: 
* Write a function `f(a, b)` which takes two strings as arguments and returns a
* string containing the characters found in both strings (without duplication), in the
* order that they appeared in `a`. Remember to skip spaces and characters you
* have already encountered!
*
* Example: commonCharacters('acexivou', 'aegihobu')
* Returns: 'aeiou'
*
* PART 2:
* Extend your function to handle more than two input strings.
* 
* 1. TODO: Determine I.O.C.E.
*   I: function takes two strings 
*   O: string that represents characters that the two strings have in common
*   C:characters should be in order that they appear in string one, no duplicates
*   E: if an empty string return empty string, skip spaces, 
*
* 2. TODO: Pseudocode you entire solution
//init empty string as container
//remove spaces from input strings(regular expression, replaceAll)
//iterate over both strings
//conditional stmt to find common characters if str1.includes(str2[i]) then   
// add to container string 
// return container string 
//

*/

const commonCharacters = (str1, str2) => {
  // 3. 
  //init empty string as container
  let commonChars = "";

  //remove spaces from input strings(regular expression, replaceAll)
  str1 = str1.replaceAll(' ', '');
  str2 = str2.replaceAll(' ', '');

//iterate over string 2
for(let i = 0; i < str2.length; i++){
  
  //conditional stmt to find common characters if str1.includes(str2[i]) then   
  if(str1.includes(str2[i]) && !commonChars.includes(str2[i])){
   
    // add to container string 
    commonChars += str2[i]
  }
}
// return container string 
return commonChars;
//
};
//console.log(commonCharacters('acexivou', ''));

///Part 2

const commonCharacters2 = (...strings) => {
  // 3. 
  //init empty string as container
  let commonChars = "";

  //remove spaces from input strings(regular expression, replaceAll)
  //str1 = str1.replaceAll(' ', '');
  //str2 = str2.replaceAll(' ', '');

   const spacesRemoved = strings.map((curr) => {
    return curr.replaceAll(' ', '');
  })
 //return spacesRemoved;

//iterate over string 
// for(let i = 0; i < str2.length; i++){
  
//   //conditional stmt to find common characters if str1.includes(str2[i]) then   
//   if(str1.includes(str2[i]) && !commonChars.includes(str2[i])){
   
//     // add to container string 
//     commonChars += str2[i]
//   }
// }
// // return container string 
// return commonChars;
//
};
console.log(commonCharacters2('a e iv u', ' l i v e'));

