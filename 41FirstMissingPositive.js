/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (
            // We only look at positive numbers
            nums[i] > 0 &&
            /* We only look at numbers within the length of the array, if a number is present that exceeds the
            length of the array e.g. the number 5 is in the array of n = 4 then it's certain that a number
            that comes before 5 isn't present and thus whatever that number is would be 
            the first missing positive */
            nums[i] <= n &&
            /* RHS: nums[i] is the current number, e.g. nums[i] = 3
               LHS: nums[i] - 1 is where the current number should be placed, e.g. nums[i] = 3, so nums[i] - 1 = 2,
               3 should be placed at the 2nd position. (index 0 = 1, index 1 = 2, index 2 = 3, etc)
               LHS: nums[nums[i] - 1] checks what's currently at that position, e.g. nums[nums[i] - 1] would check
               what's at index 2 using the above example of 'nums[i] = 3'
               If these numbers don't match then the below swapping happens starting from "let temp"
            */
            nums[nums[i] - 1] !== nums[i]
        ) {
            // Swap to place the number in the correct position
            // Save what's at the target position
            let temp = nums[nums[i] - 1];
            // Put current number in its correct spot (target position)
            nums[nums[i] - 1] = nums[i];
            // Put displaced number in current position
            nums[i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        /* Checks to see if the number is in the right place e.g. RHS: if i = 0, i + 1 is 0 + 1 which equals 1,
        LHS: if i = 0, check nums[0] (0th term), see if this matches with value of RHS */
        if (nums[i] !== i + 1) {
            /* If values don't match then return i + 1, which is number of first missing 
            positive (index + 1 = number) */
            return i + 1;
        }
    }

    // If all values match then first missing positive must be number one higher than length of array
    return n + 1;
};