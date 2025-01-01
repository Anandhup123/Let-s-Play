const starImg = document.getElementById("starImg");
const gameContainer = document.getElementById("gameContainer");
const feedback = document.getElementById("feedback");

// Define the correct spot for the bindi (e.g., center of the forehead)
const correctBindiX = 355; // Adjust based on the image size
const correctBindiY = 66; // Adjust based on the image size
const correctSpot = document.getElementById("correctSpot");

// Store player attempts
let playerAttempts = [];

// Position the correct spot marker
correctSpot.style.left = `${correctBindiX}px`; // Adjust for the spot's center
correctSpot.style.top = `${correctBindiY}px`; // Adjust for the spot's center

function startGame() {
  gameContainer.addEventListener("click", addBindi);
  // Simulate blindfold by hiding the cursor
  document.body.style.cursor = "none";
  feedback.textContent = ""; // Clear previous feedback
}

function addBindi(event) {
  const playerName = "You";
  const bindi = document.createElement("div");
  bindi.className = "bindi";

  const nameTag = document.createElement("div");
  nameTag.className = "playerName";
  nameTag.textContent = playerName;

  // Calculate position within the game container (relative to the tree image)
  const rect = gameContainer.getBoundingClientRect();
  const offsetX = event.clientX - rect.left - bindi.offsetWidth / 2; // center the bindi
  const offsetY = event.clientY - rect.top - bindi.offsetHeight / 2; // center the bindi

  // Position the bindi
  bindi.style.left = `${offsetX}px`;
  bindi.style.top = `${offsetY}px`;

  // Position the name tag to the right side of the bindi
  nameTag.style.left = `${offsetX + 20}px`;
  nameTag.style.top = `${offsetY - 10}px`; // slightly above the bindi

  // Append the bindi and name tag to the game container
  gameContainer.appendChild(bindi);

  // Calculate distance to the correct spot
  const distance = calculateDistance(
    offsetX + bindi.offsetWidth / 2,
    offsetY + bindi.offsetHeight / 2,
    correctBindiX,
    correctBindiY
  );

  // Store player attempt (name and distance)
  playerAttempts.push({ playerName, distance });

  // Display feedback immediately
  feedback.textContent = `Distance: ${Math.round(distance)}px`;

  if (distance < 30) {
    feedback.textContent +=
      " - You found the star! Congratulations! \n Redirecting to the next page...";
    endGame();
  }

  // Stop game (reveal cursor)
  document.body.style.cursor = "default";
  gameContainer.removeEventListener("click", addBindi);
}

function endGame() {
  //redirect to next page aftrer 10 seconds
  setTimeout(() => {
      window.location.href = "../clue5.html";
  }, 5000
  );
}

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    event.preventDefault();
  }
});