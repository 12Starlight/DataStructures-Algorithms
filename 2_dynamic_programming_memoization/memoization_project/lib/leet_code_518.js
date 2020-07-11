// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const change = (amount, coins, memo = {}) => {
  // remember coins also gets reduced, so it needs to be included in the key
  let key = amount + '-' + coins; 
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let currentCoin = coins[coins.length - 1]; // could start at beginning

  let total = 0;
  // qty * currentCoin <= amount makes sure not to be negative
  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    // coins.slice(0, -1) reduces the coins array by 1 length
    total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
  }

  memo[key] = total;
  return memo[key];
};


// module.exports {
//   change
// }