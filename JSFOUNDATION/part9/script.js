document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let changeText = document.getElementById("myParagraph");
    changeText.textContent = "The Text is Changed";
    // console.log(changeText);
  });

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList.firstElementChild);

    citiesList.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", function () {
  let type = document.getElementById("coffeeType");
  type.textContent = "Espresso";
  type.style.backgroundColor = "orange";
  type.style.padding = "2px";
});

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Egg";
  document.getElementById("shoppingList").appendChild(newItem);
});

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let removeChild = document.getElementById("taskList");
    removeChild.lastElementChild.remove();
  });

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hello Js");
  });

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You Have Selected : " + event.target.textContent);
  }
});
document
  .getElementById("feedbackForm")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    let display = document.getElementById("feedbackDisplay");
    display.textContent = `Your Feedback is : ${feedBack}`;
    display.style.color = "yellow";
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let description = document.getElementById("descriptionText");
    console.log(description);
    description.classList.toggle("highlight");
  });
