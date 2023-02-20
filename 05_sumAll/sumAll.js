const sumAll = function(num1, num2) {
    let sum = 0
    let fromN = num1
    let toN = num2
    
    if (typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR"
    }
    
    if (num1 > num2){
        fromN = num2
        toN = num1
    }

    if (num1 < 0 || num2 < 0){
        return "ERROR"
    }

    
    for (let i=fromN; i<toN+1; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
