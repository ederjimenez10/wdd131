const currentYear = document.querySelector("#current-year");

const today = new Date();
currentYear.innerHTML = `©️${today.getFullYear()}`;


// const lastModified = document.querySelector("#lastModified"); <<< This may not be needed?
document.getElementById("lastModified").textContent = document.lastModified;