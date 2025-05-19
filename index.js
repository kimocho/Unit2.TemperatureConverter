function convertToCelsius(tempF) {
  return (tempF - 32) * 5 / 9;
}

function describeTemperature(tempF) {
  const tempC = convertToCelsius(tempF);
  if (tempC < 0) return `The temperature in Celsius is ${tempC}. It is very cold!`;
  else if (tempC < 20) return `The temperature in Celsius is ${tempC}. It is cold!`;
  else if (tempC < 30) return `The temperature in Celsius is ${tempC}. It is warm!`;
  else if (tempC < 40) return `The temperature in Celsius is ${tempC}. It is hot!`;
  else return `The temperature in Celsius is ${tempC}. It is very hot!`;
}

let userInput = prompt('Enter temperature in Fahrenheit');
alert(describeTemperature(userInput));