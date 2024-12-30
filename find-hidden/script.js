function startGame() {
  // Request fullscreen
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    document.documentElement.msRequestFullscreen();
  }

  hiddenObject.style.display = "block";
  // Set the hidden object to a particular position
  hiddenObject.style.left = "700px"; // Set the desired left position
  hiddenObject.style.top = "24px"; // Set the desired top position
  feedback.textContent = ""; // Clear previous feedback
  hiddenObject.addEventListener("click", findObject);
}
// redirect to another page after 5 seconds

function findObject() {
  const congratsMessage = document.createElement("div");
  congratsMessage.id = "congratsMessage";
  congratsMessage.textContent = "Congratulations! You found the hidden object.";
  document.body.appendChild(congratsMessage);

  setTimeout(function () {
    location.href = "https://www.google.com";
  }, 5000);

  hiddenObject.removeEventListener("click", findObject);

  // Exit fullscreen
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}

document.addEventListener(
  "wheel",
  function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey && event.key === "=") ||
    (event.ctrlKey && event.key === "-") ||
    (event.ctrlKey && event.key === "0") ||
    event.key === "F11" ||
    (event.ctrlKey && event.key === "f") ||
    (event.ctrlKey && event.key === "F") ||
    // Disable ESC key
    event.key === "Escape"
  ) {
    event.preventDefault();
  }
});
