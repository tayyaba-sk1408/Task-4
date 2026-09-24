const temperatureInput = document.getElementById("temperature");
const unitInput = document.getElementById("unit");

temperatureInput.addEventListener("input", convertTemperature);
unitInput.addEventListener("change", convertTemperature);

function convertTemperature() {
    const value = parseFloat(temperatureInput.value);
    const unit = unitInput.value;
    const error = document.getElementById("error");

    if (isNaN(value)) {
        document.getElementById("celsius").textContent = "Celsius: -";
        document.getElementById("fahrenheit").textContent = "Fahrenheit: -";
        document.getElementById("kelvin").textContent = "Kelvin: -";
        error.textContent = "";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {
        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    } else {
        if (value < 0) {
            error.textContent = "Kelvin cannot be below 0.";
            return;
        }

        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    if (celsius < -273.15 || kelvin < 0) {
        error.textContent = "Invalid temperature value.";
        return;
    }

    error.textContent = "";

    document.getElementById("celsius").textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}