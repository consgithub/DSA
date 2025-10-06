/* 
49. Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Creates an empty map
    const map = new Map();

    // Iterate through each string
    for (let str of strs) {
        // Creates an array of 26 0s, one slot for each letter from a-z
        const count = new Array(26).fill(0);

        // Cycles through characters in string
        for (let char of str) {
            /* The charCodeAt method reads/gets the Unicode/ASCII value of a character.
            The (0) means to read index 0 of the character, in this case this is always just the letter (character)
            that is currently being iterated on as it's a singular character.
            a is 97, b is 98, etc.
            So 'a'.charCodeAt(0) get 97.
             */
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = count.join(',');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};