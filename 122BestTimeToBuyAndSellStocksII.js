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