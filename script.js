let array = [
  { image: "./assets/beer.jpg", id: "beer" },
  { image: "./assets/pretzels.jpg", id: "beer" },
  { image: "assets/Cheese.jpeg", id: "cheese" },
  {
    image: "assets/Wine.jpeg",
    id: "cheese"
  },
  {
    image: "assets/Gin T.jpeg",
    id: "gin"
  },
  {
    image: "assets/Tonic.jpeg",
    id: "gin"
  },
  {
    image: "assets/jdaniels.jpg",
    id: "jack"
  },
  {
    image: "assets/coke.jpg",
    id: "jack"
  },
  {
    image: "assets/lime.jpg",
    id: "lime"
  },
  {
    image: "assets/tequila.jpeg",
    id: "lime"
  },
  {
    image: "assets/coffee.jpg",
    id: "coffee"
  },
  {
    image: "assets/download.jpeg",
    id: "coffee"
  }
];

/* <section class="container">
  <div class="card">
    <div class="front">1</div>
    <div class="back">2</div>
  </div>
</section>; */

let gameboard = document.querySelector(".gameboard");
//create a loop to make the other cards
for (let item of array) {
  let cardContainer = document.createElement("section");
  cardContainer.classList.add("container");
  let card = document.createElement("div");
  card.setAttribute("data-card-id", item.id);
  card.classList.add("card");
  // let frontImage = document.createElement("img");
  // frontImage.setAttribute("src", item.image);
  let front = document.createElement("div");
  // front.append(frontImage);
  front.classList.add("front");
  //back of card images
  let back = document.createElement("div");
  back.classList.add("back");
  // puts image on back of card.
  back.style.backgroundImage = `url("${item.image}")`;
  // image styled within container
  back.style.backgroundSize = "cover";
  // rather done thru CSS styling, the three lines of code styled within the container and in the center.
  back.style.backgroundPosition = "center";
  card.append(front, back);
  cardContainer.append(card);
  gameboard.append(cardContainer);
}

let clickedCards = [];

//add event listener to gameboard to listen for clicks
gameboard.addEventListener("click", clicked);
//if event.target is a card, then add class 'flipped' to event.target
function clicked(e) {
  if (clickedCards.length < 2) {
    clickedCards.push(e.target.parentNode);
    if (e.target.className === "front") {
      //targeted the parent to effect all cards.
      e.target.parentNode.classList.add("flipped");
    }
    if (clickedCards.length === 2) {
      if (
        clickedCards[0].getAttribute("data-card-id") ===
        clickedCards[1].getAttribute("data-card-id")
      ) {
        console.log("issa match");
        clickedCards = [];
      } else {
        for (let card of clickedCards) {
          card.classList.remove("flipped");
        }
        clickedCards = [];
      }
    }
  }
}

//make a for loop to revert back to card's back when there's not a match

// const cards = document.querySelectorAll(‘.memory-card’);
// + let hasFlippedCard = false;
// + let firstCard, secondCard;
//   function flipCard() {
// -   this.classList.toggle(‘flip’);
// +   this.classList.add(‘flip’);
// +   if (!hasFlippedCard) {
// +     hasFlippedCard = true;
// +     firstCard = this;
// +   }
//   }
