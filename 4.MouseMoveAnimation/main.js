const main = document.getElementById("main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", () => {
  cursor.innerHTML="Subodh Rijal"
  gsap.to("#cursor", {
    scale: 4,
    backgroundColor:"#ffffffcc",
  });
});
image.addEventListener("mouseleave", () => {
  cursor.innerHTML=""

  gsap.to("#cursor", {
    scale: 1,
    backgroundColor:"#fff"
  });
});
