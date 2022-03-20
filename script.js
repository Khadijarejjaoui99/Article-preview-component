const show = document.querySelector("#show");
const share = document.getElementById("share");
const arrow = document.getElementById("arrow");

show.addEventListener("click", () => {
  if (share.style.visibility === "visible") {
    share.style.visibility = "hidden";
    show.style.backgroundColor = "hsl(210, 46%, 95%)";
    arrow.setAttribute("src", "images/icon-share.svg");
  } else {
    share.style.visibility = "visible";
    show.style.backgroundColor = "#6E8098";
    arrow.setAttribute("src", "images/icon-share-white.svg");
  }
});
