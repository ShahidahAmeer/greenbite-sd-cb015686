document.addEventListener("DOMContentLoaded", function () {
  const bodyPartSelect = document.getElementById("body");
  const equipmentCheckboxes = document.querySelectorAll("input[type='checkbox']");
  const generateBtn = document.querySelectorAll("button")[0]; // first button in Generator
  const clearBtn = document.querySelectorAll("button")[1];    // second button in Generator
  const planDiv = document.querySelectorAll(".section")[1].querySelector("div");
  const timerDisplay = document.querySelector(".time");
  const startBtn = document.querySelectorAll(".section")[2].querySelectorAll("button")[0];
  const pauseBtn = document.querySelectorAll(".section")[2].querySelectorAll("button")[1];
  const nextBtn = document.querySelectorAll(".section")[2].querySelectorAll("button")[2];

  let timer;
  let timeLeft = 30;

  // Simple exercise database
  const exercises = {
    "Full body": ["Burpees", "Jumping Jacks", "Mountain Climbers"],
    "Upper body": ["Push-ups", "Shoulder Press", "Bicep Curls"],
    "Lower body": ["Squats", "Lunges", "Glute Bridges"],
    "Arms": ["Tricep Dips", "Bicep Curls", "Arm Circles"],
    "Legs": ["Squats", "Calf Raises", "Step-ups"],
    "Core": ["Plank", "Crunches", "Leg Raises"]
  };

  // Generate workout plan
  generateBtn.addEventListener("click", function () {
    const bodyPart = bodyPartSelect.value;
    const selectedEquip = Array.from(equipmentCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.parentNode.textContent.trim());

    const workoutList = exercises[bodyPart];
    const randomExercise = workoutList[Math.floor(Math.random() * workoutList.length)];

    planDiv.innerHTML = `
      <p><strong>Body part:</strong> ${bodyPart}</p>
      <p><strong>Equipment:</strong> ${selectedEquip.join(", ") || "None"}</p>
      <p><strong>Exercise:</strong> ${randomExercise}</p>
    `;
  });

  // Clear workout plan
  clearBtn.addEventListener("click", function () {
    planDiv.innerHTML = "No exercises yet";
    equipmentCheckboxes.forEach(cb => cb.checked = false);
  });

  // Timer functions
  function updateTimer() {
    timerDisplay.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      const beep = new Audio("Audio/short_beep.wav");
      beep.play();
      alert("⏰ Time's up! Take a rest or press Next.");
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();
  }

  // Button events
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  nextBtn.addEventListener("click", resetTimer);

  // Initialize display
  updateTimer();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
});
