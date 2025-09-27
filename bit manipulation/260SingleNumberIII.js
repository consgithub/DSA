/*

260. Single Number III
Medium

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
Example 2:

Input: nums = [-1,0]
Output: [-1,0]
Example 3:

Input: nums = [0,1]
Output: [1,0]
 

Constraints:

2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each integer in nums will appear twice, only two integers will appear once.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for (let num of nums) {
        /* Xor all numbers, this will cancel all pairs out, but it will also xor the remaining unique numbers.
        E.g. for 1, 2, 1, 3, 2, 5. The 1s and 2s will cancel, and then 3 ^ 5 gives 6.
        3 ^ 5 = 6 working:
        3 in binary is 011
        5 in binary is 101
        XOR returns 1 if bits are different and 0 if bits are same
        So result is 110, which is 6. */
        xor ^= num;
    }

    /* This finds the rightmost set bit in xor. 
    To find the negative:
    E.g. xor = 6, -xor = -6
    Xor = 00000110 (using 8 bits for clarity)
    First flip all bits, so 11111001
    Then add 1, so 11111010
    Now use &, 00000110 & 11111010 = 00000010, so 010, which is 2. */
    let diffBit = xor & -xor;
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        /* Divide all numbers into two groups depending on whether they have the set bit
        E.g. For 1, 2, 1, 3, 2, 5 and diffBit = 2:
        1 = 001, the 2nd bit from the right is 0, so this goes into group 2
        2 = 010, the 2nd bit from the right is 1, so this goes into group 1
        1 = 001, the 2nd bit from the right is 0, so this goes into group 2
        3 = 011, the 2nd bit from the right is 1, so this goes into group 1
        2 = 010, the 2nd bit from the right is 1, so this goes into group 1
        5 = 101, the 2nd bit from the right is 0, so this goes into group 2 */
        if (num & diffBit) {
            /* Group 1 has the set bit (1 as the 2nd term from the right). 
            This group will have one pair and one unique number. */
            num1 ^= num;
        } else {
            /* Group 2 doesn't have the set bit (1 as the 2nd term from the right)
            This group will have one pair and one unique number. */
            num2 ^= num;
        }
    }
    // Return the unique number from each group
    return [num1, num2];
};