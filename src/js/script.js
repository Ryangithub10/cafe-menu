const title = document.querySelector(".title");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

const timeSleep = (ms) => new Promise((res) => setTimeout(res, ms));
const addClass = (element, ...clss) =>
  clss.forEach((cls) => element.classList.add(cls));
const setAttribute = (element, atr, atrValue) =>
  element.setAttribute(atr, atrValue);
const style = (element, styles) =>
  styles.forEach((prop) => (element.style[prop[0]] = prop[1]));

window.onload = async () => {
  addClass(title, "translateY-0", "opacity-1");

  await timeSleep(450);
  for (let i = 0; i < 4; i++) {
    style(cards[i], [
      ["transition", `all 0.5s ${(i + 1) * 0.12}s ease`],
      ["transform", "translateY(0)"],
      ["opacity", 1],
    ]);
  }
};

for (let i = 4; i < cards.length; i++) {
  setAttribute(cards[i], "data-aos", "fade-up");
  if (i % 2 !== 0) setAttribute(cards[i], "data-aos-delay", 200);
}
