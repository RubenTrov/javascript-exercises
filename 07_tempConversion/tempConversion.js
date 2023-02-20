/**
 * Converts temperature to celsius
 * 
 * @param {Number} temperature 
 * @returns {Number} temperature 
 */
const convertToCelsius = function(temperature) {
  return Math.round(((temperature - 32) * 5/9) * 10) / 10
};

/**
 * Converts temperature to farenheit
 * @param {Number} temperature 
 * @returns {Number} temperature
 */
const convertToFahrenheit = function(temperature) {
  return Math.round((temperature * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
