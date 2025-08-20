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

// HashMap Approach:

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

// Sorting Approach

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Sorts numbers in array from lowest to highest
    nums.sort((a, b) => a - b);
    /* If same items are grouped then majority element will always occupy the 
    middle position (Math.floor(nums.length / 2)) */
    return nums[Math.floor(nums.length / 2)];
};

// Boyer-Moore Voting Algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    // Candidate is the potential candidate for number that is the majority element
    let candidate = null;

    // For-of loop iterates through values in array
    for (let num of nums) {
        /* If the count is 0 then set the candidate as whichever number the loop is on.
        This means the first number in the array will be the first candidate. And if a candidate goes down to a 
        count of 0 then the number the loop is currently on will become the new candidate */
        if (count === 0) {
            candidate = num;
        }
        /* If the number the loop is on is the same as the current candidate then add one, if not then minus one.
        count += (num === candidate) ? 1 : -1 means if number = candidate is true then do what's before the
        colon, and if it's false then do what's after the colon, in this case adding 1 or minusing 1 to the count */
        count += (num === candidate) ? 1 : -1;
    }
    // The remaining candidate is the majority element
    return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num = candidate) ? 1 : -1;
    }
    return candidate;
};