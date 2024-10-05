const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const errorMessage = document.getElementById('error-message');

function convertFromCelsius(value) {
    fahrenheitInput.value = (value * 9/5 + 32).toFixed(2);
    kelvinInput.value = (parseFloat(value) + 273.15).toFixed(2);
}

function convertFromFahrenheit(value) {
    celsiusInput.value = ((value - 32) * 5/9).toFixed(2);
    kelvinInput.value = ((parseFloat(celsiusInput.value) + 273.15)).toFixed(2);
}

function convertFromKelvin(value) {
    celsiusInput.value = (value - 273.15).toFixed(2);
    fahrenheitInput.value = ((parseFloat(celsiusInput.value) * 9/5) + 32).toFixed(2);
}

function clearInputs() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
}

function displayError(message) {
    errorMessage.textContent = message;
}

function clearError() {
    errorMessage.textContent = '';
}

celsiusInput.addEventListener('input', function () {
    clearError();
    const value = parseFloat(celsiusInput.value);
    if (isNaN(value)) {
        clearInputs();
        displayError('Por favor, introduce un valor numérico válido.');
    } else {
        convertFromCelsius(value);
    }
});

fahrenheitInput.addEventListener('input', function () {
    clearError();
    const value = parseFloat(fahrenheitInput.value);
    if (isNaN(value)) {
        clearInputs();
        displayError('Por favor, introduce un valor numérico válido.');
    } else {
        convertFromFahrenheit(value);
    }
});

kelvinInput.addEventListener('input', function () {
    clearError();
    const value = parseFloat(kelvinInput.value);
    if (isNaN(value) || value < 0) {
        clearInputs();
        displayError('El valor de Kelvin debe ser mayor o igual a 0.');
    } else {
        convertFromKelvin(value);
    }
});
