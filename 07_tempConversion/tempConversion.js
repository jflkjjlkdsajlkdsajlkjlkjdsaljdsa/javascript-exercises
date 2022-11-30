const convertToCelsius = function(temperature) {
  let tempC =  (temperature -32)* 5 /9; 

  return Math.round(tempC*10)/10
};

const convertToFahrenheit = function(temperature) {
  let tempF = (temperature *1.8) + 32;

  return Math.round(tempF*10)/10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
