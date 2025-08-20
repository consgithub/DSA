/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // Set the two values as as large as possible
    let first = Infinity;
    let second = Infinity;

    // Cycle through numbers
    for (let num of nums) {
        /* If the number is less than or equal to the value of first (initially infinity) then set first 
        as the number */
        if (num <= first) {
            first = num;
        /* If the number isn't less than or equal to first but it is less than or equal to the value of second
        (initially infinity) then set second as the number */
        } else if (num <= second) {
            second = num;
        /* If the number isn't less than or equal to first or second then it must be greater and so an 
        increasing triplet has been found */
        } else {
            return true;
        }
    }
    // Return false if an increasing triplet isn't found
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
};