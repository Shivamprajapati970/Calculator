let display = document.getElementById('display');

function appendNumber(value) {
  if (display.textContent === '0') {
    display.textContent = '';
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  display.textContent = eval(display.textContent);
}

function setOperator(operator) {
  if (display.textContent !== '0') {
    display.textContent += operator;
  }
}