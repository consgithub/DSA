/*
438. Find All Anagrams in a String
Medium

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // Create result array
    const result = [];
    if (s.length < p.length) return result;

    // Create frequency arrays for p and s
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    /* Count the frequency that each character appears in p and s (not the whole of s, just p.length of s 
    (first window of s)) */
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }

    // Loop through all valid window positions in s
    for (let i = 0; i <= s.length - p.length; i++) {
        // If the arrays have the same frequency of the same characters then push the current index to the result.
        if (arraysEqual(pCount, sCount)) result.push(i);

        // Check if there's still space in the array to move the slider to the right one place
        if (i + p.length < s.length) {
            // Remove the character at the start of the slider before the slider moves
            sCount[s.charCodeAt(i) - 97]--;
            /* Add the first character after the slider, this marks the movement of the slider one place. 
            i + p.length is the current index plus whatever the length of p is, this will always be the first
            character after the slider. */
            sCount[s.charCodeAt(i + p.length) - 97]++;
        }
    }
    // Return the result
    return result;

    // Function to check if the arrays are equal
    function arraysEqual(a, b) {
        for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
        return true;
    }
};