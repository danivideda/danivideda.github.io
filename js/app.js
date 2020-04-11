// First sequence
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded');
  setTimeout(() => {
    document.getElementById('desc-1').style.visibility = "visible";
    document.getElementById('desc-1').style.animation = "1000ms ease-out appear";
  }, 2000);

  setTimeout(() => {
    document.getElementById('desc-2').style.visibility = "visible";
    document.getElementById('desc-2').style.animation = "1000ms ease-out appear";
  }, 4000);

  setTimeout(() => {
    document.getElementById('circle-1').style.visibility = "visible";
    document.getElementById('circle-1').style.animation = "1000ms ease-out appear";
  }, 6500);
});

const landingPage = document.getElementById('landing-page');
const mainPage = document.getElementById('main-page');
const circle1 = document.getElementById('circle-1');

circle1.addEventListener('click', function () {
  console.log('working');
  landingPage.style.animation = "1000ms ease-out disappear";
  // setTimeout(() => {
  //   landingPage.style.display = "none";
  //   console.log("second loop loaded");
  //   mainPage.style.animation = "1000ms ease-out appear";
  //   mainPage.style.display = "relative";
  //   setTimeout(() => {
  //     console.log("third loop loaded");
  //     document.getElementById('under-construction').style.animation = "1000ms ease-out appear";
  //     document.getElementById('under-construction').style.visibility = "visible";
  //   }, 2000);
  // }, 1000);
  setTimeout(() => {
    console.log("Clear the landingPage");
    landingPage.style.display = "none";
  }, 1000);


  setTimeout(() => {
    console.log("Appear");
    mainPage.style.animation = "1000ms ease-out appear";
    mainPage.style.display = "flex";
    setTimeout(() => {
      document.getElementById('heading').style.transform = 'translateY(0%)';
      setTimeout(() => {
        document.getElementById('under-construction').firstElementChild.style.animation = "1000ms ease-out appear";
        document.getElementById('under-construction').firstElementChild.style.visibility = "visible";
        setTimeout(() => {
          document.getElementById('under-construction').lastElementChild.style.animation = "1000ms ease-out appear";
          document.getElementById('under-construction').lastElementChild.style.visibility = "visible";
        }, 1000);
      }, 380);
    }, 2500);
  }, 2000);
});