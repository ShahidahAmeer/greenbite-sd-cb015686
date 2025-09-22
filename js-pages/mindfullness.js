document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const circle = document.querySelector(".breathing-circle");
  const breathText = document.getElementById("breathText");
  const startTimerBtn = document.getElementById("startTimer");
  const timerDisplay = document.getElementById("timerDisplay");
  const minutesInput = document.getElementById("minutes");
  const sessionCountEl = document.getElementById("sessionCount");

  // Ambient sounds
  const forestSound = new Audio("Audio/ssstik.io_@vibes5378_1758361485395.mp3");
  const rainSound = new Audio("Audio/7fc7ba7bd104153ff3328d5104c26963 (1).mp3");
  forestSound.loop = true;
  rainSound.loop = true;

  // Load completed sessions from localStorage
  let sessionCount = localStorage.getItem("sessions") || 0;
  sessionCountEl.textContent = sessionCount;

  // --------------------
  // Breathing Animation
  // --------------------
  function startBreathing() {
    let isInhale = true;

    setInterval(() => {
      if (isInhale) {
        breathText.textContent = "Inhale...";
        circle.style.transform = "scale(1.5)";
      } else {
        breathText.textContent = "Exhale...";
        circle.style.transform = "scale(1)";
      }
      isInhale = !isInhale;
    }, 4000); // 4 seconds inhale/exhale
  }
  startBreathing();

  // --------------------
  // Timer Tool
  // --------------------
  let timer;
  startTimerBtn.addEventListener("click", function () {
    let minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid number of minutes.");
      return;
    }

    let timeLeft = minutes * 60; // convert to seconds

    clearInterval(timer);
    timer = setInterval(() => {
      let mins = Math.floor(timeLeft / 60);
      let secs = timeLeft % 60;
      timerDisplay.textContent =
        `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        alert("Session complete! 🎉");
        sessionCount++;
        localStorage.setItem("sessions", sessionCount);
        sessionCountEl.textContent = sessionCount;
      }
    }, 1000);
  });

  // --------------------
  // Ambient Sounds
  // --------------------
  document.getElementById("sound1").addEventListener("click", function () {
    if (forestSound.paused) {
      forestSound.play();
      rainSound.pause();
    } else {
      forestSound.pause();
    }
  });

  document.getElementById("sound2").addEventListener("click", function () {
    if (rainSound.paused) {
      rainSound.play();
      forestSound.pause();
    } else {
      rainSound.pause();
    }
  });
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
});
