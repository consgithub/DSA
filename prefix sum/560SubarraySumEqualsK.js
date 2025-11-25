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
    // For this HashMap, key = prefix sum value, value = frequency of that prefix sum
    const prefixSumCount = new Map();
    /* Initialise with prefix sum of 0 appearing once, this handles cases where a subarray starting from 0 sums 
    to k, e.g. if nums = [3, 2] and k = 5, when currentSum = 5, we need neededSum = 0 to exist because:

    Without prefixSumCount.set(0, 1):
    Iteration 1: num = 3
    currentSum = 3
    neededSum = 3 - 5 = -2
    prefixSumCount doesn't have -2
    count = 0
    prefixSumCount = {3: 1}

    Iteration 2: num = 2
    currentSum = 5
    neededSum = 5 - 5 = 0
    prefixSumCount doesn't have 0  ❌ PROBLEM!
    count = 0  ❌ WRONG! Should be 1 because [3,2] sums to 5 
    

    Initial state: prefixSumCount = {0: 1}:
    Iteration 1: num = 3
    currentSum = 3
    neededSum = 3 - 5 = -2
    prefixSumCount doesn't have -2
    count = 0
    prefixSumCount = {0: 1, 3: 1}

    Iteration 2: num = 2
    currentSum = 5
    neededSum = 5 - 5 = 0
    prefixSumCount HAS 0 (frequency = 1) ✓
    count = 1  ✓ CORRECT! Found subarray [3,2]
    prefixSumCount = {0: 1, 3: 1, 5: 1}
    */
    prefixSumCount.set(0, 1);

    // Iterate through each element in the array
    for (let num of nums) {
        // Add current element to running sum 
        currentSum += num;

        /* Calculate (using the current currentSum value (which is a result of iterating on the current element)),
        what prefix sum we need to have seen before, this is neededSum. If we previously had a prefix sum
        of neededSum then the subarray between that point and currentSum would equal k.
        (currentSum - neededSum = k, so neededSum = currentSum - k) */
        let neededSum =  currentSum - k;

        /* Now we check if we have encountered the needed prefix sum before. If yes, it means there exists
        subarray(s) ending at the current index that sum to k. Each occurrence of the neededSum value
        represents a different starting point for a valid array.
        An example of there being multiple subarrays that end at the same element:
        nums = [1, 0, 1, 0, 1], k = 1 
        Valid subarrays:
        index 0: 1 = 1
        index 1: 1 + 0 = 1
        index 2: 0 + 1 = 1, AND 1 = 1
        index 3: 0 + 1 + 0 = 1, AND 1 + 0 = 1
        index 4: 0 + 1 = 1, AND 1 = 1 */
        if (prefixSumCount.has(neededSum)) {
            // Add the frequency of neededSum to count. This adds all subarrays that end at current position
            count += prefixSumCount.get(neededSum);
        }

        /* Update the frequency of the current prefix sum in the hash map. When we search for neededSum in 
        the map in the earlier code (if (prefixSumCount.has(neededSum)) {) we're looking for values that 
        were originally stored because they were the currentSum at the time. */
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    }

    // Return total count of subarrays found
    return count;
};

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

        let neededSum = currentSum - k;

        if (prefixSumCount.has(neededSum)) {
            count += prefixSumCount.get(neededSum);
        }

        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    }
    
    return count;
};