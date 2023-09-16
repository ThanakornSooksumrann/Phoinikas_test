function huntMaxTreasure(treasure) {
    const n = treasure.length;
    if (n < 1 || n > 100) {
        return "Array range of 1-100.";
    }
    
    for (var t of treasure) {
        if (t < 0 || t > 400) {
            return "Treasure value in array range of 0-400.";
        }
    }
    
    const dp = new Array(n).fill(0);
    dp[0] = treasure[0];
    
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1], (i >= 2 ? dp[i-2] : 0) + treasure[i]);
    }
    
    return dp[n-1];
}

console.log(huntMaxTreasure([3, 8, 10, 0, 100, 4, 2])); // output 115
console.log(huntMaxTreasure([8, 1, 9, 0, 10, 0, 20, 0, 1, 100])); // output 147
