/**
 * Returns frue if it is a leap year and false if not
 * 
 * @param {number} year 
 */
const leapYears = function(year) {
    
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return true
            } else {
                return false
            }
        }
        return true
    }
    

    return false
};

// Do not edit below this line
module.exports = leapYears;
