//Variables
const button = document.getElementById("button");
const text = document.getElementById("advice_text");
const url = "https://api.adviceslip.com/advice/";
const id = document.getElementById("advice_id");

//Functions
function getRandomInt(max) {
    const num = Math.floor(Math.random() * max);
    if (num == 0) return 1;
    else return num;
}

//Event Listeners
button.addEventListener("click", () => {
    var num = getRandomInt(225);
    fetch(`${url}${num}`)
        .then((res) => res.json())
        .then((data) => {
            text.innerHTML = `"${data.slip.advice}"`;
            id.innerHTML = `ADVICE #${num}`;
        });
});
