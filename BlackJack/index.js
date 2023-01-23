let cards = [];
let sum = 0;
isAlive = false;
hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Per",
  chips: 154,
};
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard() {
  let choice = Math.floor(Math.random() * 13) + 1;

  if (choice === 1) {
    return 11;
  } else if (choice > 10) {
    return 10;
  } else {
    return choice;
  }
}

function start() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  cardsEl.textContent = "cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum:" + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoh! you've got the Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;

    renderGame();
  }
}
