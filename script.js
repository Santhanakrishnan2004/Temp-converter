function convert(conversionType) {
    document.getElementById("conversionType").textContent = conversionType;
    document.getElementById("converter").style.display = "block";
    document.getElementById("result").textContent = "";
}

function performConversion() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const conversionType = document.getElementById("conversionType").textContent;
    let resultText = "";

    switch (conversionType) {
        case "Celsius to Fahrenheit":
            const fahrenheit = (inputValue * 9/5) + 32;
            resultText = `${inputValue}°C is ${fahrenheit.toFixed(2)}°F`;
            break;
        case "Fahrenheit to Celsius":
            const celsius = (inputValue - 32) * 5/9;
            resultText = `${inputValue}°F is ${celsius.toFixed(2)}°C`;
            break;
        case "Fahrenheit to Kelvin":
            const kelvinFromF = (inputValue + 459.67) * 5/9;
            resultText = `${inputValue}°F is ${kelvinFromF.toFixed(2)} K`;
            break;
        case "Kelvin to Fahrenheit":
            const fahrenheitFromK = (inputValue * 9/5) - 459.67;
            resultText = `${inputValue} K is ${fahrenheitFromK.toFixed(2)}°F`;
            break;
        case "Celsius to Kelvin":
            const kelvinFromC = inputValue + 273.15;
            resultText = `${inputValue}°C is ${kelvinFromC.toFixed(2)} K`;
            break;
        case "Kelvin to Celsius":
            const celsiusFromK = inputValue - 273.15;
            resultText = `${inputValue} K is ${celsiusFromK.toFixed(2)}°C`;
            break;
        default:
            resultText = "Select a valid conversion type.";
            break;
    }

    document.getElementById("result").textContent = resultText;
}
