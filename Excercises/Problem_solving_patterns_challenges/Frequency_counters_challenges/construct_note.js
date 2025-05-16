/**
 * 
 Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

function constructNote(msg, letters) {
  let lettersObj = {};
  let msgObj = {};

  for (let val of letters) {
    lettersObj[val] = (lettersObj[val] || 0) + 1;
  }

  for (let val of msg) {
    msgObj[val] = (msgObj[val] || 0) + 1;
  }

  console.log(lettersObj);
  console.log(msgObj);
  
  

  for (let key in msgObj) {
    if (!(key in lettersObj) || lettersObj[key] !== msgObj[key]) {
      return false;
    }
  }

  return true;
}

console.log(constructNote("abcde","abcdef"))
