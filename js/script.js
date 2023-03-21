const title = document.querySelector(".title");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

const timeSleep = (ms) => new Promise((res) => setTimeout(res, ms));
const addClass = (element, cls) => element.classList.add(cls);
const setAttribute = (element, atr, atrValue) =>
  element.setAttribute(atr, atrValue);

window.onload = async () => {
  addClass(title, "translateY-0");
  addClass(title, "opacity-1");

  await timeSleep(450);
  for (let i = 0; i < cards.length; i++) {
    if (i < 4) {
      cards[i].style.transition = `all 0.5s ${(i + 1) * 0.12}s ease`;
      cards[i].style.transform = "translateY(0)";
      cards[i].style.opacity = 1;
      continue;
    }

    setAttribute(cards[i], "data-aos", "fade-up");
    if (i % 2 !== 0) setAttribute(cards[i], "data-aos-delay", 200);
  }
};
