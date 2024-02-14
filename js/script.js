document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var celsiusInput = document.getElementById("input-field").value.trim();
    
    if (!/^(-)?(\d+|\d*\.\d+)$/.test(celsiusInput)) {
        document.getElementById("error-message").textContent = "Please enter a valid number for temperature in Celsius.";
        return;
    } else {
        document.getElementById("error-message").textContent = "";
    }
    
    var celsius = parseFloat(celsiusInput);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        var explanation = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F.";
        document.getElementById("conversion-explanation").textContent = explanation;
        document.getElementById("converted-temperature").textContent = "Converted Temperature: " + fahrenheit.toFixed(2) + "°F";
    }
});

document.getElementById("converterFormF").addEventListener("submit", function(event) {
    event.preventDefault();
    var fahrenheitInput = document.getElementById("input-field-f").value.trim();
    
    if (!/^(-)?(\d+|\d*\.\d+)$/.test(fahrenheitInput)) {
        document.getElementById("error-message-f").textContent = "Please enter a valid number for temperature in Fahrenheit.";
        return;
    } else {
        document.getElementById("error-message-f").textContent = "";
    }
    
    var fahrenheit = parseFloat(fahrenheitInput);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        var explanation = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C.";
        document.getElementById("conversion-explanation-f").textContent = explanation;
        document.getElementById("converted-temperature-f").textContent = "Converted Temperature: " + celsius.toFixed(2) + "°C";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll('#nav-bar a');
    navbarLinks.forEach(function(navbarLink) {
        navbarLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    var footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(function(footerLink) {
        footerLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
