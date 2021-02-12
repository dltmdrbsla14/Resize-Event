
const body = document.querySelector("body");

function resized() {
  if (window.innerWidth > 700) {
    body.className = "orange";
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    body.className = "yellowgreen";
  } else {
    body.className = "skyblue";
  }
}

window.addEventListener("resize", resized);