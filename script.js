// created a flip to a card
let card = document.querySelector(".card");
card.addEventListener("click", flip);

function flip() {
  card.classList.add("flipped");
}
