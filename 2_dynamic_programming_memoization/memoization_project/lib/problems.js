// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;

    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should determine the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
const minChangeBrute = (coins, amount) => {
    // console.log(amount);
    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach((coin) => {
        if (coin <= amount) {
            numCoins.push(minChangeBrute(coins, amount - coin) +1);
        }
    });

    // console.log(numCoins);
    return Math.min(...numCoins);
}

console.log(minChangeBrute([1, 2, 5], 11));

// Explained
let ultimate = [];
const minChangeBruteExplained = (coins, amount) => {
    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach((coin) => {
        if (coin <= amount) {
            // +1 represents depth to get to 0
            numCoins.push(minChangeBruteExplained(coins, amount - coin) + 1); 
        };
    });

    let res = Math.min(...numCoins);
    console.log(`It takes ${res} coins to make ${amount} cents worth of change`);

    ultimate.push(numCoins);
    return res; 
}

console.log(minChangeBruteExplained([1, 4, 5], 8));
console.log(ultimate);

/* 
When we first invoke our top-level function, there are three possible routes to 
take. We either use a 1-cent coin, a 4-cent coin, or a 5-cent coin. We don't 
know which of these options will result in the smallest number of total coins. 
So we try them all. Let's say that minChangeBrute(coins, 7) returns 3; we add 1 
because we now know it would take 4 total coins to make 8 cents. The result of 
each recursive call is stored in 'numCoins' and we choose the option with the 
fewest total coins.

If minChangeBrute(coins, 7) returns 3, then the number 4 is being stored in 
'numCoins'. This means that the solution we found requires 4 total coins. The 
array numCoins is just an array of numbers. 

The array is unique to each function call. It does not persist between recursive 
calls. We are interested in the best solution, not the number of solutions, which 
is why we only look for the smallest number in the array. Each number represents 
one potential solution, where the number itself is the number of coins in that 
solution.

//     minChangeBrute(coins, 7) -> Coin 1 - first recursive call
//     .   minChangeBrute(coins, 6) -> not solved
//     .   .    minChangeBrute(coins, 5) -> not solved
//     .   .    .    minChangeBrute(coins, 4) -> not solved
//     .   .    .    .    minChangeBrute(coins, 3) -> not solved
//     .   .    .    .    .    minChangeBrute(coins, 2) -> not solved
//     .   .    .    .    .        minChangeBrute(coins, 1) -> solved - numCoins = [1]
//     .   .    .    .    .            minChangeBrute(coins, 0) -> base case 
//     .   .    .    .    minChangeBrute(coins, 0) 
//     .   .    .    minChangeBrute(coins, 1)
//     .   .    .    .    minChangeBrute(coins, 0)
//     .   .    .    minChangeBrute(coins, 0)
//     .   .    minChangeBrute(coins, 2)
//     .   .    .    minChangeBrute(coins, 1)
//     .   .    .        minChangeBrute(coins, 0)
//     .   .    minChangeBrute(coins,1)
//     .   .        minChangeBrute(coins, 0)
//     .   minChangeBrute(coins, 3)
//     .   .    minChangeBrute(coins, 2)
//     .   .        minChangeBrute(coins, 1)
//     .   .            minChangeBrute(coins, 0)
//     .   minChangeBrute(coins, 2)
//     .       minChangeBrute(coins, 1)
//     .           minChangeBrute(coins, 0)
//     minChangeBrute(coins, 4)
//     .   minChangeBrute(coins, 3)
//     .       minChangeBrute(coins, 2)
//     .           minChangeBrute(coins, 1)
//     .               minChangeBrute(coins, 0)
//     .   minChangeBrute(coins, 0)
//     minChangeBrute(coins, 3)
//        minChangeBrute(coins, 2)
//          minChangeBrute(coins, 1)
//              minChangeBrute(coins, 0)

Each recursive call will calculate the minimum # of coins to make the specified 
amount of change. Technically, each function call finds every single combination 
of coins that equals the specified total, and then returns the minimum 
(see line 20)

There are only seven unique subproblems, though - 7, 6, 5, 4, 3, 2, 1 - which is 
where memoization can be useful

*/


// Memoized
const minChange = (coins, amount, memo = {}) => {
    if (amount === 0) return 0;
    if (amount in memo) return memo[amount];

    let numCoins = [];
    coins.forEach(coin => {
        if (coin <= amount) {
            numCoins.push(minChange(coins, amount - coin, memo) + 1 );
        }
    })

    memo[amount] = Math.min(...numCoins);
    return memo[amount];
}


module.exports = {
    lucasNumberMemo,     
    minChangeBrute,
    minChangeBruteExplained,
    minChange
}; 