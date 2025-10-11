/* 
11. Container With Most Water
Medium

Hint
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of 
the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area 
of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Set the maximum area as 0
    let maxArea = 0;
    // The leftmost point of the area being calculated starts at index 0
    let left = 0;
    // The rightmost point of the area being calculated starts at the last index (the length of the array - 1)
    let right = height.length - 1;

    /* While the left pointer is less than the right pointer (while the left pointer is to the left of the right
    pointer) run the loop */
    while (left < right) {
        /* The current area is the height * width. The height will always be the shortest line as the water
        can't go any higher than this even if the other line is taller. The width is just the index number 
        (not value) of right minus left. */
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        // Recalculte the maximum area as the greater value between the previous maximum area and the current area.
        maxArea = Math.max(maxArea, currentArea);

        /* If the the height of the left pointer is less than the height of the right pointer then move the
        left pointer to the right, and if not then move the right pointer to the left. */
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    // Return the maximum area.
    return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};