let btn = document.getElementById("btn");
let heading = document.getElementById("heading");
let box = document.getElementById("box");
let reset = document.getElementById("reset");




btn.addEventListener("click", () => {
    var randomcolr = RandomColor();
    console.log(randomcolr);
    reset.style.border = `2px solid ${randomcolr}`;
    heading.innerHTML = randomcolr;
    box.style.backgroundColor = randomcolr;
    btn.style.backgroundColor = randomcolr;
    btn.style.color = "#fff";
    btn.style.border = "none";
    box.style.border = "none";

})

function RandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `Rgb(${red},${green},${blue})`;
    return color;
}

reset.addEventListener("click", () => {
    // Reset to default values
    heading.innerHTML = "Click the button to change colors";
    box.style.backgroundColor = "";
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.style.border = "";
    reset.style.border = '';
    box.style.border = "2px solid black";

});

