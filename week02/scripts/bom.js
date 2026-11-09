const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "Remove");
        deleteButton.setAttribute("id", "close-button");

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus();
    } else {
        // console.log("You cannot enter an empty chapter.");
        input.focus();
    }
});

// It would be AMAZING to allow new entries through pressing the "Enter" key for heavy keyboard users like me. lol
// ^^^ Maybe a loop to check what the string result is? There may be a more efficient way.