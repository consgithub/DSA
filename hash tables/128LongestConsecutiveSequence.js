/*

128. Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Create a new set
    let numSet = new Set(nums);
    // Set longest streak as 0
    let longestStreak = 0;

    // Cycle through numbers in set in order
    for (let num of numSet) {
        /* If a number doesn't have a number one less than we do the process in the if loop, if the number does
        have a number one less than it then we skip it as it is not the start of a consecutive sequence. */
        if (!numSet.has(num - 1)) {
            // Set the number being iterated on as the currentNum
            let currentNum = num;
            /* Set the currentStreak as 1 as we're starting working on the first number of a potential consecutive
            sequence */
            let currentStreak = 1;

            /* If the set has a number one greater than the currentNum then do the process in the while loop, 
            this repeats until there is no longer a number one greater than the currentNum */
            while (numSet.has(currentNum + 1)) {
                // Add one to the currentNum, and then this number is checked in the while process above
                currentNum += 1;
                // Add one to the current streak
                currentStreak += 1;
            }
            // Find the greatest number between the longestStreak (set as 0 at the beginning) and the currentStreak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    // Return the longestStreak
    return longestStreak;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};