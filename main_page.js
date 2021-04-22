const menuBtn = document.body.querySelector(".header-button");
const headerNav = document.body.querySelector(".header-nav");
const menuBtnClose = document.body.querySelector(".header-button-close");
const mainContainer = document.body.querySelector(".main-container");

const filmContainer1 = document.body.querySelector(".film-container-1");
const filmContainer2 = document.body.querySelector(".film-container-2");
const filmContainer3 = document.body.querySelector(".film-container-3");
const filmContainer4 = document.body.querySelector(".film-container-4");
const filmContainer5 = document.body.querySelector(".film-container-5");
const filmContainer6 = document.body.querySelector(".film-container-6");

const filmLink1 = document.body.querySelector(".container-top-name-1");
const filmLink2 = document.body.querySelector(".container-top-name-2");
const filmLink3 = document.body.querySelector(".container-top-name-3");
const filmLink4 = document.body.querySelector(".container-top-name-4");
const filmLink5 = document.body.querySelector(".container-top-name-5");
const filmLink6 = document.body.querySelector(".container-top-name-6");

const steamLink1 = document.body.querySelector(".container-top-name-game-1");
const steamLink2 = document.body.querySelector(".container-top-name-game-2");
const steamLink3 = document.body.querySelector(".container-top-name-game-3");
const steamLink4 = document.body.querySelector(".container-top-name-game-4");
const steamLink5 = document.body.querySelector(".container-top-name-game-5");
const steamLink6 = document.body.querySelector(".container-top-name-game-6");

const steamOpener1 = document.body.querySelector(".steam-button-1");
const steamOpener2 = document.body.querySelector(".steam-button-2");
const steamOpener3 = document.body.querySelector(".steam-button-3");
const steamOpener4 = document.body.querySelector(".steam-button-4");
const steamOpener5 = document.body.querySelector(".steam-button-5");
const steamOpener6 = document.body.querySelector(".steam-button-6");

var windowObjectReference = null;

menuBtn.addEventListener("click", () => {
    headerNav.style.cssText = `
    top: 74px;
  `;

  menuBtnClose.style.cssText = `
    top: 0px;
  `;
  });

  menuBtnClose.addEventListener("click", () => {
    headerNav.style.cssText = `
    @media (max-width: 769px) {
    top: -999999px;}
  `;

  menuBtnClose.style.cssText = `
    top: -999999px;
  `;
  });

  filmContainer1.addEventListener("click", () => {
    window.open (`${filmLink1.href}`);
  });

  filmContainer2.addEventListener("click", () => {
    window.open (`${filmLink2.href}`);
  });

  filmContainer3.addEventListener("click", () => {
    window.open (`${filmLink3.href}`);
  });

  filmContainer4.addEventListener("click", () => {
    window.open (`${filmLink4.href}`);
  });

  filmContainer5.addEventListener("click", () => {
    window.open (`${filmLink5.href}`);
  });

  filmContainer6.addEventListener("click", () => {
    window.open (`${filmLink6.href}`);
  });

  steamOpener1.addEventListener("click", () => {
    window.open (`${steamLink1.href}`);
  });

  steamOpener2.addEventListener("click", () => {
    window.open (`${steamLink2.href}`);
  });

  steamOpener3.addEventListener("click", () => {
    window.open (`${steamLink3.href}`);
  });

  steamOpener4.addEventListener("click", () => {
    window.open (`${steamLink4.href}`);
  });

  steamOpener5.addEventListener("click", () => {
    window.open (`${steamLink5.href}`);
  });

  steamOpener6.addEventListener("click", () => {
    window.open (`${steamLink6.href}`);
  });
