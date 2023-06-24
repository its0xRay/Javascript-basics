function isAnagram(str1, str2) 
{

if(str1.length !== str2.length) 
  return false; 

// standardize to lowercase, splits into each characters, sorts it and then joins the characters
let a = str1.toLowerCase().split('').sort().join(''); 
let b = str2.toLowerCase().split('').sort().join(''); 

if(a === b) 
  return true;
else return false; 

} 

console.log(isAnagram("Beach","Mountain"))
console.log(isAnagram("try","ryt"))
