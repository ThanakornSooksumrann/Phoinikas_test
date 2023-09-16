function checkNumberBoatsFromPeople(people, limit) {
    if (people.length < 1 || people.length > 5 * Math.pow(10, 4)) {
        return "Invalid array length";
    }
    
    for (let i = 0; i < people.length; i++) {
        if (people[i] < 1 || people[i] > limit || limit > 3 * Math.pow(10, 4)) {
            return "Invalid array values or limit";
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

console.log(checkNumberBoatsFromPeople([1, 2], 3)); // Output: 1
console.log(checkNumberBoatsFromPeople([3, 2, 2, 1], 3)); // Output: 3
console.log(checkNumberBoatsFromPeople([3, 2, 2, 1], 5)); // Output: 2
console.log(checkNumberBoatsFromPeople([3, 5, 3, 4], 5)); // Output: 4
