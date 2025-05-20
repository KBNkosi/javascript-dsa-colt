// Check if string contains occurrences of a specific substring
// If it does return the count or number of occurrences, if not return 0

/**
 * Pseudocode
 * > Loop over the longer string
 * > Loop over the shorter string
 * > If the characters don't match, break out of the inner loop
 * > if the characters do match, keep going
 * > If you complete the inner loop and find a match,
 *     increment the count of matches
 * > Return the count
 */

function countSubstr(str, substr) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        break;
      }

      if (j === substr.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(countSubstr("thatheydidit", "th"));
