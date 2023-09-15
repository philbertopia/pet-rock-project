// index.js
// Modal
const modal = document.getElementById("myModal");
const playAgainBtn = document.getElementById("playAgainBtn");
const closeBtn = document.querySelector(".close");

const pet = document.getElementById("pet");
const poop = document.getElementById("poop");

const healthDisplay = document.getElementById("health");
const feelingsDisplay = document.getElementById("feelings");
const hungryStatus = document.getElementById("hungry");
const sleepyStatus = document.getElementById("sleepy");
const sadStatus = document.getElementById("sad");
const sickStatus = document.getElementById("sick");

const feedBtn = document.getElementById("feedBtn");
const singBtn = document.getElementById("singBtn");
const playBtn = document.getElementById("playBtn");
const cleanBtn = document.getElementById("cleanBtn");

feedBtn.addEventListener("click", () => {
  decreaseHungry();
});
singBtn.addEventListener("click", () => {
  decreaseSleepy();
});
playBtn.addEventListener("click", () => {
  decreaseSad();
});
cleanBtn.addEventListener("click", () => {
  cleanPet();
});

let health = 100;
let hungry = 0;
let sleepy = 0;
let sad = 0;
let sick = 0;
let isPoop = false;
let feelings = [];

// Health functions
function increaseHealth() {
  if (hungry < 100 && sleepy < 100 && sad < 100 && sick < 100 && health < 100) {
    health += 1;
    updateHealth();
  }
}

function decreaseHealth() {
  if (health > 0) {
    if (hungry === 100 || sleepy === 100 || sad === 100 || sick === 100) {
      health -= 1;
      updateHealth();
    }
  }
}

function updateHealth() {
  healthDisplay.textContent = health;
}

// Feelings Display
function updateFeelings() {
  feelings = [];

  if (hungry >= 5) {
    feelings.push("Hungry");
  }
  if (sleepy >= 5) {
    feelings.push("Sleepy");
  }
  if (sad >= 5) {
    feelings.push("Sad");
  }
  if (sick >= 5) {
    feelings.push("Sick");
  }

  if (feelings.length === 0) {
    feelings.push("Okay");
  }

  feelingsDisplay.textContent = feelings.join(", ");
}

// Hungry functions
function increaseHungry() {
  if (hungry < 100) {
    hungry += 1;
    updateHungry();
  }
}

function decreaseHungry() {
  if (hungry > 0 && hungry <= 100) {
    hungry -= 20;
    updateHungry();
  }
}

function updateHungry() {
  hungryStatus.textContent = hungry;
}

// Sleepy functions
function increaseSleepy() {
  if (sleepy < 100) {
    sleepy += 1;
    updateSleepy();
  }
}

function decreaseSleepy() {
  if (sleepy > 0 && sleepy <= 100) {
    sleepy -= 20;
    updateSleepy();
  }
}

function updateSleepy() {
  sleepyStatus.textContent = sleepy;
}

// Sad functions
function increaseSad() {
  if (sad < 100) {
    sad += 1;
    updateSad();
  }
}

function decreaseSad() {
  if (sad > 0 && sad <= 100) {
    sad -= 20;
    updateSad();
  }
}

function updateSad() {
  sadStatus.textContent = sad;
}

// Poop/Cleen functions

function cleanPet() {
  isPoop = false;
  updatePoop();
}

function poopPet() {
  isPoop = true;
  updatePoop();
}

function updatePoop() {
  if (isPoop) {
    poop.style.backgroundColor = "burlywood";
  } else {
    poop.style.backgroundColor = "white";
  }
}

// Sick functions
function increaseSick() {
  if (sick < 100) {
    sick += 1;
    updateSick();
  }
}

function decreaseSick() {
  if (sick > 0 && sick <= 100) {
    sick -= 1;
    updateSick();
  }
}

function updateSick() {
  sickStatus.textContent = sick;
}

// Death

function dead() {
  if (health === 0) {
    feelings = [];
    feelings.push("Dead!");
  }
}

// Set intervals
// setInterval(increaseHungry, 1000);
// setInterval(increaseSleepy, 1000);
// setInterval(increaseSad, 1000);
setInterval(() => {
  dead();
  increaseHealth();
  decreaseHealth();
  updateFeelings();
  increaseHungry();
  increaseSleepy();
  increaseSad();
  checkFeelings();
  if (isPoop) {
    increaseSick();
  } else {
    decreaseSick();
  }
}, 1000);

setInterval(() => {
  poopPet();
}, 10000);

// Generate feelings
function checkFeelings() {
  // if (hungry >= 5 || sleepy >= 5 || sad >= 5) {
  //   // At least one feeling has reached a threshold, so change pet color
  //   pet.style.backgroundColor = 'red';
  // } else {
  //   // No feeling has reached a threshold, so keep pet color green
  //   pet.style.backgroundColor = 'green';
  // }

  if (hungry >= 5) {
    pet.style.backgroundColor = "red";
  } else if (sleepy >= 5) {
    pet.style.backgroundColor = "orange";
  } else if (sad >= 5) {
    pet.style.backgroundColor = "blue";
  } else if (sick >= 5) {
    pet.style.backgroundColor = "yellowgreen";
  } else {
    pet.style.backgroundColor = "rosybrown";
  }
}
