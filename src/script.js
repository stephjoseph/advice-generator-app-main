const adviceButton = document.querySelector("#advice-button");
const adviceID = document.querySelector("#adviceID");
const advice = document.querySelector("#advice");

adviceButton.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.innerHTML = data.slip.id;
      advice.innerHTML = `“${data.slip.advice}”`;
    });
}
