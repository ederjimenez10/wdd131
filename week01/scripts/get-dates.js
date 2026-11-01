const currentYear = document.querySelector("#current-year");

const today = new Date();
currentYear.innerHTML = `©️${today.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;