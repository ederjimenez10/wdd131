const currentYear = document.querySelector("#current-year");

const today = new Date();
currentYear.innerHTML = `©️${today.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const windChill = document.querySelector("#wind-chill");
const temperature = 70.5;
const windSpeed = 7.8;

const calculateWindChill = function (T, V) {
    return (35.74 + 0.6215(T) - 35.75(V ** 0.16) + 0.4275(T(V ** 0.16)));
};

if (temperature <= 50 && windSpeed > 3) {
    calculateWindChill(temperature, windSpeed);
    // windChill.innerHTML = `${calculateWindChill}`;
    document.querySelector("#wind-chill").innerHTML = calculateWindChill(temperature, windSpeed);
} else {
    windChill.innerHTML = `N/A`;
}

// 21.38 °C
// 12.87 kph
