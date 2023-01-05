/* eslint-disable */
import "./style.css";

window.onload = function() {
  let cardid = document.querySelector(".value");
  let suits = document.querySelectorAll(".suit");
  let valuearray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suitarray = ["♦", "♥", "♠", "♣"];
  let randomsuit = suitarray[Math.floor(Math.random() * suitarray.length)];
  suits.forEach(element => {
    element.innerHTML = randomsuit;
    if (randomsuit == "♦" || randomsuit == "♥") {
      element.style.color = "red";
    }
  });
  cardid.innerHTML = valuearray[Math.floor(Math.random() * valuearray.length)];
};
