/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // we will total the char unicode of all chars and see if they are equal to the of other string,
  // instead of checking individual chars of both the strings.

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length != str2.length) 
    return false;

    let sum1 = 0, sum2 = 0;
    for(let i=0; i< str1.length; i++) {
      sum1 += str1.charCodeAt(i);
      sum2 += str2.charCodeAt(i);
    }
    if(sum1 != sum2)
      return false;
    else
      return true;
}

module.exports = isAnagram;
