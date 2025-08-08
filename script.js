const flashcards = [
  {
    pergunta: "O que é fotossíntese?",
    resposta: "É o processo pelo qual plantas produzem energia usando luz solar."
  },
  {
    pergunta: "Qual a fórmula da água?",
    resposta: "H₂O"
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    resposta: "Pedro Álvares Cabral"
  }
];

let currentIndex = 0;
let flipped = false;

const card = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");

function updateCard() {
  front.textContent = flashcards[currentIndex].pergunta;
  back.textContent = flashcards[currentIndex].resposta;
  card.classList.remove("flipped");
  flipped = false;
}

function flipCard() {
  flipped = !flipped;
  card.classList.toggle("flipped", flipped);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

updateCard();
