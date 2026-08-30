const number1Input = document.querySelector("#number1");
const number2Input = document.querySelector("#number2");
const operatorInput = document.querySelector("#operator");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }

  if (operator === "-") {
    return a - b;
  }

  if (operator === "*") {
    return a * b;
  }

  if (operator === "/") {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }

  return "Invalid operator";
}
calculateButton.addEventListener("click", function () {
  const number1 = Number(number1Input.value);
  const number2 = Number(number2Input.value);
  const operator = operatorInput.value;

  if (number1Input.value.trim() === "" || number2Input.value.trim() === "") {
    result.textContent = "Please fill in both numbers";
    return;
  }

  if (isNaN(number1) || isNaN(number2)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  const answer = calculate(number1, number2, operator);

  result.textContent = answer;
});