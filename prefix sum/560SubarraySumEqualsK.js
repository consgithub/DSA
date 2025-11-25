/*
560. Subarray Sum Equals K
Medium

Hint
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    const prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    for (let num of nums) {
        currentSum += num;

        let neededSum =  currentSum - k;

        if (prefixSumCount.has(neededSum)) {
            count += prefixSumCount.get(neededSum);
        }

        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    }
    
    return count;
};