/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(/\s+/);

    words.reverse();

    return words.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    /* .trim() removes spaces before and after.
    .split cuts the string into an array in the pattern you specify, the regex (/\s+/) finds a sequence of 
    one or more whitespace characters. So the parts between the cuts become the array elements. */
    let words = s.trim().split(/\s+/);

    // Reverses the order of the terms in the array
    words.reverse();

    // Joins the terms in the array back into a string with a single space in between each
    return words.join(' ');
};