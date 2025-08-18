/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space? */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Use map for mapping an array 
    const countMap = new Map();
    // For-of loop iterates through values in array 
    for (let num of nums) {
        /* (key, value). Setting each number to have a value of how many times it appears.
        (countMap.get(num) || 0) + 1) checks if a number appears in the map, if it doesn't then it goes
        from 0 and adds 1 (|| 0) +1)), if it does then it adds 1 to the amount that the number appears. */
        countMap.set(num, (countMap.get(num) || 0) + 1);

        /* If amount of times number appears exceeds the total number of items in the array then return
        it (majority element) */
        if (countMap.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        if (countMap.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        if (countMap.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
}