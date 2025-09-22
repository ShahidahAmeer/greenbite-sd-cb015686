
document.addEventListener("DOMContentLoaded", function () {

  var slogans = [
    "Savor Life. Stay Grounded. Grow Strong.",
    "Eat Better, Live Longer 🌱",
    "Healthy Outside Starts from Inside 💚",
    "Fuel Your Body, Nourish Your Soul 🌿",
    "Wellness Made Simple, Life Made Better 🌸",
    "Strong Roots, Healthy Future 🌳"
  ];
  var index = 0;
  var heroText = document.querySelector(".hero_infor h2");

  setInterval(function () {
    index = index + 1;
    if (index >= slogans.length) {
      index = 0;
    }
    heroText.textContent = slogans[index];
  }, 4000); 




  // 3. HEALTH TIP OF THE DAY
  var tips = [
    "Drink water 💧",
    "Eat more vegetables 🥦",
    "Take a short walk 🚶",
    "Sleep well 😴",
    "Smile more 😊",
    "walk daily"
  ];
  var today = new Date().getDate(); 
  var tip = tips[today % tips.length];
  var tipBox = document.createElement("p");
  tipBox.textContent = "💡 Health Tip: " + tip;
  document.querySelector(".about").appendChild(tipBox);


 
  var form = document.querySelector(".email-form");
  var input = document.querySelector(".email-input");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    if (input.value === "") {
      alert("⚠️ Please enter your email");
    } else {
      localStorage.setItem("newsletterEmail", input.value);
      alert("✅ Thank you for subscribing: " + input.value);
      input.value = "";
    }
  });
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

});
