function summaryTableStore(transactions) {
    let storeSet = new Set();
    let productSet = new Set();
    let storeProductMap = {};
    
    for (let transaction of transactions) {
        let [customerName, storeLocation, productItem] = transaction;
        
        storeSet.add(storeLocation);
        productSet.add(productItem);
        
        if (!storeProductMap[storeLocation]) {
            storeProductMap[storeLocation] = {};
        }
        
        storeProductMap[storeLocation][productItem] = (storeProductMap[storeLocation][productItem] || 0) + 1;
    }
    
    let stores = Array.from(storeSet).sort((a, b) => parseInt(a) - parseInt(b));
    let products = Array.from(productSet).sort();
    let table = [];
    
    let headerRow = ["Table", ...products];
    table.push(headerRow);
    
    for (let storeLocation of stores) {
        let rowData = [storeLocation];
        
        for (let product of products) {
            let count = storeProductMap[storeLocation][product] || 0;
            rowData.push(count.toString());
        }
        
        table.push(rowData);
    }
    
    let summaryTable = "";
    for (let row of table) {
       summaryTable += row.join(',')+"\n";
    }
    return summaryTable;
}

let transactions = [
    ["Pitsit","3","Donuts"],
    ["Montakit","10","Art book "],
    ["Pitsit","3","Glasses"],
    ["Buncha","5","Helicopter Model"],
    ["Buncha","5","Donuts"],
    ["Ratana","3","Donuts"]
    ];

console.log(summaryTableStore(transactions));

