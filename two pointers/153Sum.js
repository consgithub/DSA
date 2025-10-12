/* 
15. 3Sum
Medium

Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Empty result array
    let result = [];
    // n = length of array
    let n = nums.length;

    // Order numbers from smallest to biggest
    nums.sort((a, b) => a - b)

    /* Iterate through but only until the number being iterated on is still less than n - 2 as this allows for a 
    left and right pointer to fit within the set of numbers */
    for (let i = 0; i < n - 2; i++) {
        /* If the number being iterated on is beyond the first term and equals the value of the term before
        then skip past it as it's a duplicate value */
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        /* Let the left pointer initially be one place further in the sequence than the term being iterated on, and
        let the right pointer initially be at the end of the sequence */
        let left = i + 1;
        let right = n - 1;

        // While the left pointer is to the left of the right pointer
        while (left < right) {
            /* Let sum be the sum of the values of the term being iterated on, the value of the term being pointed
            to by the left PointerEvent, and the value of the term being pointed to by the right pointer */
            let sum = nums[i] + nums[left] + nums[right];

            // If sum equals 0, which is what is desired, then push the 3 values that add to 0 to the array
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                /* While the left pointer is to the left of the right pointer and the next number in the sequence
                is the same as the one being iterated on, move the left pointer to the right */
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right --;
            }
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
};