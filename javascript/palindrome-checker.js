// javascript/palindrome-checker.js

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same backward as forward.
 *
 * This script is designed to be run from the command line.
 * It takes a single string argument and prints whether it's a palindrome or not.
 *
 * Example usage:
 * node javascript/palindrome-checker.js "A man, a plan, a canal: Panama"
 */

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Sanitize the string: remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original sanitized string with its reversed version
  return sanitizedStr === sanitizedStr.split('').reverse().join('');
}

// Get the command-line arguments
const args = process.argv.slice(2);

// Check if an argument was provided
if (args.length !== 1) {
  console.log('Usage: node javascript/palindrome-checker.js <string>');
  process.exit(1);
}

const inputString = args[0];

// Check if the input is a palindrome and print the result
if (isPalindrome(inputString)) {
  console.log(`"${inputString}" is a palindrome.`);
} else {
  console.log(`"${inputString}" is not a palindrome.`);
}
