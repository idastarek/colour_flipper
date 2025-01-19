// index.html logic

const colors = ["green", "blue", "pink", "rgba(123, 122, 200)", "#15025"];
const btn = document.getElementById("click-me-btn");

// listening for button clicks to change the background color and name
btn.addEventListener("click", ()=> {
    const randomColor = colors[Math.floor(Math.random()*colors.length)];  
    document.querySelector(".current-color").innerHTML = randomColor;
    document.querySelector("main").style.backgroundColor = randomColor;
})





