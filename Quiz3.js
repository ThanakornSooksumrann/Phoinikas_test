function checkNumberBoatsFromPeople(people, limit) {
    if (people.length < 1 || people.length > (5 * Math.pow(10, 4))) {
        return "Invalid array range 1 - 50,000.";
    }
    
    for (let i = 0; i < people.length; i++) {
        if (people[i] < 1 || people[i] > limit || limit < 1 || limit > (3 * Math.pow(10, 4))) {
            return "Invalid array values range 1 - limit or limit range 1 - 30,000.";
        }
    }
    
    var boats = 0;
    var peopleCopy = [...people];
    peopleCopy.sort((a, b) => a - b);

    let left = 0;
    let right = peopleCopy.length - 1;

    while (left <= right) {
        if (peopleCopy[left] + peopleCopy[right] <= limit) {
            left++;
        }
        right--;
        boats++;
    }

    return boats;
}

function inputPeopleAndLimitBoat() {
    const prompt = require('prompt-sync')();
    let valueStr = prompt('Input Ex.[n, n2, n3, ...], n :');
    let [inputArray, inputValue] = JSON.parse('[' + valueStr + ']');
    return {inputArray, inputValue};
}

// Data For test
// console.log("Output:",checkNumberBoatsFromPeople([1, 2], 3));
// console.log("Output:",checkNumberBoatsFromPeople([3, 2, 2, 1], 3));
// console.log("Output:",checkNumberBoatsFromPeople([3, 2, 2, 1], 5));
// console.log("Output:",checkNumberBoatsFromPeople([3, 5, 3, 4], 5));

let arrayPeopleAndLimitBoat = inputPeopleAndLimitBoat();
console.log("Output:",checkNumberBoatsFromPeople(arrayPeopleAndLimitBoat.inputArray, arrayPeopleAndLimitBoat.inputValue));

