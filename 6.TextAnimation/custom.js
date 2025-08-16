const breakText = () => {
  const h1 = document.querySelector("#txtAnimation");
  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");
  let clutter = "";
  const halfValue = Math.floor(splittedText.length / 2);
  console.log("half", halfValue);
  splittedText.forEach((el, ind) => {
    if (ind < halfValue) {
      clutter += `<span class="startingText">${el}</span>`;
    } else {
      clutter += `<span class="endingText">${el}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakText();

gsap.from("#txtAnimation .startingText", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("#txtAnimation .endingText", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
