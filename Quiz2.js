function summaryTableStore(transactions) {
    if(1 > transactions.length || transactions.length > (5 * Math.pow(10, 4))) {
        return "Invalid transactions array range of 1-100.";
    }

    let storeSet = new Set();
    let productSet = new Set();
    let storeProductMap = {};
    
    for(let transaction of transactions) {
        let [customerName, storeLocation, productItem] = transaction;

        // Check Invalid customer name, product item and store location
        if(customerName.length < 1 || customerName.length > 20 || !customerName.match(/^[a-zA-Z\s]+$/)) {
            return "Invalid customer name format.";
        }
        if(productItem.length < 1 || productItem.length > 20 || !productItem.match(/^[a-zA-Z\s]+$/)) {
            return "Invalid product item format.";
        }
        let storeLocationInt = parseInt(storeLocation);
        if(isNaN(storeLocationInt) || storeLocationInt < 1 || storeLocationInt > 500) {
            return "Invalid store location number range 1 - 500.";
        }

        storeSet.add(storeLocation);
        productSet.add(productItem);
        
        if(!storeProductMap[storeLocation]) {
            storeProductMap[storeLocation] = {};
        }
        
        storeProductMap[storeLocation][productItem] = (storeProductMap[storeLocation][productItem] || 0) + 1;
    }
    
    let stores = Array.from(storeSet).sort((a, b) => parseInt(a) - parseInt(b));
    let products = Array.from(productSet).sort();
    let table = [];
    
    let headerRow = ["Table", ...products];
    table.push(headerRow);
    
    for(let storeLocation of stores) {
        let rowData = [storeLocation];
        
        for(let product of products) {
            let count = storeProductMap[storeLocation][product] || 0;
            rowData.push(count.toString());
        }
        
        table.push(rowData);
    }
    
    let summaryTable = "";
    for(let row of table) {
       summaryTable += row.join(',')+"\n";
    }
    return summaryTable;
}

function inputTransactions() {
    const prompt = require('prompt-sync')();
    let arrayTreasure = prompt("Input:");
    return JSON.parse(arrayTreasure);
}

// Data For Test
// [["Pitsit","3","Donuts"],["Montakit","10","Art book "],["Pitsit","3","Glasses"],["Buncha","5","Helicopter Model"],["Buncha","5","Donuts"],["Ratana","3","Donuts"]]
// let transactions = [
//     ["Pitsit","3","Donuts"],
//     ["Montakit","10","Art book "],
//     ["Pitsit","3","Glasses"],
//     ["Buncha","5","Helicopter Model"],
//     ["Buncha","5","Donuts"],
//     ["Ratana","3","Donuts"],
//     ["Ratana","3","Donuts"]
//     ];
// console.log("Output:",summaryTableStore(transactions));

console.log("Output:",summaryTableStore(inputTransactions()));
