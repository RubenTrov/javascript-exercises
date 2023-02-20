/**
 * Removes the specified numbers from an array
 * 
 * @param {number[]} array Array of numbers 
 * @param {number[]} remove Array of numbers to be removed from the original array
 */

const removeFromArray = function(array, ...remove) {
    
    //Use a for loop to iterate through numbers on remove array and remove each of them as we go
    for (let i=0; i< remove.length; i++){
        const deleteNum = array.indexOf(remove[i])
    
        //Check the number exists in the array
        if (deleteNum > -1){
            array.splice(deleteNum, 1)
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
