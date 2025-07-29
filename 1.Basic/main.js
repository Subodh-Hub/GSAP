// 1st example
// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   yoyo: true,
//   repeat: -1,
// });

// gsap.to("#box2", {
//   x: 1200,
//   duration: 2,
//   delay: 3,
//   scale: 0.5,
//   borderRadius: "50%",
//   yoyo: true,
//   repeat: -1,
// });

// gsap.to("#box3", {
//   x: 1200,
//   duration: 2,
//   delay: 5,
//   rotate: -360,
//   borderRadius: "20px",
//   yoyo: true,
//   repeat: -1,
// });

// gsap.to("#loader1",
//     {
//         rotate:360,
//         duration:1,
//         delay:0,
//         repeat:-1,
//     }
// )

// gsap.to("#loader2", {
//   scale: 1.5,
//   duration: 1,
//   delay: 1,
//   opacity: 1,
//   repeat: -1,
//   yoyo: true,
// });

// document.getElementById("loader2").addEventListener("click", () => {
//   console.log(document);
// });

// 2nd example
// gsap.from("h1", {
//   x: -400,
//   opacity: 0,
//   duration: 2,
//   delay: 1,
// });

// gsap.from("p", {
//   y: 50,
//   opacity: 0,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("p span", {
//   duration:1.1,
//   delay:1,
//   opacity:1,
//   repeat:-1,
// });

const tl = gsap.timeline();

tl.from("nav h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("nav ul li", {
  y: -10,
  duration: 0.7,
  opacity: 0,
  stagger: 0.3,
});

tl.from("main h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
