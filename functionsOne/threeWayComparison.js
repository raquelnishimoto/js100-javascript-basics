/*
** Write a function that compares the length of two strings. 
** It should return -1 if the first string is shorter, 1 if the second string is shorter, 
** and 0 if they're of equal length.
*/

function compareByLength(word1, word2) {
  if (word1.length < word2.length) {
    return -1;
  } else if (word1.length > word2.length ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0