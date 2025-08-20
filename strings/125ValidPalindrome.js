/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Two-pointer method
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // If it's not alphanumeric then move the left pointer one place to the right
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // If it's not alphanumeric then move the right pointer one place to the left
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // If the letters don't match then return false
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        // If the letters do match then move the pointers inward
        left++;
        right--;
    }
    // Return true if all the letters match
    return true;
};

function isAlphanumeric(char) {
    /* /[a-z0-9]/i is a regular expression (regex)
    [a-z0-9] matches any lowercase letter (a-z) or digit (0-9), 
    The i flag makes it case-insensitive, so it also matches uppercase letters,
    .test(char) returns true if the character matches the pattern, false otherwise */
    return (/[a-z0-9]/i).test(char);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        };

        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        };

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        };
        left++;
        right--;
    }
    return true;
};

function isAlphanumeric(char) {
    return (/[a-z0-9]/i).test(char);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isAlphanumeric(char) {
    return (/[a-z0-9]/i).test(char);
}