const GOAL = 50;

// Valor inicial
let currentSubs = localStorage.getItem("subs50")
  ? parseInt(localStorage.getItem("subs50"))
  : 0;

function updateCounter() {
  document.getElementById("counter").innerText =
    `${currentSubs} / ${GOAL}`;
  localStorage.setItem("subs50", currentSubs);
}

function addSub() {
  if (currentSubs < GOAL) {
    currentSubs++;
    updateCounter();
  }
}

function removeSub() {
  if (currentSubs > 0) {
    currentSubs--;
    updateCounter();
  }
}

// Inicializa
updateCounter();
