function convert() {
    // Get input values
    const temperature = parseFloat(document.getElementById("temperature").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const resultDiv = document.getElementById("result");

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid temperature."
        document.getElementById("result").style.color = "red";
        return;
    }else {
        document.getElementById("result").style.color = "green";
    }

    let convertedTemp;

    // Conversion logic
    if (from === to) {
        convertedTemp = temperature; // No conversion needed
    } else if (from === "celcius") {
        if (to === "fahrenheit") {
            convertedTemp = (temperature * 9/5) + 32;
        } else if (to === "kelvin") {
            convertedTemp = temperature + 273.15;
        }
    } else if (from === "fahrenheit") {
        if (to === "celcius") {
            convertedTemp = (temperature - 32) * 5/9;
        } else if (to === "kelvin") {
            convertedTemp = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (from === "kelvin") {
        if (to === "celcius") {
            convertedTemp = temperature - 273.15;
        } else if (to === "fahrenheit") {
            convertedTemp = (temperature - 273.15) * 9/5 + 32;
        }
    }

    // Display the result
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
}
