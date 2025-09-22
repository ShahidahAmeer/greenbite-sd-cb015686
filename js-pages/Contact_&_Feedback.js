document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const confirmation = document.querySelector(".confirmation");

  // Handle form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("⚠️ Please enter a valid email.");
      return;
    }

    // Store feedback in localStorage
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    // Show confirmation message
    confirmation.style.display = "block";
    setTimeout(() => {
    confirmation.style.display = "none";
},  5000);
    form.reset();
  });

  // FAQ accordion (only one open at a time)
  const details = document.querySelectorAll("details");
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      }
    });
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
