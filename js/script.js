document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var celsiusInput = document.getElementById("input-field").value.trim();
    
    // Pemeriksaan apakah input berisi angka termasuk minus (-)
    if (!/^(-)?(0|[1-9]\d*)(\.\d+)?$/.test(celsiusInput)) {
        document.getElementById("error-message").textContent = "Please enter a valid number for temperature in Celsius.";
        return;
    } else {
        document.getElementById("error-message").textContent = ""; // Menghapus pesan kesalahan jika input valid
    }
    
    var celsius = parseFloat(celsiusInput);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        var explanation = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F.";
        document.getElementById("conversion-explanation").textContent = explanation;
        document.getElementById("converted-temperature").textContent = "Converted Temperature: " + fahrenheit.toFixed(2) + "°F";
    }
});
