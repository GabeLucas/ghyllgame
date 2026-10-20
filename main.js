document.addEventListener("DOMContentLoaded", () => {
  const shots = Array.from(document.querySelectorAll(".shot"));
  let i = 0;
  requestAnimationFrame(() => document.body.classList.add("is-on"));
  if (shots.length < 2) return;
  setInterval(() => {
    shots[i].classList.remove("is-on");
    i = (i + 1) % shots.length;
    shots[i].classList.add("is-on");
  }, 9000);
});
