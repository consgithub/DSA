// Naive approach: Using extra space

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // length of array
    let n = nums.length;
    // new array for rotated numbers with length of original array
    let rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        /* % operator (modulo) returns remainder after division. This handles wrap-around when rotating array.
        E.g. for [1, 2, 3, 4, 5], k = 2, index 0, 1, and 2 go to index 2, 3, and 4, but index 3 and 4 go to
        index 5 and 6 (out of bounds). With modulo: index 3: (3 + 2) % 5 = index 0, index 4: (4 + 2) % 5 = index 1.
        rotated[(i + k) % n] = nums[i]; means take whatever i is in nums in the current iteration and put it into
        the rotated array at position (i + k) % n. */
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    let rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

// Cyclic Replacements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    /* If k is 7 in a array of 5 for example then unnecessary cycles would take place, 7 % 5 = 2, instead of
    cycling 7 places */
    k = k % n;
    let count = 0;

    // Cycle through the array
    for (let start = 0; count < n; start++) {
        // Current is the current term being pointed at, starts at 0th term
        let current = start;
        // prevNum starts as number at 0th term
        let prevNum = nums[start];

        do {
            // next is calculated term k places from where "current" pointer is pointing at
            let next = (current + k) % n;
            // temp is number at term calculated by "next"
            let temp = nums[next];
            // Number at term calculated by "next" replaced in array by prevNum number
            nums[next] = prevNum;
            // prevNum saved as the number calculated by "next"
            prevNum = temp;
            // Current term being pointed at becomes the term calculated by "next"
            current = next;
            // Count increased by 1
            count++;
        // Keeps the loop going until back where we started
        } while (start !== current);
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    let count = 0;

    for (let start = 0; count < n; start++) {
        let current = start;
        let prevNum = nums[start];
        
        do {
            let next = (current + k) % n;
            let temp = nums[next];
            nums[next] = prevNum;
            prevNum = temp;
            current = next;
            count++;
        } while (start !== current);
    }
};

// Reverse Approach (Most Optimal)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    
    // Helper function to reverse a portion of the array
    function reverse (start, end) {
        /* Makes loop stop when position of left arrow is no longer smaller (further left) than position 
        of right arrow */
        while (start < end) {
            // Saves left value
            let temp = nums[start];
            // Puts right value in left position
            nums[start] = nums[end];
            // Puts left value in right position
            nums[end] = temp;
            // Move inward to next pair e.g. from positions 0 and 4 to positions 1 and 3 in array of length 5
            start++;
            end++;
        }
    }

    /* E.g. [1,2,3,4,5,6,7] (n = 7) and k = 3

    reverse(0, n-1) = reverse(0, 6) 
    Iteration 1: Swap nums[0] and nums[6] 
    Result: [7, 2, 3, 4, 5, 6, 1]  (start=1, end=5) 
    Iteration 2: Swap nums[1] and nums[5]  
    Result: [7, 6, 3, 4, 5, 2, 1]  (start=2, end=4) 
    Iteration 3: Swap nums[2] and nums[4]
    Result: [7, 6, 5, 4, 3, 2, 1]  (start=3, end=3)
    Stop: start < end → 3 < 3 → FALSE
    */
    reverse(0, n - 1);
    /* reverse(0, k-1) → reverse(0, 2)
    Iteration 1: Swap nums[0] and nums[2]
    Result: [5, 6, 7, 4, 3, 2, 1]  (start=1, end=1)
    Stop: start < end → 1 < 1 → FALSE */
    reverse(0, k - 1);
    /* reverse(k, n-1) → reverse(3, 6)
    Iteration 1: Swap nums[3] and nums[6]
    Result: [5, 6, 7, 1, 3, 2, 4]  (start=4, end=5)
    Iteration 2: Swap nums[4] and nums[5]
    Result: [5, 6, 7, 1, 2, 3, 4]  (start=5, end=4)
    Stop: start < end → 5 < 4 → FALSE */
    reverse(k, n - 1);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    function reverse(start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};