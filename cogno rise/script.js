function liveScreen(value) {
    const result = document.getElementById('result');
    if (result.value === "0" && value !== ".") {
        result.value = value;  // Replace the initial zero with the first entered number
    } else {
        result.value += value;  // Append the entered value
    }
}

function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);  // Evaluate the expression
    } catch (error) {
        alert('Invalid Expression');
    }
}

function clearScreen() {
    document.getElementById('result').value = "0";  // Clear the screen and reset to 0
}

function changeTheme() {
    const themeButton = document.querySelector('.theme-button');
    document.body.classList.toggle('dark-theme');
    themeButton.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🔄';
}
