/**
 * Assignment -1
 */



/*let numbers[65,43,98,43,23,76,32,54,23,43]
problem statements
-------------------
1. Sort given array 
    a->  A-Z
    b-> Z-A
2. find and display duplicate numbers
3. replace 76 value with 175 (update)
4. add new number into above given array (make sure new number should be unique)
5. remove all duplecates
6. remove all duplecates and copy non duplicate array into new array
7. update all the elements of given array by multiplying 10
8. Reverse given array as mutable
9. Reverse givem array as immutable
10. find duplicates in given array in dislay them like followig
    43 is repeated 3 times
    23 is repeated 2 times 

//---------------------------------------------------------------------------

praveen.somireddy@cognizant.com
*/
let numbers = [65, 43, 98, 43, 23, 76, 32, 54, 23, 43];
//Ascending order 
const getAscending = (arr) => {
    let ascFunction = (numOne, numTwo) => { return numOne - numTwo };
    return arr.slice().sort(ascFunction);
}

//Descending order
const getDescending = (arr) => {
    let descFunction = (numOne, numTwo) => { return numTwo - numOne };
    return arr.slice().sort(descFunction);
}

//Find Duplicates
const getDuplicates = (arr) => {
    let result = [];
    arr.forEach((element, index) => {
        let i = arr.indexOf(element, index + 1);
        if (i > -1) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });
    return result;
}


//update element
const updateElement = (arr, oldValue, newValue) => {
    let clone_arr = arr.slice();
    let results = [];
    for (let i = 0; i < clone_arr.length; i++) {
        if (clone_arr[i] === oldValue) {
            results.push(clone_arr[i] = newValue);
        } else {
            results.push(clone_arr[i]);
        }
    }
    return results;
}



//Add new element and it should be unique
const addUniqueElement = (arr, newValue) => {
    let clone_arr = arr.slice();
    let isUniqueElement = true;
    for (let i = 0; i < clone_arr.length; i++) {
        if (clone_arr[i] === newValue) {
            isUniqueElement = false;
        }
    }
    if (isUniqueElement) {
        clone_arr.push(newValue);
    }
    return clone_arr;
}


//Remove Duplicates and copy non duplicates into new array
const getNonDuplicates = (arr) => {
    let result = [];
    arr.forEach((element, index) => {
        let i = arr.indexOf(element, index + 1);
        if (i === -1) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });
    return result;
}

//update all the elements of given array by multiplying 10
const multiplayElements = (arr) => {
    let result = [];
    arr.forEach((element, index) => {
        result.push(element * 10);
    });
    return result;
}



//Reverse given array as immutable
const reverseImmutable = (arr) => {
    return arr.slice().reverse();
}

//Reverse given array as mutable
const reverseMutable = (arr) => {
    return arr.reverse();
}


/**
 * 10. find duplicates in given array in dislay them like followig
    43 is repeated 3 times
    23 is repeated 2 times
 * @param {*} arr 
 */
const getDuplicatesWithRepeatedCount = (arr) => {
    console.log(`The get duplicates with repeated count element in ${numbers}`);
    let result = [];
    arr.forEach(function (element) {
        result[element] = (result[element] || 0) + 1;
    });
    for (let element in result) {
        if (result[element] > 1) {
            console.log(element + ' = ' + result[element] + " times repeated");
        }
    }
    //return result;
}


console.log(`The ascending in ${numbers} are ${getAscending(numbers)}`);
console.log(`The descending in ${numbers} are ${getDescending(numbers)}`);
console.log(`The duplicates in ${numbers} are ${getDuplicates(numbers)}`);
console.log(`The update element in ${numbers} are ${updateElement(numbers, 76, 175)}`);
console.log(`The add new element in ${numbers} are ${addUniqueElement(numbers, 200)}`);
console.log(`The create  new array for non duplicate element in ${numbers} are ${getNonDuplicates(numbers)}`);
console.log(`The multiplying element in ${numbers} are ${multiplayElements(numbers)}`);
console.log(`The reverse element immutable way in ${numbers} are ${reverseImmutable(numbers)}`);
console.log(`The reverse element mutable way in ${numbers} are ${reverseMutable(numbers)}`);
getDuplicatesWithRepeatedCount(numbers);
