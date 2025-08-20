/*
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the 
elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not 
count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;
    let result = new Array(length);

    // Method to decrease amount of calculations
    // Start with prefix of 1
    let prefix = 1;
    // Iterate through array
    for (let i = 0; i < length; i++) {
        // Value of term in new array becomes prefix value
        result[i] = prefix;
        /* Prefix value recalculated as prefix multiplied by value of term being pointed at in original array.
        Prefix value is saved for next round of the iteration. */
        prefix *= nums[i];
    }

    // Start with suffix of 1
    let suffix = 1;
    /* Iterate through our new result array. length - 1 to account for terms starting from 0.
    i >= 0 so iteration stops on first (0th) term. i-- because we're working backwards through the array. */ 
    for (let i = length - 1; i >= 0; i--) {
        // Value of term in new array recalculated by multiplying current value by suffix
        result[i] *= suffix;
        /* Suffix recalculated by multiplying current suffix by value of term being pointed at in original array.
        Suffix value is saved for next round of the iteration. */
        suffix *= nums[i];
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;
    let result = new Array(length);

    let prefix = 1;
    for (let i = 0; i < length; i++) {   
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
};