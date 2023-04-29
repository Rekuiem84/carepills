let boxImg = document.querySelector(".boite-logo img");
let boutonGout = document.querySelectorAll("form input");
let boutonMenthe = document.querySelector("#bouton-menthe");
let boutonFrais = document.querySelector("#bouton-frais");
let boutonFraise = document.querySelector("#bouton-fraise");
let boutonFramboise = document.querySelector("#bouton-framboise");
let boutonCitron = document.querySelector("#bouton-citron");
let boutonCharbon = document.querySelector("#bouton-charbon");
let texteGout = document.querySelector("h4");

boutonMenthe.addEventListener("click", () => {
  boxImg.src = "images/boite-menthe.png";
  texteGout.innerText = "Menthe";
  texteGout.style.color = "#8ced9e";
  texteGout.style.background = "transparent";
});
boutonFrais.addEventListener("click", () => {
  boxImg.src = "images/boite-glaciale.png";
  texteGout.innerText = "Menthe Fraiche";
  texteGout.style.color = "#a2d2ff";
  texteGout.style.background = "transparent";
});
boutonFraise.addEventListener("click", () => {
  boxImg.src = "images/boite-fraise.png";
  texteGout.innerText = "Fraise des bois";
  texteGout.style.color = "#ef77ea";
  texteGout.style.background = "transparent";
});
boutonFramboise.addEventListener("click", () => {
  boxImg.src = "images/boite-framboise.png";
  texteGout.innerText = "Framboise";
  texteGout.style.color = "#f04465";
  texteGout.style.background = "transparent";
});
boutonCitron.addEventListener("click", () => {
  boxImg.src = "images/boite-citron.png";
  texteGout.innerText = "Citron";
  texteGout.style.color = "#f5e56b";
  texteGout.style.background = "transparent";
});
boutonCharbon.addEventListener("click", () => {
  boxImg.src = "images/boite-charbon.png";
  texteGout.innerText = "Charbon";
  texteGout.style.color = "#888888";
});
