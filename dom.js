console.log(document.getElementsByClassName("howdyheader"));
console.log(document.getElementById("firstHeader").innerText);
const theWordMeowdy = document.getElementById("firstHeader").innerText;

const filler = document.getElementById("filler").innerText;
// console.log(filler);
const filler2 = document.getElementsByClassName("lorem")[0].innerText;
// console.log(filler2);
const byclass = document.querySelector(".lorem").innerText;
const byId = document.querySelector("#filler").innerText;
// console.log(byId);

const chicken = document.querySelector("#chicken").innerText;
const cow = document.querySelector("#moo").innerText;
// const dog = document.querySelector("#dog").innerText;
const lizard = document.querySelector(".lizard").innerText;
const screamcat = document.querySelector("#screamcat").innerText;
const horsey = document.querySelector(".horsey").innerText;
const allofthepets = document.querySelector(".petCollection");
console.log(allofthepets);

// grab the container first
const studentContainer = document.querySelector(".students");
const button = document.querySelector("#button");

// make your element
const studentDiv = document.createElement("div");
const dustin = document.createElement("p");
const kim = document.createElement("p");
const max = document.createElement("p");
const cameron = document.createElement("p");

kim.innerText = "Kim";
max.innerText = "Max";
max.className = "Conway";
cameron.innerText = "Cameron";
cameron.id = "McDuffie";
dustin.innerText = "Dustin";
// put the element in the container
studentDiv.append(kim, dustin, max, cameron);
studentContainer.append(studentDiv);

const fries = [
  {
    id: 1,
    name: "Burger and Fries",
    image_url: "https://source.unsplash.com/random/800x600/?burger,fries",
    description:
      "Classic American meal with a beef patty, cheese, lettuce, tomato, onion, and fries.",
    price: 9.99,
    category: "burger",
  },
];
