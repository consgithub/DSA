/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Instructions say if there is no common prefix then return an empty string
    if (!strs.length) return "";

    /* The map method creates a new array by performing a function on each element of the original array.
    In this case it's an array of the lengths of the strings in the original array.
    The ... spread operator spreads the array element as individual arguments e.g. ...[6, 4, 6] becomes 6, 4, 6
    Math.min finds the smallest number among its arguments 
    This finds the shortest length (so the maximum prefix length) */
    let minLen = Math.min(...strs.map(str => str.length));

    // Minimum prefix length
    let low = 1;
    let high = minLen;

    // Exit the loop once low value is not less than or equal to high value
    while (low <= high) {
        // Binary search works by cutting the search space in half
        let mid = Math.floor((low + high) / 2);

        // Code goes to isCommonPrefix function once "mid" has been calculated
        if (isCommonPrefix(strs, mid)) {
            // Try longer prefix if true is returned from isCommonPrefix function
            low = mid + 1;
        } else {
            // Try shorter prefix if false is returned from isCommonPrefix function
            high = mid - 1;
        }
    }
    /* Final answer, return longest common prefix using final low and high values (Math.floor((low + high) / 2) is 
    a guaranteed calculation to obtain the high number) */
    return strs[0].substring(0, Math.floor((low + high) / 2));
};

// Function uses all words in strs array, and length (calculated mid value)
function isCommonPrefix(strs, length) {
    /* Prefix = Take the first word in strs array, and use from it the letters starting from index 0 up until the
    length (mid), e.g. for flower and mid = 2, prefix = fl */
    let prefix = strs[0].substring(0, length);

    // Now check the other strings in the array (starting from index 1)
    for (let i = 1; i < strs.length; i++) {
        /* If it doesn't start with the prefix then return false. Iteration continues and new high value is
        calculated */
        if (!strs[i].startsWith(prefix)) {
            return false;
        }
    }
    // If it does start with the prefix then return true. Iteration continues and new low value is calculated.
    return true;
}