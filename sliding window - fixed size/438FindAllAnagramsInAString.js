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
    const result = [];
    if (s.length < p.length) return result;

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s.length - p.length; i++) {
        if (arraysEqual(pCount, sCount)) result.push(i);

        if (i + p.length < s.length) {
            sCount[s.charCodeAt(i) - 97]--;
            sCount[s.charCodeAt(i + p.length) - 97]++;
        }
    }
    return result;

    function arraysEqual(a, b) {
        for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
        return true;
    }
};