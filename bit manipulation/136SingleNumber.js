/* 136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Set result as 0
    let result = 0;
    // Cycle through numbers
    for (let num of nums) {
        /* Use XOR operator. If we XOR all numbers, equal numbers will cancel each other out (result in 0).
        result ^= num means result = result ^ num.
        E.g. Input: nums = [4,1,2,1,2] (IT IS A COINCIDENCE THAT IN THIS EXAMPLE THE RESULTS SEEM TO JUST BE
        ADDING OR SUBTRACTING THE TWO NUMBERS).
        Initial: result = 0
        Step 1: 0 ^ 4 = 4
        Step 2: 4 ^ 1 = 5
        Step 3: 5 ^ 2 = 7
        Step 4: 7 ^ 1 = 6 (The 1s cancel out)
        Step 5: 6 ^ 2 = 4 (The 2s cancel out)
        Final result: 4 (The single number)
        */
        result ^= num;
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }
    return result;
};