function isPalindrome(word) {
  let newWord = '';
  let inputLength = word.length - 1;
  for(let i = 0; i < word.length; i++) {
    newWord += word[inputLength]
    inputLength--;
  }
  return newWord === word ? true : false;
}

/* 

  GOAL

  My goal here is to write a function that takes a string as an argument. This is function will test the string to see if it is a palindrome. If it is a palindrome, the function will return TRUE, if it is not, the function will return FALSE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  PSEUDOCODE

  ⪧ obtain the inputString length and assign this value to a variable inputLength
  ⪧ create a loop that will:
    ⪧ decrement inputLength by 1
    ⪧ use decremented inputLength as an index for inputString
    ⪧ append the character at inputString[inputLength] to newString
    ⪧ once the loop has appended every character in inputString to newString, check if newString = inputString
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  TEST CASES

  ⪧ test that function is written correctly and taking inputString
  ⪧ test that for loop is working over inputString by console logging it
  ⪧ check that newString is being properly appended
  ⪧ check that conditional statement is returning the appropriate value

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
