gsap.from("#page1 #box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    start: "top 45%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#page2 h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    start: "top 60%",
  },
});
gsap.from("#page2 p", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 p",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-230%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -500%",
    scrub: 2,
    pin: true,
  },
});
