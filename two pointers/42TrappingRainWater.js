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
                /* Set leftMax as the height at the left pointer (if the height at the left pointer was greater than
                or equal to leftMax). */
                leftMax = height[left];
                /* If the height at the left pointer is less than leftMax then calculate the waterTrapped.
                The water trapped is cleverly calculated by ignoring what's on the right and just using the fact
                that if the leftMax is to the left of the height (leftMax is truly only a value not a position, 
                but for the sake of explanation) at the left pointer then there must be some water trapped at 
                the point of the left pointer, no matter what is to the right, whether there is more water 
                trapped there or a high wall. We're only calculating the amount of water trapped at that 
                value of height (at that one number in the array). */
            } else {
                waterTrapped += leftMax - height[left];
            }
            // Move the left pointer to the right to the next number
            left++;
            // If the height at the left pointer isn't less than the height at the right pointer
        } else {
            // If the height at the right pointer is greater than or equal to rightMax
            if (height[right] >= rightMax) {
                /* Set rightMax as the height at the right pointer (if the height at the right pointer was greater 
                than or equal to rightMax). */
                rightMax = height[right];
                /* If the height at the right pointer is less than rightMax then calculate the waterTrapped.
                The water trapped is cleverly calculated by ignoring what's on the left and just using the fact
                that if the rightMax is to the right of the height (rightMax is truly only a value not a position, 
                but for the sake of explanation) at the right pointer then there must be some water trapped at 
                the point of the right pointer, no matter what is to the left, whether there is more water trapped 
                there or a high wall. We're only calculating the amount of water trapped at that value of 
                height (at that one number in the array). */
            } else {
                waterTrapped += rightMax - height[right];
            }
            // Move the right pointer to the left to the next number
            right--;
        }
    }
    // Return the cumulative value of waterTrapped
    return waterTrapped;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height == null || height.length === 0) return 0;

    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
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