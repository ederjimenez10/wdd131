const currentYear = document.querySelector("#current-year");

const today = new Date();
currentYear.innerHTML = `©️${today.getFullYear()}`;

const hamburgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("open");
    navigation.classList.toggle("open");
});