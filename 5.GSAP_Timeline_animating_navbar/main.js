const menu = document.getElementById("menu");
const main = document.getElementById("main");
const cancel = document.getElementById("cancel");
let isMenuOpen = false;

const tl = gsap.timeline();

tl.to("#nav-items", {
  right: "0",
  duration: 0.8,
});

tl.from("#nav-items ul li", {
  x: 150,
  duration: 0.7,
  stagger: 0.28,
  opacity: 0,
});
tl.from("#nav-items i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
  console.log("clicked on menu");
  isMenuOpen = true;
});

main.addEventListener("click", (e) => {
  if (isMenuOpen) {
    if (!e.target.closest("#nav-items") && !e.target.closest("#menu")) {
      tl.reverse();
      console.log("clicked on main");
    }
  }
});

cancel.addEventListener("click", () => {
  tl.reverse();
  isMenuOpen = false;
  console.log("clicked on cancel");
});
