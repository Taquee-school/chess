
const app = document.getElementById("app");

function checkOrientation() {
  app.dataset.orientation = window.innerHeight > window.innerWidth ? "vertical" : "horizontal";
}

window.addEventListener("resize", checkOrientation);

window.addEventListener("DOMContentLoaded", () => {
  checkOrientation();
});