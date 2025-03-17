document.getElementById("check-btn").addEventListener("click", function () {
    const inputElement = document.getElementById("text-input");
    const resultElement = document.getElementById("result");

    let inputText = inputElement.value.trim();

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanString = (str) => {
        return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    };

    let cleanedText = cleanString(inputText);
    let reversedText = cleanedText.split("").reverse().join("");

    if (cleanedText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${inputText} is not a palindrome.`;
        resultElement.style.color = "red";
    }
});
