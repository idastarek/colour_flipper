// hex.html logic

const btnHex = document.getElementById("click-me-btn-hex");


// generate a random hex color
function generateRandomHexColor() {
    // Array of hex digits and letters for generating hex color
    const randomDigitOrLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let randomHexColor = "#";
    // loop 6 times to generate a 6-character hex color
    for (let i=0; i< 6; i++) {
        // generate a random value from the array and append it to the hex color
        const randomValue = randomDigitOrLetter[Math.floor(Math.random()*randomDigitOrLetter.length)];
        randomHexColor += randomValue;
    }
    console.log(`Generated hex color: ${randomHexColor}`);
    return randomHexColor;
}

// check if color is light or dark 
function checkColorBrightness(hexColor) {
    if (hexColor[0] === "#") {
        hexColor = hexColor.substring(1);
    }

    // extract RGB components from the hex value
    const r = parseInt(hexColor.substr(0,2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    // calculate the YIQ value
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // return "black" for dark colors and "white" for light colors
    return (yiq >= 128) ? "white" : "black";
}


// add a click event listener to the button
btnHex.addEventListener("click", ()=> {
    // generate a random hex color and update the html
    const randomHexColor = generateRandomHexColor();
    document.querySelector(".current-color").innerHTML = randomHexColor;
    document.querySelector("main").style.backgroundColor = randomHexColor;

    // check if the color is dark or light to decide the button tex color
    const darkOrLight = checkColorBrightness(randomHexColor);
    if (darkOrLight === "black") {
        btnHex.style.color = "#ffffff";
        btnHex.style.borderColor = "#ffffff"
    } else {
        btnHex.style.color = "#000000";
        btnHex.style.borderColor = "#000000";
    }
});
