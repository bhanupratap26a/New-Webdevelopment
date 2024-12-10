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
