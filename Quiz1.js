function huntMaxTreasure(treasure) {
    let n = treasure.length;
    if (n < 1 || n > 100) {
        return "Invalid array range of 1-100.";
    }
    
    for (let t of treasure) {
        if (t < 0 || t > 400) {
            return "Invalid treasure value in array range of 0-400.";
        }
    }
    
    let arrayTmp = new Array(n).fill(0);
    arrayTmp[0] = treasure[0];

    for (let i = 1; i < n; i++) {
        arrayTmp[i] = Math.max(arrayTmp[i-1], (i >= 2 ? arrayTmp[i-2] : 0) + treasure[i]);
    }
    
    return arrayTmp[n-1];
}

function inputArrayTreasure() {
    const prompt = require('prompt-sync')();
    let arrayTreasure = prompt("Input:");
    return JSON.parse(arrayTreasure);
}

// Data For Test
// Input:[3, 8, 10, 0, 100, 4, 2] // Output 115
// Input:[8, 1, 9, 0, 10, 0, 20, 0, 1, 100] // Output 147 = 8+9+10+20+100
console.log("Output:",huntMaxTreasure(inputArrayTreasure()));
