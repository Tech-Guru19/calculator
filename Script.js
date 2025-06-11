// console.log(showAnswer.innerHTML);

function testingTesting() {
  console.log(showAnswer);
}

testingTesting(); // calling a function

function divide() {
  var firstNumber = num1.value;
  var secondNumber = num2.value;
  var quotient = firstNumber / secondNumber;
  var answer = "The answer is " + quotient;
  console.log(answer);
  showAnswer.innerHTML = answer;
}

function addition() {
  var firstNumber = num1.value;
  var secondNumber = num2.value;
  var sum = parseInt(firstNumber) + parseInt(secondNumber);
  var answer = "The answer is " + sum;
  console.log(answer);
  showAnswer.innerHTML = answer;
}

function Subtract() {
  var firstNumber = num1.value;
  var secondNumber = num2.value;
  var subtract = firstNumber - secondNumber;
  var answer = "The answer is " + subtract;
  console.log(answer);
  showAnswer.innerHTML = answer;
}

function multiply() {
  var firstNumber = num1.value;
  var secondNumber = num2.value;
  var product = firstNumber * secondNumber;
  var answer = "The answer is " + product;
  console.log(answer);
  showAnswer.innerHTML = answer;
}


