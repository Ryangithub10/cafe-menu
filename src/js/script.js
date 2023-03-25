// get element
const title = document.querySelector(".title");
const main = document.querySelector("main");

// function
// oneline function
const timeSleep = (ms) => new Promise((res) => setTimeout(res, ms));
const addClass = (element, ...clss) =>
  clss.forEach((cls) => element.classList.add(cls));
const setAttribute = (element, atr, atrValue) =>
  element.setAttribute(atr, atrValue);
const style = (element, styles) =>
  styles.forEach((prop) => (element.style[prop[0]] = prop[1]));

// multiline function
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const createCard = ({ title, description, image }) => {
  return `
    <div class="card">
      <figure class="thumb-container">
        <img
          src="${image}"
          alt="${title}"
          class="thumb"
        />
        <figcaption class="coffee-name">${title}</figcaption>
      </figure>

      <article class="card-body">
        <p class="price">Rp. 10.000</p>
        <p class="card-desc">
          ${description}
        </p>
      </article>
    </div>
  `;
};

// manipulation html
window.onload = async () => {
  const hotCoffees = await getData("https://api.sampleapis.com/coffee/hot");
  const coldCoffees = await getData("https://api.sampleapis.com/coffee/iced");
  hotCoffees.forEach((coffee) => (main.innerHTML += createCard(coffee)));
  coldCoffees.forEach((coffee) => (main.innerHTML += createCard(coffee)));
  const cards = document.querySelectorAll(".card")

  addClass(title, "translateY-0", "opacity-1");
  for (const [i, card] of cards.entries()) {
    if (i < 4) {
      style(card, [
        ["transition", `all 0.5s ${(i + 1) * 0.12}s ease`],
        ["transform", "translateY(0)"],
        ["opacity", 1],
      ]);
      continue;
    }

    setAttribute(card, "data-aos", "fade-up");
    if (i % 2 !== 0) setAttribute(card, "data-aos-delay", 200);
  }
};
