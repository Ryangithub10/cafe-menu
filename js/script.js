const title = document.querySelector(".title");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

window.onload = () => {
  title.classList.add("translateY-0");
  title.classList.add("opacity-1");

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      cards[i].style.transition = `all 0.5s ${(i + 1) * 0.2}s ease`;
      cards[i].style.transform = "translateY(0)";
      cards[i].style.opacity = 1;
    }
  }, 450);
};
