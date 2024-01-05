/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.toLowerCase();
  let newstr = "";
  let revstr = "";

  for(let i=0; i< str1.length; i++) {
    if(str1.charCodeAt(i) >= 97 && str1.charCodeAt(i) <= 122) {
      newstr += str1[i];
      revstr = str1[i] + revstr;  // this should be in this order. concat in rev
    }
  }
  if(newstr === revstr)
  return true;
return false;
}

module.exports = isPalindrome;
