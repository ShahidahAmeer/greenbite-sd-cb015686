document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculatorForm");
  const resultsSection = document.querySelector(".results");
  const bmrEl = document.querySelector(".bmr");
  const tdeeEl = document.querySelector(".tdee");
  const carbsEl = document.querySelector(".carbs");
  const proteinEl = document.querySelector(".protein");
  const fatEl = document.querySelector(".fat");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from form
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);

    // Calculate BMR
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE
    const tdee = bmr * activityLevel;

    // Macronutrients
    const carbs = (tdee * 0.5) / 4;    // grams
    const protein = (tdee * 0.2) / 4;  // grams
    const fat = (tdee * 0.3) / 9;      // grams

    // Show results
    bmrEl.textContent = bmr.toFixed(0);
    tdeeEl.textContent = tdee.toFixed(0);
    carbsEl.textContent = carbs.toFixed(0);
    proteinEl.textContent = protein.toFixed(0);
    fatEl.textContent = fat.toFixed(0);

    resultsSection.classList.remove("hidden");

    
  });
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
});
