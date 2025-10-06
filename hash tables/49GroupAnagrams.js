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
            So 'a'.charCodeAt(0) gets 97, 'b'.charCodeAt(0) gets 98 
            'hello'.charCodeAt(0) gets 104 (for h), 'hello'.charCodeAt(4) gets 111 (for o)
            
            We use "- 'a'.charCodeAt(0)" to start from 0 instead of 97 by minusing 97 which is obtained
            by doing charCodeAt on "a".
            We increment using ++ to add 1 to whatever value the index is at 
            
            Example: 
            */
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        /* Convert the array to a string, this is the key that will be compared with other keys to see if the two
        words are anagrams */
        const key = count.join(',');

        // If a key hasn't been seen before then create a new empty array for it
        if (!map.has(key)) {
            map.set(key, []);
        }

        // map.get(key) retrieves the value stored at the key, and .push(str) adds an item to the end of the array. 
        map.get(key).push(str);
    }

    /* Extract the grouped arrays from the map. map.values gets all the values from the map, and Array.from
    puts them into an array */
    return Array.from(map.values());
};

/* 
EXAMPLE WALKTHROUGH with ["eat", "tea", "bat"]:

Processing "eat":
- count array: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
                a       e                               t
- key: "1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0"
- map: { "1,0,0,0,1,...,1,..." => ["eat"] }

Processing "tea":
- count array: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
                a       e                               t
- key: "1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0" (SAME KEY!)
- map: { "1,0,0,0,1,...,1,..." => ["eat", "tea"] }

Processing "bat":
- count array: [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
                a b                                   t
- key: "1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0" (DIFFERENT KEY!)
- map: { 
    "1,0,0,0,1,...,1,..." => ["eat", "tea"],
    "1,1,0,0,0,...,1,..." => ["bat"]
  }

Result: [["eat", "tea"], ["bat"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map =  new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0);

        for (let char of str) {
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