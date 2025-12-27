
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

const inputString = process.argv[2];

if (!inputString) {
  console.log("Please provide a string to check.");
} else {
  if (isPalindrome(inputString)) {
    console.log(`"${inputString}" is a palindrome.`);
  } else {
    console.log(`"${inputString}" is not a palindrome.`);
  }
}
