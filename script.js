let currentTheme = 1;

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value.replace('^', '**'));
    } catch {
        alert('Invalid Expression');
    }
}

function calculateSquare() {
    const display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function changeTheme(theme) {
    const calculator = document.getElementById('calculator-container');
    const display = document.getElementById('display');
    document.body.className = `theme-${theme}`;
    calculator.className = `calculator-container theme-${theme}`;
    currentTheme = theme;
}
