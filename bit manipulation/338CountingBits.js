/* 
338. Counting Bits
Easy
Topics
premium lock icon
Companies
Hint
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105
 

Follow up:

It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)? 
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    /* Create a new array of size 1 greater than n, so that for n = 5 for example there's enough space for a 0 
    as well as the 1, 2, 3, 4, and 5. 
    And fill this array all with 0s, which will be replaced other than the first one. */
    let res = new Array(n + 1).fill(0);
    // Cycle through array from the 2nd term as the 1st term stays as 0
    for (let i = 1; i <= n; i++) {
        /* When you use the & comparator for the value of a term and one less than this term (in binary) the 
        result in binary is the original value in binary with the rightmost 1 removed.
        E.g. for n = 4. n = 4 = 100, n - 1 = 3 = 011. 100 & 011 = 000. Rightmost 1 bit has been removed.
        Now the answer gets put into res[], for this example the binary value of 000 is just 0, 
        so we do res[0], and now what makes the algorithm so efficient is that res[0] or res[any number before the 
        number currently being cycled through] has already been calculated earlier. res[0] is slightly different
        to the others as it gets established at the start when the 0th term is filled with 0 when the new array
        is calculated.
        Then to calculate the amount of 1 bits in the original value you must add 1 as a 1 bit (the rightmost
        one) has been removed. */
        res[i] = res[i & (i - 1)] + 1;
    }
    // Return the array
    return res;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        res[i] = res[i & (i - 1)] + 1;
    }
    return res;
};