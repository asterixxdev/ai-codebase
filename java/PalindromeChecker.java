// java/PalindromeChecker.java

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same backward as forward.
 *
 * This script is designed to be run from the command line.
 * It takes a single string argument and prints whether it's a palindrome or not.
 *
 * Example usage:
 * java java/PalindromeChecker.java "A man, a plan, a canal: Panama"
 */
public class PalindromeChecker {

    // Function to check if a string is a palindrome
    public static boolean isPalindrome(String str) {
        // Sanitize the string: remove non-alphanumeric characters and convert to lowercase
        String sanitizedStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        // Compare the original sanitized string with its reversed version
        String reversedStr = new StringBuilder(sanitizedStr).reverse().toString();
        return sanitizedStr.equals(reversedStr);
    }

    public static void main(String[] args) {
        // Check if an argument was provided
        if (args.length != 1) {
            System.out.println("Usage: java PalindromeChecker <string>");
            return;
        }

        String inputString = args[0];

        // Check if the input is a palindrome and print the result
        if (isPalindrome(inputString)) {
            System.out.println("\"" + inputString + "\" is a palindrome.");
        } else {
            System.out.println("\"" + inputString + "\" is not a palindrome.");
        }
    }
}
