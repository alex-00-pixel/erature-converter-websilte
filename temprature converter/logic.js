document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h1").classList.add("animate");
});


function convertTemperature() {
  var inputElement = document.getElementById("enter-input");
  var outputElement = document.getElementById("show-output");

  var fromUnit = document.getElementById("from").value;
  var toUnit = document.getElementById("to").value;

  if (inputElement.value === "") {
    alert("Please enter a temperature value in input field");
    return;
  }

  var inputValue = parseFloat(inputElement.value);

  if (fromUnit === "celcious") {
    if (toUnit === "Farenhite") {
      outputElement.value = (inputValue * 9) / 5 + 32;
    } else if (toUnit === "kelvin") {
      outputElement.value = inputValue + 273.15;
    } else {
      outputElement.value = inputValue;
    }
  } else if (fromUnit === "Farenhite") {
    if (toUnit === "celcious") {
      outputElement.value = ((inputValue - 32) * 5) / 9;
    } else if (toUnit === "kelvin") {
      outputElement.value = ((inputValue - 32) * 5) / 9 + 273.15;
    } else {
      outputElement.value = inputValue;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celcious") {
      outputElement.value = inputValue - 273.15;
    } else if (toUnit === "Farenhite") {
      outputElement.value = ((inputValue - 273.15) * 9) / 5 + 32;
    } else {
      outputElement.value = inputValue;
    }
  }
}
