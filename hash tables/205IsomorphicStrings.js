/*

205. Isomorphic Strings
Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Create maps
    let mapS = new Map();
    let mapT = new Map();

    // Cycle through characters
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        /* If a given character (.get) has already been seen before (.has) 
        and doesn't match what it was mapped to (charT/charS), return false */
        if ((mapS.has(charS) && mapS.get(charS) !== charT) || (mapT.has(charT) && mapT.get(charT) !== charS)) {
            return false;
        }
        // Map characters from S to T, and T to S
        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }
    return true;
};