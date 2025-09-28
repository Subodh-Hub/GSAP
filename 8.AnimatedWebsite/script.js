function section1Animation() {
  const tl = gsap.timeline();

  tl.from("nav #logo,nav ul li,nav ul button", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(".section1 .hero .hero-left h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".section1 .hero .hero-left p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".section1 .hero .hero-left button", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    ".section1 .hero .hero-right img",
    {
      opacity: 0,
      x: 200,
      duration: 0.5,
    },
    "-=0.7"
  );

  tl.from(".section1 .section1Bottom img", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
  });
}

function section2Animation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".line1.elem.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  tl2.from(
    ".line1.elem.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  tl2.from(
    ".line2.elem.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );

  tl2.from(
    ".line2.elem.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
}

function section3Animation() {
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
    },
  });

  tl3.from(
    ".section3 .left h2",
    {
      y: -30,
      opacity: 0,
      duration: 0.3,
    },
    "sameTime"
  );
  tl3.from(".section3 .left p", {
    x: -30,
    opacity: 0,
    duration: 0.2,
  });
  tl3.from(".section3 .left button", {
    opacity: 0,
    duration: 0.2,
  });

  tl3.from(
    ".section3 .right img",
    {
      x: 100,
      opacity: 0,
    },
    "sameTime"
  );
}

section1Animation();
section2Animation();
section3Animation();

const menuOpen = document.querySelector("#menuOpen");
const menu = document.querySelector("#small-nav-items");
const closeMenu = document.querySelector("#closeMenu");
let isMenuOpen = false;

menuOpen.addEventListener("click", () => {
  console.log("hello");
});

const tl = gsap.timeline();

tl.to("#small-nav-items", {
  right: "0",
  duration: 0.8,
});
tl.from("#small-nav-items ul li", {
  x: -30,
  opacity: 0,
  stagger: 0.1,
});
menuOpen.addEventListener("click", () => {
  tl.play();
  isMenuOpen = true;
});
closeMenu.addEventListener("click", (e) => {
  tl.reverse();
  isMenuOpen = false;
});

tl.pause();
