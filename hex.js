// hex.html logic

const btnHex = document.getElementById("click-me-btn-hex");

// Add a click event listener to the button
btnHex.addEventListener("click", ()=> {
    // Array of hex digits and letters for generating hex color
    const randomDigitOrLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let randomHexColor = "#";
    // Loop 6 times to generate a 6-character hex color
    for (let i=0; i< 6; i++) {
        // Generate a random value from the array and append it to the hex color
        const randomValue = randomDigitOrLetter[Math.floor(Math.random()*randomDigitOrLetter.length)];
        randomHexColor += randomValue;
    }
    console.log(`Generated hex color: ${randomHexColor}`);
    document.querySelector(".current-color").innerHTML = randomHexColor;
    document.querySelector("main").style.backgroundColor = randomHexColor;
});
