/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order 
of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    // Two-pointer approach //
    let left = 0;
    let right = 0;

    // While the right pointer is within the array //
    while(right < nums.length) {
        // If the number the right pointer is pointing to is not 0 //
        if(nums[right] !== 0) {
            /* Switch the number that the right pointer is pointing at (non-zero) with the number the left pointer
            is pointing at */
            [nums[left], nums[right]] = [nums[right], nums[left]];
            // Push left pointer one place along //
            left++;
        }
        // Push right pointer one place along //
        right++;
    }
};

/* Example: 
Array = [0 3 0 2 12]
Left pointer = 0th position (0)
Right pointer = 0th position (0)
Right pointer is pointing to a zero so no swap

Right pointer moves along one place

Array = [0 3 0 2 12]
Left pointer = 0th position (0)
Right pointer = 1st position (3)
Right pointer is pointing to a non-zero, so number being pointed at by right arrow swaps with number being pointed
at by left arrow
Array = [3 0 0 2 12]

Left pointer moves along one place
Right pointer moves along one place

Array = [3 0 0 2 12]
Left pointer = 1st position (0)
Right pointer = 2nd position (0)
Right pointer is pointing to a zero so no swap

Right pointer moves along one place

Array = [3 0 0 2 12]
Left pointer = 1st position (0)
Right pointer = 3rd position (2)
Right pointer is pointing to a non-zero, so number being pointed at by right arrow swaps with number being pointed
at by left arrow
Array = [3 2 0 0 12]

Left pointer moves along one place
Right pointer moves along one place

Array = [3 2 0 0 12]
Left pointer = 2nd position (0)
Right pointer = 4th position (12)
Right pointer is pointing to a non-zero, so number being pointed at by right arrow swaps with number being pointed
at by left arrow
Array = [3 2 12 0 0]
*/

var moveZeroes = function(nums) {

    let left = 0;
    let right = 0;

    while(right < nums.length) {
        if(nums[right] !==0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
}