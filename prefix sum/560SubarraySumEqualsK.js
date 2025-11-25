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
    // Counter for amount of subarrays that add to k
    let count = 0;
    // Prefix sum at current position
    let currentSum = 0;
    // For this HashMap, key = prefix sum value, valaue = frequency of that prefix sum
    const prefixSumCount = new Map();
    /* Initialise with prefix sum of 0 appearing once, this handles cases where a subarray starting from 0 sums to
    k, e.g. if nums = [3, 2] and k = 5, when currentSum = 5, we need neededSum = 0 to exist because:
     */
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