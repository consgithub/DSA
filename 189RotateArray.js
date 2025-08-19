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