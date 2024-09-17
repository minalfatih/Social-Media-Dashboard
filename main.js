let main = document.querySelector("main");
let toggel = document.querySelector(".toggel");
let change = document.querySelector(".change");
let card = document.querySelectorAll(".card");
let textColor = document.querySelectorAll(".textColor");
let textColor2 = document.querySelectorAll(".textColor2");
let total = document.querySelector(".total");
let attribution = document.querySelector(".attribution");

let check = true;
toggel.onclick = function () {
  if (check === true) {
    change.style.cssText = "left: 55%;";
    document.body.style.backgroundColor = "var(--White)";
    document.body.classList.add("active");
    attribution.style.color = "var(--Very-Dark-Blue1)";
    toggel.style.cssText =
      "background-image: linear-gradient(to right, var(--Toggle2), var(--Toggle2))";
    change.style.backgroundColor = "var(--Very-Pale-Blue)";
    if (window.innerWidth === 650) {
      total.style.cssText =
        "border-bottom: 1.5px solid var(--Very-Dark-Blue3);";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "var(--Light-Grayish-Blue)";
    }
    for (let i = 0; i < textColor.length; i++) {
      textColor[i].style.color = "var(--Very-Dark-Blue3)";
    }
    for (let i = 0; i < textColor2.length; i++) {
      textColor2[i].style.color = "var(--Dark-Grayish-Blue)";
    }
    check = false;
  } else {
    change.style.cssText = "left: 3px";
    document.body.style.backgroundColor = "var(--Very-Dark-Blue1)";
    document.body.classList.remove("active");
    attribution.style.color = "var(--White)";
    toggel.style.cssText =
      "background-image: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));";
    change.style.backgroundColor = "#343956";
    if (window.innerWidth === 650) {
      total.style.cssText =
        "border-bottom: 1.5px solid hsl(230deg 22% 74% / 30%);";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "var(--Dark-Desaturated-Blue)";
    }
    for (let i = 0; i < textColor.length; i++) {
      textColor[i].style.color = "var(--White)";
    }
    for (let i = 0; i < textColor2.length; i++) {
      textColor2[i].style.color = "var(--Toggle2)";
    }
    check = true;
  }
  return change;
};

let faceNum = document.querySelector(".faceNum");
let twitNum = document.querySelector(".twitNum");
let instNum = document.querySelector(".instNum");
let youtNum = document.querySelector(".youtNum");

faceNum.textContent = "1900";
let count1 = setInterval(countFacebook, 10);
function countFacebook() {
  faceNum.innerHTML++;
  if (faceNum.innerHTML === "1987") {
    clearInterval(count1);
  }
}
twitNum.textContent = "1000";
let count2 = setInterval(countTwitter, 10);
function countTwitter() {
  twitNum.innerHTML++;
  if (twitNum.innerHTML === "1044") {
    clearInterval(count2);
  }
}
instNum.textContent = "00";
let count3 = setInterval(countInstagram, 10);
function countInstagram() {
  instNum.innerHTML++;
  if (instNum.innerHTML === "11") {
    clearInterval(count3);
  }
}
youtNum.textContent = "8000";
let count4 = setInterval(countYouTube, 10);
function countYouTube() {
  youtNum.innerHTML++;
  if (youtNum.innerHTML === "8239") {
    clearInterval(count4);
  }
}
