let currentInput = "0";

function press(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}
