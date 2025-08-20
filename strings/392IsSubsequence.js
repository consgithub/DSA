/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            // Iterate through s if the letters match
            sPointer++;
        }
        // Iterate through t no matter what
        tPointer++;
    }
    // Returns "true" if sPointer has made it through the full length of s
    return sPointer === s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Initial state, we haven't found anything yet
    let prevIndex = -1;
    // Iterates through s
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        /* t.indexOf(currentChar, prevIndex + 1) returns the index where it finds the currentChar starting from
        prevIndex + 1. 
        prevIndex + 1 ensures we always search after the previously found character. */
        prevIndex = t.indexOf(currentChar, prevIndex + 1);

        if (prevIndex === -1) {
            // If a character isn't found it returns false
            return false;
        }
    }
    return true;
};

/*
E.g. s = "ace", t = "aebdc"

Initial state: prevIndex = -1

currentChar = s[0] = 'a'
prevIndex = t.indexOf(currentChar, prevIndex + 1) = t.indexOf('a', 0)
Search string t = "aebdc" starting from index 0
Found 'a' at index 0
prevIndex = 0

currentChar = s[1] = 'c'
prevIndex = t.indexOf(currentChar, prevIndex + 1) = t.indexOf('c', 0 + 1)
Search string t = "aebdc" starting from index 1
Found 'c' at index 4
prevIndex = 4

currentChar = s[2] = '3'
prevIndex = t.indexOf(currentChar, prevIndex + 1) = t.indexOf('e', 4 + 1)
Search string t = "aebdc" starting from index 5
There is no index 5
Not found, so indexOf returns -1
This returns false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let prevIndex = -1;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        prevIndex = t.indexOf(currentChar, prevIndex + 1);

        if (prevIndex === -1) {
            return false;
        }
    }
    return true;
};

var isSubsequence = function(s, t) {
    let prevIndex = -1

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        prevIndex = t.indexOf(currentChar, prevIndex + 1);

        if (prevIndex === -1) {
            return false;
        }
    }
    return true;
};

var isSubsequence = function(s, t) {
    let prevIndex = -1;
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        prevIndex = t.indexOf(currentChar, prevIndex + 1);

        if (prevIndex === -1) {
            return false;
        }
    }
    return true;
};