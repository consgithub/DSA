/*
122. Best Time to Buy and Sell Stock II

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

Constraints:

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/

// Greedy Approach

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Set maxProfit as 0 so any profit is greater than the starting value
    let maxProfit = 0;
    // Iterate through array
    for (let i = 0; i < prices.length; i++) {
        // If the price today is greater than yesterday then...
        if (prices[i] > prices[i - 1]) {
            // Add this to maxProfit
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};

// Dynamic Programming Approach - State Machine

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if (n <= 1) return 0;

    // Initialise on first day
    // Max profit if we don't have stock (can't have profit if we don't have stock)
    let dp0 = 0;
    // Max profit if we do have stock (profit is in the negative if we have bought stock)
    let dp1 = -prices[0];

    for (let i = 0; i < n; i++) {
        // Transition to the next day
        // Finding the larger number between two options
        // What's our best profit if we don't hold stock today: Keep not holding vs Sell
        let newDp0 = Math.max(dp0, dp1 + prices[i]);
        // What's our best profit if we hold stock today: Keep holding vs Buy
        let newDp1 = Math.max(dp1, dp0 - prices[i]);
        // Updates states for next iteration
        dp0 = newDp0;
        dp1 = newDp1;
    }
    // End with no stock and return maximum accumulated profit
    return dp0;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if (n <= 1) return 0;

    let dp0 = 0;
    let dp1 = -prices[0];

    for (let i = 0; i < n; i++) {
        let newDp0 = Math.max(dp0, dp1 + prices[i]);
        let newDp1 = Math.max(dp1, dp0 - prices[i]);

        dp0 = newDp0;
        dp1 = newDp1;
    }
    return dp0;
};