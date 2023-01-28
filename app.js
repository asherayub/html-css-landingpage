let navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", () => {
  let textState = navToggler.textContent;
  let nav = document.querySelector("nav");
  textState = textState === "menu" ? "close" : "menu";
  navToggler.textContent = textState;
  if (textState === "close") {
    nav.style.left = "0";
    document.body.style.overflowY = "hidden";
  } else {
    nav.style.left = "100%";
    document.body.style.overflowY = "auto";
  }
});
