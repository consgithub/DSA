/* 191. Number of 1 Bits

Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

Constraints:

1 <= n <= 231 - 1
 

Follow up: If this function is called many times, how would you optimize it? */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        /* When you subtract 1 from a number three things happen: All bits to the right of the 
        rightmost '1' flip from 0 to 1, The rightmost '1' bit flips to 0, All bits to the left remain unchanged.
        Each time you check for n & n - 1, a 1 gets dropped.
        
        E.g. n = 11
        n = 11 is 1011 in binary.

        Iteration 1:
        n - 1 = 10
        n = 10 is 1010 in binary.        
        n & n - 1 = 1011 & 1010 = 1010 
        The rightmost 1 has been removed. 1011 -> 1010.
        n = 10, count = 1.

        Iteration 2:
        n - 1 = 9
        n = 9 is 1001 in binary.
        n & n - 1 = 1010 & 1001 = 1000
        The rightmost 1 has been removed. 1010 -> 1000.
        n = 8, count = 2.

        Iteration 3:
        n - 1 = 7
        n = 7 is 0111 in binary.
        n & n - 1 = 1000 & 0111 = 0000
        The rightmost 1 has been removed. 1000 -> 0000.
        n = 0, count = 3.

        Result: 3 set bits.
        
        */
        n = n & (n - 1);
        count++;
    }
    return count;
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

/* Brian Kernighan's algorithm is a clever bit manipulation technique that efficiently counts set bits (1s) in 
a binary number. Let me break down how it works:
The Key Insight: n & (n - 1)
The magic happens with the operation n & (n - 1), which always flips the rightmost (least significant) '1' bit 
to '0'. Here's why:
When you subtract 1 from any number:

All bits to the right of the rightmost '1' flip from 0 to 1
The rightmost '1' bit flips to 0
All bits to the left remain unchanged

Step-by-Step Example with n = 11
Let's trace through n = 11 (binary: 1011):
Initial: n = 11 = 1011, count = 0
Iteration 1:

n - 1 = 10 = 1010
n & (n-1) = 1011 & 1010 = 1010 (rightmost 1 removed)
n = 10, count = 1

Iteration 2:

n - 1 = 9 = 1001
n & (n-1) = 1010 & 1001 = 1000 (next rightmost 1 removed)
n = 8, count = 2

Iteration 3:

n - 1 = 7 = 0111
n & (n-1) = 1000 & 0111 = 0000 (last 1 removed)
n = 0, count = 3

Result: 3 set bits
Why This Works
The AND operation with (n-1) specifically targets the rightmost '1' bit:

The bits to the right of the rightmost '1' are all 0s in n, but become 1s in (n-1)
The rightmost '1' becomes 0 in (n-1)
When you AND these together, everything cancels out up to and including that rightmost '1'

Efficiency
This algorithm is optimal because:

Time complexity: O(k) where k = number of set bits (not O(32) like checking every bit)
Space complexity: O(1) - uses constant extra space
It only loops as many times as there are '1' bits, making it very efficient for numbers with few set bits

The beauty of Brian Kernighan's algorithm is that it eliminates one '1' bit per iteration, so sparse numbers 
(few 1s) are processed very quickly. */