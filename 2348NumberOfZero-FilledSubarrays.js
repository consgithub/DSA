/*
2348. Number of Zero-Filled Subarrays

Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
Example 2:

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
Example 3:

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    // Count is the amount of zero-filled subarrays
    let count = 0;
    // currentZeros is a running count of the amount of zeros counted in a row on the current streak
    let currentZeros = 0;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If pointing at a zero then add 1 to currentZeros
        if (nums[i] === 0) {
            currentZeros++;
        }
        /* If not pointing at a zero then use k * (k + 1) / 2 to calculate the amount of zero-filled 
        subarrays (count) using the number we've calculated for currentZero */
        else {
            count += (currentZeros * (currentZeros + 1)) / 2;
            // Reset currentZeros to 0 once the previous streak of zeros has been used in the count equation
            currentZeros = 0;
        }
    }
    /* Add to the count any zero-filled subarrays (count) that weren't added in the for loop because they
    were at the end of the array and thus not accounted for in the else statement which detects a non-zero
    value */
    count += (currentZeros * (currentZeros + 1)) / 2;

    // Return the total number of zero-filled subarrays
    return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let currentZeros = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentZeros++;
        }
        else {
            count += (currentZeros * (currentZeros + 1)) / 2;
            currentZeros = 0;
        }
    }
    count += (currentZeros * (currentZeros + 1)) / 2;

    return count;
};