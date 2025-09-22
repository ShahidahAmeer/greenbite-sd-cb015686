document.addEventListener("DOMContentLoaded", function () {

  // 1. SIMPLE RECIPE DATA (like JSON, stored in JS object)
  var recipes = [
    {
      id: 1,
      title: "Roasted Vegetable Salad Bowl",
      category: "Breakfast",
      image: "images/Amazing Salads with Roasted Vegetables in 30 mins.jpeg",
      description: "A healthy bowl with roasted veggies.",
      ingredients: ["Carrots", "Broccoli", "Bell peppers", "Zucchini", "Red onion", "Cherry tomatoes", "Sweet potato", "Olive oil", "Salt", "Pepper", "Dried herbs", "Lemon juice or balsamic vinegar"],
      steps: ["Chop vegetables", "Toss with oil and seasonings", "Roast in oven", "Serve warm"],
      nutrition: { Calories: 250, Protein: "8g", Fat: "12g", Carbs: "30g" }
    },
    {
      id: 2,
      title: "Dill Pickle Egg Salad",
      category: "Breakfast",
      image: "images\Dill Pickle Egg Salad Recipe.jpeg",
      description: "A tangy and creamy egg salad with dill pickles.",
      ingredients: ["Eggs", "Dill pickles", "Mayonnaise", "Mustard", "Salt", "Pepper"],
      steps: ["Boil eggs", "Chop eggs and pickles", "Mix with mayonnaise and mustard", "Season and serve"],
      nutrition: { Calories: 220, Protein: "12g", Fat: "16g", Carbs: "4g" }
    },
    {
      id: 3,
      title: "Healthy Mini Meatball and Stars Soup",
      category: "Breakfast",
      image: "images\Healthy Mini Meatball and Stars Soup.jpeg",
      description: "A comforting soup with mini meatballs and star-shaped pasta.",
      ingredients: ["Ground meat", "Breadcrumbs", "Egg", "Carrots", "Celery", "Onion", "Chicken broth", "Star pasta"],
      steps: ["Make meatballs", "Boil vegetables and broth", "Add meatballs and pasta", "Simmer until cooked"],
      nutrition: { Calories: 280, Protein: "18g", Fat: "10g", Carbs: "25g" }
    },
    {
      id: 4,
      title: "Tofu Tzatziki Bowls",
      category: "Breakfast",
      image: "images\Tofu Tzatziki Bowls.jpeg",
      description: "A refreshing bowl with tofu, veggies, and creamy tzatziki sauce.",
      ingredients: ["Tofu", "Cucumber", "Greek yogurt", "Garlic", "Lemon juice", "Olive oil", "Salt", "Pepper"],
      steps: ["Press and cube tofu", "Prepare tzatziki sauce", "Assemble tofu and veggies in bowl", "Drizzle sauce and serve"],
      nutrition: { Calories: 260, Protein: "14g", Fat: "12g", Carbs: "20g" }
    },
    {
      id: 5,
      title: "Healthy Cauliflower Rice",
      category: "Lunch",
      image: "images/The Best Cauliflower Rice Recipe.jpeg",
      description: "A low-carb, fluffy cauliflower rice perfect for healthy meals.",
      ingredients: ["Cauliflower", "Olive oil", "Garlic", "Salt", "Pepper"],
      steps: ["Rice the cauliflower", "Sauté with olive oil and garlic", "Season with salt and pepper", "Serve warm"],
      nutrition: { Calories: 120, Protein: "3g", Fat: "7g", Carbs: "12g" }
    },
    {
      id: 6,
      title: "Three-Bean Chili",
      category: "Lunch",
      image: "images/Three-Bean Chili.jpeg",
      description: "A spicy and protein-rich chili.",
      ingredients: ["Kidney beans", "Black beans", "Chickpeas", "Tomato sauce", "Spices"],
      steps: ["Boil beans", "Add spices", "Simmer with sauce", "Serve hot"],
      nutrition: { Calories: 320, Protein: "15g", Fat: "5g", Carbs: "55g" }
    },
    {
      id: 7,
      title: "Farro Fried Rice",
      category: "Lunch",
      image: "images/Healthy Farro Fried _Rice_ by Food Network Kitchen.jpeg",
      description: "A nutritious twist on fried rice using farro for extra fiber.",
      ingredients: ["Farro", "Mixed vegetables", "Soy sauce", "Olive oil", "Eggs"],
      steps: ["Cook farro", "Sauté vegetables", "Add farro and soy sauce", "Stir-fry with eggs and serve"],
      nutrition: { Calories: 350, Protein: "12g", Fat: "10g", Carbs: "50g" }
    },
    {
      id: 8,
      title: "Baked Brown Rice",
      category: "Lunch",
      image: "images/How to Cook Brown Rice.jpeg",
      description: "Perfectly baked brown rice, fluffy and nutritious.",
      ingredients: ["Brown rice", "Water", "Olive oil", "Salt"],
      steps: ["Preheat oven", "Combine rice, water, and salt", "Bake until water is absorbed", "Fluff and serve"],
      nutrition: { Calories: 215, Protein: "5g", Fat: "2g", Carbs: "45g" }
    },
    {
      id: 9,
      title: "Red Kidney Bean Dip",
      category: "Evening Snack",
      image: "images/Smoky Caribbean Style Kidney Beans.jpeg",
      description: "A smoky and creamy kidney bean dip, perfect with crackers or veggies.",
      ingredients: ["Red kidney beans", "Olive oil", "Garlic", "Lemon juice", "Salt", "Pepper"],
      steps: ["Blend beans with olive oil and garlic", "Add lemon juice", "Season with salt and pepper", "Serve chilled"],
      nutrition: { Calories: 180, Protein: "8g", Fat: "6g", Carbs: "25g" }
    },
    {
      id: 10,
      title: "Badenjan Dip",
      category: "Evening Snack",
      image: "images/b189056f-3c12-4b37-a279-6dc2ad640155.jpeg",
      description: "A flavorful roasted eggplant dip with Middle Eastern spices.",
      ingredients: ["Eggplant", "Tahini", "Garlic", "Olive oil", "Lemon juice", "Salt"],
      steps: ["Roast eggplant", "Blend with tahini, garlic, and lemon juice", "Season with salt", "Serve"],
      nutrition: { Calories: 150, Protein: "3g", Fat: "10g", Carbs: "12g" }
    },
    {
      id: 11,
      title: "Green Fatoush",
      category: "Evening Snack",
      image: "images/Fattoush Salad Recipe - Chefjar.jpeg",
      description: "A refreshing salad with mixed greens, cucumbers, and tangy dressing.",
      ingredients: ["Lettuce", "Cucumber", "Tomatoes", "Green herbs", "Lemon juice", "Olive oil", "Salt", "Pepper"],
      steps: ["Chop vegetables and herbs", "Mix dressing with lemon juice and olive oil", "Toss salad", "Serve fresh"],
      nutrition: { Calories: 120, Protein: "2g", Fat: "7g", Carbs: "15g" }
    },
    {
      id: 12,
      title: "Stovetop Smoked Pecans",
      category: "Evening Snack",
      image: "images/Stovetop Smoked Pecans.jpeg",
      description: "Smoky and crunchy pecans, perfect as a snack or salad topping.",
      ingredients: ["Pecans", "Olive oil", "Smoked paprika", "Salt"],
      steps: ["Heat oil in pan", "Add pecans and smoked paprika", "Stir until toasted", "Cool and serve"],
      nutrition: { Calories: 200, Protein: "5g", Fat: "18g", Carbs: "8g" }
    },
    {
      id: 13,
      title: "Sausage and Peppers Sheet Pan Dinner",
      category: "Dinner",
      image: "images/791b8ab2-e1b3-42c4-833a-3d05790b6b3c.jpeg",
      description: "A simple sheet pan meal with sausage and roasted peppers.",
      ingredients: ["Sausage", "Bell peppers", "Onion", "Olive oil", "Salt", "Pepper"],
      steps: ["Preheat oven", "Arrange sausage and veggies on sheet pan", "Roast until cooked", "Serve hot"],
      nutrition: { Calories: 400, Protein: "20g", Fat: "25g", Carbs: "20g" }
    },
    {
      id: 14,
      title: "One-Skillet Shrimp and Quinoa",
      category: "Dinner",
      image: "images/EASY One-Pan Beef + Cabbage Skillet for Clean Eating Meal Prep!.jpeg",
      description: "A one-pan dinner with shrimp, quinoa, and vegetables.",
      ingredients: ["Shrimp", "Quinoa", "Mixed vegetables", "Olive oil", "Garlic", "Salt", "Pepper"],
      steps: ["Cook shrimp in skillet", "Add quinoa and vegetables", "Season and cook until done", "Serve hot"],
      nutrition: { Calories: 350, Protein: "25g", Fat: "10g", Carbs: "40g" }
    },
    {
      id: 15,
      title: "Dry Rub Ribs- Memphis",
      category: "Dinner",
      image: "images/Dry Rub Ribs- Memphis (Dave's Dinners).jpeg",
      description: "Tender ribs with a flavorful Memphis-style dry rub.",
      ingredients: ["Pork ribs", "Brown sugar", "Paprika", "Garlic powder", "Salt", "Pepper"],
      steps: ["Preheat oven", "Rub spices on ribs", "Bake until tender", "Serve hot"],
      nutrition: { Calories: 450, Protein: "30g", Fat: "30g", Carbs: "10g" }
    },
    {
      id: 16,
      title: "Dump Chicken Bake",
      category: "Dinner",
      image: "images/Dump-and-Bake Chicken Parm Casserole - Recipes by Lina.jpeg",
      description: "A simple chicken bake casserole with cheese and tomato sauce.",
      ingredients: ["Chicken breast", "Tomato sauce", "Cheese", "Breadcrumbs", "Olive oil", "Salt", "Pepper"],
      steps: ["Preheat oven", "Layer chicken, sauce, and cheese", "Bake until chicken is cooked", "Serve hot"],
      nutrition: { Calories: 400, Protein: "35g", Fat: "18g", Carbs: "25g" }
    }

  ];

  var searchBox = document.querySelector(".recipe-search");
  searchBox.addEventListener("input", function () {
    var term = searchBox.value.toLowerCase();
    document.querySelectorAll(".menu_item").forEach(function (card) {
      var text = card.innerText.toLowerCase();
      card.style.display = text.includes(term) ? "flex" : "none";
    });
  });

  // 3. CREATE MODAL (POPUP)
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.6)";
  modal.style.overflow = "auto";
  modal.style.padding = "50px";

  var modalContent = document.createElement("div");
  modalContent.style.background = "#fff";
  modalContent.style.padding = "20px";
  modalContent.style.borderRadius = "10px";
  modalContent.style.maxWidth = "600px";
  modalContent.style.margin = "auto";

  var closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.style.marginBottom = "10px";

  modalContent.appendChild(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.querySelectorAll(".menu_item").forEach(function (card) {
    card.addEventListener("click", function () {
      var recipeTitle = card.querySelector("p").innerText;
      var recipe = recipes.find(r => r.title === recipeTitle);

      if (recipe) {
        modalContent.innerHTML = "<button id='closeModal'>Close</button>";
        modalContent.innerHTML += "<h2>" + recipe.title + "</h2>";
        modalContent.innerHTML += "<img src='" + recipe.image + "' width='200'><p>" + recipe.description + "</p>";

        var ing = "<h3>Ingredients</h3><ul>";
        recipe.ingredients.forEach(function (i) {
          ing += "<li>" + i + "</li>";
        });
        ing += "</ul>";
        modalContent.innerHTML += ing;

        var steps = "<h3>Steps</h3><ol>";
        recipe.steps.forEach(function (s) {
          steps += "<li>" + s + "</li>";
        });
        steps += "</ol>";
        modalContent.innerHTML += steps;

        var nutri = "<h3>Nutrition Info</h3><table border='1' cellpadding='5'>";
        for (var key in recipe.nutrition) {
          nutri += "<tr><td>" + key + "</td><td>" + recipe.nutrition[key] + "</td></tr>";
        }
        nutri += "</table>";
        modalContent.innerHTML += nutri;

        var btn = document.createElement("button");
        btn.textContent = "Close";
        btn.addEventListener("click", function () {
          modal.style.display = "none";
        });
        modalContent.appendChild(btn);

        modal.style.display = "block";
      }
    });
  });
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

});
