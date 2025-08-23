/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    /* If there's only one row (so whole string can remain in order on the one row) or if the length of the string
    is less than or equal to the number of rows (so whole string can fit on rows without having to go up 
    right diagonally) then return string in its original form */
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let result = '';

    /* One cycle is 2 * (numRows - 1) which we use as "2 * numsRows - 2" (multiplied out brackets) in the code. 
    To get (numRows - 1): For example if there are 3 rows then you have to go down 2 places to get to the 
    bottom (so we use the equation numRows - 1 as 3 - 1 = 2 in this example), and then you have 
    to go up 2 places to get back to the top (so again we use the equation numRows - 1 as 3 - 1 = 2 in this 
    example). */
    let cycleLen = 2 * numRows - 2;

    // Iterate through each row
    for (let i = 0; i < numRows; i++) {
        /* Iterate through positions to place letters. E.g. If there are 3 rows: For row 0 then the placements
        will occur at index 0, and then index 4, 8, etc as cycleLen would be 4 in this example (2 * 3 - 2 = 4). 
        For row 1 then the placements will occur at index 1, 5, 9, etc as the result is [j + i], i being 1 for
        row 1. This process skips over the diagonals, the 'if' code below covers the diagonals. */
        for (let j = 0; j + i < s.length; j += cycleLen) {
            // Add the character corresponding to the current row and cycle
            result += s[j + i];

            /* For diagonal placements. i !== 0 avoids the top row as there won't be diagonals. i !== numRows - 1
            avoids the bottom row as there won't be diagonals. j + cycleLen - i < s.length ensures we don't
            access beyond the string. */
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length) {
                /* Add the character corresponding to the current row and cycle. E.g. with 3 rows. Position 0 (top
                left), position 1 (under position 0), position 2 (under position 1), position 4 (two places to the
                right of position 0 and the start of the next cycle) would've all been covered by the earlier
                code, however position 3 (the diagonal that "connects" position 2 and 4 wouldn't have been,
                so this adds that. For this example, for the first diagonal: j + cycleLen - i = 0 + 4 - 1 
                = 3 which means it is placed at position 3. j iterates across cycles so it will be 4
                for the next diagonal, and i will remain the same as it will be the same row. */
                result += s[j + cycleLen - i];
            }
        }
    }
    return result;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let result = '';

    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < s.length; j += cycleLen) {
            result += s[j + i];

            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length) {
                result += s[j + cycleLen - i];
            }
        }
    }
    return result;
};