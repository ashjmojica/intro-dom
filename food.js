const food = [
  {
    id: 1,
    name: "Burger and Fries",
    image_url: "https://source.unsplash.com/random/800x600/?burger,fries",
    description:
      "Classic American meal with a beef patty, cheese, lettuce, tomato, onion, and fries.",
    price: 9.99,
    category: "burger",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    image_url: "https://source.unsplash.com/random/800x600/?pizza,margherita",
    description:
      "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    price: 12.99,
    category: "pizza",
  },
  {
    id: 3,
    name: "Chicken Tikka Masala",
    image_url:
      "https://source.unsplash.com/random/800x600/?chicken,tikka,masala",
    description:
      "Indian dish made with marinated chicken cooked in a spiced tomato-based sauce.",
    price: 15.99,
    category: "curry",
  },
  {
    id: 4,
    name: "Sushi Platter",
    image_url: "https://source.unsplash.com/random/800x600/?sushi,platter",
    description:
      "Assortment of fresh sushi rolls including tuna, salmon, and California rolls.",
    price: 18.99,
    category: "sushi",
  },
  {
    id: 5,
    name: "Pad Thai",
    image_url: "https://source.unsplash.com/random/800x600/?lettuce wraps,",
    description:
      "Thai noodle dish with stir-fried vegetables, peanuts, and your choice of protein.",
    price: 13.99,
    category: "noodles",
  },
];
const foodCards = document.querySelector(".food-cards");

for (const foodToAdd of food) {
  const foodItem = document.createElement("div");
  const foodImg = document.createElement("img");
  const foodTitle = document.createElement("h2");
  const foodPrice = document.createElement("h4");
  const foodDescription = document.createElement("p");

  foodItem.className = "food-item";
  foodImg.src = foodToAdd.image_url;
  foodTitle.innerText = foodToAdd.name;
  foodPrice.innerText = foodToAdd.price;
  foodDescription.innerText = foodToAdd.description;
  foodItem.append(foodImg, foodTitle, foodPrice, foodDescription);
  foodCards.append(foodItem);
}
