const addProject = document.getElementById("addProject");
const form1 = document.querySelector(".form1");
const addP = document.getElementById("add");
const cancel = document.getElementById("cancel");

const title = document.getElementById("title");
const desc = document.getElementById("desc");

const noActive = document.querySelector(".noActive");
const noFinished = document.querySelector(".noFinished");

const activeButton = document.querySelector("#activeButton");
const finishedButton = document.querySelector("#finishedButton");

const details = { name: "Ashutosh Verma" };

let titleText = "";
let descText = "";
addProject.addEventListener("click", function () {
  console.log("Add Project button clicked");
  form1.classList.remove("hidden");
  console.log(window.localStorage.getItem("title"));
});

if (window.localStorage.getItem("title")) {
  document.querySelector(".h1Active").textContent =
    window.localStorage.getItem("title");
}
addP.addEventListener("click", function () {
  console.log("Add button clicked");
  noActive.classList.add("hidden");
  titleText = title.value;
  descText = desc.value;
  window.localStorage.setItem("title", JSON.stringify(titleText));
  document.querySelector(".h1Active").textContent =
    window.localStorage.getItem("title");
  document.querySelector(".pActive").textContent = descText;
  document.getElementById("finishedButton").style.display = "block";
});

cancel.addEventListener("click", function () {
  console.log("Cancel button clicked");
  form1.classList.add("hidden");
});

finishedButton.addEventListener("click", function () {
  console.log("Finish Button clicked");
  noActive.classList.remove("hidden");
  noFinished.classList.add("hidden");
  document.querySelector(".h1Active").textContent = "";
  document.querySelector(".pActive").textContent = "";
  document.querySelector(".h1Finished").textContent = titleText;
  document.querySelector(".pFinished").textContent = descText;
  document.getElementById("finishedButton").style.display = "none";
  document.getElementById("activeButton").style.display = "block";
});

activeButton.addEventListener("click", function () {
  console.log("Active Button clicked");
  noActive.classList.add("hidden");
  noFinished.classList.remove("hidden");
  document.querySelector(".h1Finished").textContent = "";
  document.querySelector(".pFinished").textContent = "";
  document.querySelector(".h1Active").textContent = titleText;
  document.querySelector(".pActive").textContent = descText;
  document.getElementById("activeButton").style.display = "none";
  document.getElementById("finishedButton").style.display = "block";
});
