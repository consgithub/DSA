/*
42. Trapping Rain Water
Hard

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // If the height is null, undefined, or the length of the array is 0, then return 0.
    if (height == null || height.length === 0) return 0;
    /* Left is the left pointer, right is the right pointer, leftMax is the highest point we've seen from the
    start of the array up to and including the left pointer, rightMax is the highest point we've seen from the
    end of the array up to and including the right pointer, and waterTrapped is the amount of squares with 
    water trapped. */
    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, waterTrapped = 0;

    // While the left pointer is to the left of the right pointer.
    while (left < right) {
        // If the height at the left pointer is less than the height at the right pointer.
        if (height[left] < height[right]) {
            // If the height at the left pointer is greater than or equal to leftMax
            if (height[left] >= leftMax) {
                // Set leftMax as
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
            // If the height at the left pointer isn't less than the height at the right pointer
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }
    return waterTrapped;
};