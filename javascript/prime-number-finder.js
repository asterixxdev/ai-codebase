// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Get the number from the command line arguments
const number = parseInt(process.argv[2]);

// Check if the number is prime and print the result
if (isNaN(number)) {
  console.log("Please provide a valid number.");
} else {
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
}
