const landingPage = document.getElementById('landing-page');
const desc1 = document.getElementById('desc-1');
const desc2 = document.getElementById('desc-2');
const circle1 = document.getElementById('circle-1');
const mainPage = document.getElementById('main-page');
const headingMainPage = document.getElementById('heading');
const underConstruction = document.getElementById('under-construction');

// First sequence
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded');
  setTimeout(() => {
    desc1.style.visibility = "visible";
    desc1.style.animation = "1000ms ease-out appear";
  }, 2000);

  setTimeout(() => {
    desc2.style.visibility = "visible";
    desc2.style.animation = "1000ms ease-out appear";
  }, 4000);

  setTimeout(() => {
    circle1.style.visibility = "visible";
    circle1.style.animation = "1000ms ease-out appear";
  }, 6500);
});

// Second sequnce
circle1.addEventListener('click', function () {
  console.log('working');
  landingPage.style.animation = "1000ms ease-out disappear";
  setTimeout(() => {
    console.log("Clear the landingPage");
    landingPage.style.display = "none";
  }, 1000);

  setTimeout(() => {
    console.log("Appear");
    mainPage.style.animation = "1000ms ease-out appear";
    mainPage.style.display = "flex";
    setTimeout(() => {
      headingMainPage.style.transform = 'translateY(0%)';
      setTimeout(() => {
        underConstruction.firstElementChild.style.animation = "1000ms ease-out appear";
        underConstruction.firstElementChild.style.visibility = "visible";
        setTimeout(() => {
          underConstruction.lastElementChild.style.animation = "1000ms ease-out appear";
          underConstruction.lastElementChild.style.visibility = "visible";
        }, 1000);
      }, 380);
    }, 2500);
  }, 2000);
});