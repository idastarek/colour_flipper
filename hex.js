// hex.html logic

const btnHex = document.getElementById("click-me-btn-hex");

btnHex.addEventListener("click", ()=> {
    const randomDigitOrLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let randomHexColor = "#";
    for (let i=0; i< 6; i++) {
        const randomValue = randomDigitOrLetter[Math.floor(Math.random()*randomDigitOrLetter.length)];
        randomHexColor += randomValue;
    }
    console.log(`Generated hex color: ${randomHexColor}`);
    document.querySelector(".current-color").innerHTML = randomHexColor;
    document.querySelector("main").style.backgroundColor = randomHexColor;
});
