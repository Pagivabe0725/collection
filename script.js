import { Collection } from "./class/Collection.js";

const collectionCreatorDisplayButton = document.getElementById(
  "own-collection-creator-display-button"
);
const collectionCreatorSection = document.getElementById(
  "own-collection-creator"
);
collectionCreatorDisplayButton.addEventListener("click", () => {
  collectionCreatorDisplayHandler();
});

const collectionCreatorCreateButton = document.getElementById(
  "own-collection-creator-create-button"
);
collectionCreatorCreateButton.addEventListener("click", () => {
  createNewCollection();
});

Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
  (element, index) => {
    element.addEventListener("click", () => {
      removeemphasisOfInfalidInputFields(index);
    });
  }
);

const main = document.getElementById("own-main");

let idStart = 0;
let collectionArray = [];
const getNewID = function () {
  idStart++;
  return "r" + (idStart - 1);
};

/**
 * This function checks the display property of the collection creator section.
 * @returns {boolean} `true` if the collection creator section is visible, oherwise `false`
 */
function isCollectionCreatorVisible() {
  return collectionCreatorSection.classList.contains("d-flex");
}

/**
 * Deletes the values of input fields if the collection creator section is invisible.
 * {@link isCollectionCreatorVisible}
 */
function resetCollectionCreatorInputs() {
  const status = isCollectionCreatorVisible();
  if (status) {
    Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
      (element) => {
        element.value = "";
      }
    );
  }
}

/**
 * Changes the content of the collection creator button
 * Set it to `Új gyűjtemény létrehozása` if the collection creator section is invisible, otherwise `Mégsem`
 * {@link isCollectionCreatorVisible}
 */
function setCollectionCreatorDisplayButtonValue() {
  const status = isCollectionCreatorVisible();
  collectionCreatorDisplayButton.textContent = !status
    ? "Új gyűjtemény létrehozása"
    : "Mégsem";
}

/**
 * Toggles the visibility of collection creator section
 * {@link isCollectionCreatorVisible}
 */
function collectionCreatorDisplayOrNot() {
  const status = isCollectionCreatorVisible();
  collectionCreatorSection.classList.remove(status ? "d-flex" : "d-none");
  collectionCreatorSection.classList.add(status ? "d-none" : "d-flex");
}

/**
 * executes the following functions in order
 * {@link collectionCreatorDisplayOrNot}
 * {@link setCollectionCreatorDisplayButtonValue}
 * {@link resetCollectionCreatorInputs}
 */

function collectionCreatorDisplayHandler() {
  collectionCreatorDisplayOrNot();
  setCollectionCreatorDisplayButtonValue();
  resetCollectionCreatorInputs();
}

/**
 * Returns an array of invalid HTML input elements.
 * If no invalid elements are found, returns an empty array.
 * @returns {Array<Element>} An array of invalid input elements, or an empty array if none are found.
 */

function getInvalidInputFieldsOfCollectionCreatorSection() {
  let helperArray = [];
  Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
    (element) => {
      if (element.validity.valueMissing) {
        helperArray.push(element);
      }
    }
  );
  return helperArray;
}

/**
 * emphasis the invalid input fields provided in parameter
 * @param {Array<Element>} inputs An array of HTML input elements
 * {@link elementDesigner}
 */

function emphasisInvalidInputFields(inputs) {
  inputs.forEach((elemet) => {
    elementDesigner(elemet, "form-control is-invalid bg-danger-subtle");
  });
}

/**
 * Removes the emphasis from an invalid input field.
 * @param {Number} index The index of the current input element
 */

function removeemphasisOfInfalidInputFields(index) {
  let input = Array.from(
    collectionCreatorSection.getElementsByTagName("input")
  )[index];
  input.classList.remove("form-control");
  input.classList.remove("is-invalid");
  input.classList.remove("bg-danger-subtle");
}

/**
 * Returns an array of input values if they are valid
 * @returns {Array<string>} An array of valid input values
 */
function getValueOfInputFieldsOfCollectionCreatorSection() {
  console.log("bentvan");
  const invalidInputs = getInvalidInputFieldsOfCollectionCreatorSection();
  if (invalidInputs.length === 0) {
    console.log("megfelel");
    let helperArray = [];
    Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
      (element) => {
        helperArray.push(element.value);
      }
    );
    console.log(helperArray);
    return helperArray;
  } else {
    console.log("helytelen");
    emphasisInvalidInputFields(invalidInputs);
  }
}

/**
 * Adds each style from provided string to the given HTML element
 * @param {Element} HTML_Element The target HTML element
 * @param {String} style Concatenation of css class names (space-separated string)
 */

function elementDesigner(HTML_Element, style) {
  if (HTML_Element instanceof Element && typeof style === "string") {
    HTML_Element.classList.add(...style.split(" "));
  }
}

function isUniqueName(name) {
  for (let i = 0; i < collectionArray.length; i++) {
    console.log(collectionArray[i].name.trim());
    if (collectionArray[i].name.trim() === name.trim()) {
      return false;
    }
  }
  return true;
}

///TODO
function createCollectionContainer() {
  let container = document.createElement("div");
  elementDesigner(
    container,
    "container mt-2 border border-3 border-secondary rounded w-100"
  );
  return container;
}

///TODO
function createTitleRowOfCollection(...args) {
  const labels = ["Név:", "Témakör:", "Létrehozás:"];
  let tRow = document.createElement("div");
  elementDesigner(
    tRow,
    "row py-2 d-flex align-items-center border-bottom border-primary"
  );
  for (let i = 0; i < args.length; i++) {
    let containerSpan = document.createElement("span");
    let contentSpan = document.createElement("span");
    containerSpan.innerHTML = labels[i] + "&nbsp";
    contentSpan.innerHTML = args[i];
    elementDesigner(
      containerSpan,
      "col-4 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start"
    );
    elementDesigner(contentSpan, "text-primary");
    containerSpan.appendChild(contentSpan);
    tRow.appendChild(containerSpan);
  }
  return tRow;
}

///TODO
function createButtonsOfTitleRow() {
  let index = collectionArray.length;
  let containerDiv = document.createElement("div");
  let renameButton = document.createElement("button");
  let addButton = document.createElement("button");
  elementDesigner(
    containerDiv,
    "col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-1"
  );
  elementDesigner(renameButton, "btn btn-light");
  elementDesigner(addButton, "btn btn-light");
  renameButton.innerHTML = "Átnevez";
  renameButton.addEventListener("click", () =>
    createQuestionWindow("Átnevezés", "input", index, "Átnevezem", () => {
      renameCollection(index);
    })
  );
  addButton.innerHTML = "Hozzáad";
  addButton.addEventListener("click", () =>
    createQuestionWindow("Elem hozzáadása", "input", index, "Hozzáadom", () => {
      addElementToCollection(index);
    })
  );
  containerDiv.appendChild(renameButton);
  containerDiv.appendChild(addButton);
  return containerDiv;
}

///TODO
function createNewCollection() {
  const inputs = getValueOfInputFieldsOfCollectionCreatorSection();
  if (inputs && isUniqueName(inputs[0])) {
    let collection = createCollectionContainer();
    let titleRow = createTitleRowOfCollection(inputs[0], inputs[1], inputs[2]);
    let buttonDiv = createButtonsOfTitleRow();
    titleRow.appendChild(buttonDiv);
    collection.appendChild(titleRow);
    main.appendChild(collection);
    collectionArray.push(
      new Collection(inputs[0], inputs[1], inputs[2], collection)
    );
    collectionCreatorDisplayHandler()
    console.log(collectionArray);
    showAlert("Sikeresen létrehoztat a gyűjteményt", false);
  } else {
    if (!inputs) {
      showAlert("Hibásan tölötted ki a beviteli mezőket", true);
    } else {
      showAlert("Ez a név már foglalt", true);
    }
  }
}

//TODO
function createSpecialSelectList() {
  let i = document.createElement("i");
  let img = document.createElement("img");
  i.setAttribute("data-bs-toggle", "dropdown");
  i.setAttribute("aria-expanded", "false");
  i.setAttribute("role", "button");
  elementDesigner(
    i,
    "bg-light d-flex align-items-center p-2 rounded own-icon dropdown-toggle"
  );
  img.src = "./icons/arrow-down.svg";
  i.appendChild(img);
  return i;
}

///Todo
function createSpecialSelectListElements(id) {
  const options = ["Áthelyez", "Átnevez", "Töröl"];

  let ul = document.createElement("ul");
  elementDesigner(ul, "dropdown-menu");
  for (let i = 0; i < options.length; i++) {
    let li = document.createElement("li");
    elementDesigner(li, "dropdown-item");
    li.setAttribute("role", "button");
    li.innerHTML = options[i];
    if (i === 0) {
      li.addEventListener("click", () =>
        createQuestionWindow(
          "Elem Áthelyezése",
          "select",
          getCollectionByID(id),
          "Áthelyezem",
          () => {
            moveElement(getCollectionByID(id), id);
          }
        )
      );
    } else if (i === 1) {
      li.addEventListener("click", () =>
        createQuestionWindow(
          "Elem Átnevezése",
          "input",
          () => getCollectionByID(id),
          "Átnevezem",
          () => {
            renameCollectionElement(getCollectionByID(id), id);
          }
        )
      );
    } else {
      li.addEventListener("click", () =>
        createQuestionWindow(
          "Elem Törlése",
          "Biztosan törölni szeretnéd?",
          getCollectionByID(id),
          "Törlöm",
          () => {
            deleteCollectionElement(getCollectionByID(id), id);
          }
        )
      );
    }
    ul.appendChild(li);
  }
  return ul;
}

///Todo
function createCollectionElementRow(name, collectionIndex) {
  let eRow = document.createElement("div");
  let id = getNewID();
  elementDesigner(eRow, "row py-1 border-bottom border-secondary");
  let firstColumn = document.createElement("div");
  let secondColumn = document.createElement("div");
  firstColumn.innerHTML = name;
  elementDesigner(firstColumn, "col-6 d-flex align-items-center");
  elementDesigner(
    secondColumn,
    "col-6 d-flex align-items-center justify-content-end dropdown"
  );
  secondColumn.appendChild(createSpecialSelectList());
  secondColumn.appendChild(createSpecialSelectListElements(id));
  eRow.appendChild(firstColumn);
  eRow.appendChild(secondColumn);
  collectionArray[collectionIndex].addToElements(id, name, eRow);
}

///Todo
function createQuestionWindowTitle(title) {
  let windowTitle = document.createElement("div");
  windowTitle.innerHTML = title;
  windowTitle.id = "own-question-window-title";
  return windowTitle;
}

///Todo
function createQuestionWindowContent(content, collectionIndex) {
  let windowContantDiv = document.createElement("div");
  windowContantDiv.id = "own-question-window-content";
  let resultContent;
  if (content === "input") {
    resultContent = document.createElement("input");
  } else if (content === "select") {
    resultContent = createQuestionWindowSelectInput(collectionIndex);
  } else {
    let p = document.createElement("p");
    p.textContent = content;
    resultContent = p;
  }
  windowContantDiv.appendChild(resultContent);
  return windowContantDiv;
}

///Todo
function createQuestionWindowSelectInput(collectionIndex) {
  let content = document.createElement("select");
  for (let i = 0; i < collectionArray.length; i++) {
    if (i === collectionIndex) {
      continue;
    } else {
      let option = document.createElement("option");
      option.value = collectionArray[i].name;
      option.textContent = collectionArray[i].name;
      content.appendChild(option);
    }
  }
  content.id = "own-question-window-select";
  return content;
}

///Todo
function createQuestionWindowActionPart(buttonName, buttonFunction) {
  let actionContainer = document.createElement("div");
  actionContainer.id = "own-question-window-action";
  let backButton = document.createElement("button");
  let actionButton = document.createElement("button");
  elementDesigner(backButton, "btn btn-primary");
  elementDesigner(actionButton, "btn btn-primary");
  backButton.innerHTML = "Mégsem";
  actionButton.innerHTML = buttonName;
  backButton.addEventListener("click", () => {
    removeQuestionWindow();
  });
  actionButton.addEventListener("click", () => {
    buttonFunction();
  });
  actionContainer.appendChild(actionButton);
  actionContainer.appendChild(backButton);
  return actionContainer;
}
///Todo
function bluredBackground() {
  let blur = document.createElement("div");
  blur.id = "own-blur-box";
  document.body.append(blur);
}
///Todo
function createQuestionWindowContainer() {
  let widowContainerDiv = document.createElement("div");
  widowContainerDiv.id = "own-question-window-box";
  return widowContainerDiv;
}
///Todo
function removeQuestionWindow() {
  let blurBox = document.getElementById("own-blur-box");
  let questionWindow = document.getElementById("own-question-window-box");
  document.body.removeChild(blurBox);
  document.body.removeChild(questionWindow);
}
///Todo
function createQuestionWindow(
  title,
  inputType,
  collectionIndex,
  buttonName,
  func
) {
  bluredBackground();
  let container = createQuestionWindowContainer();
  container.appendChild(createQuestionWindowTitle(title));
  container.appendChild(
    createQuestionWindowContent(inputType, collectionIndex)
  );
  container.appendChild(createQuestionWindowActionPart(buttonName, func));
  document.body.appendChild(container);
}

///TODO
function renameCollection(index) {
  if (index < collectionArray.length) {
    let name = document
      .getElementById("own-question-window-content")
      .getElementsByTagName("input")[0].value;

    if (name && isUniqueName(name)) {
      collectionArray[index].renameCollection(name);
      removeQuestionWindow();
      showAlert("Sikeresen átnevezte a gyüjteményt", false);
    } else {
      if (!name) {
        showAlert("Nem hagyhatod üresen a mezőt", true);
      } else {
        showAlert("Ez a név már foglalt", true);
      }
    }
  }
}

function addElementToCollection(collectionIndex) {
  if (collectionIndex < collectionArray.length) {
    let name = document
      .getElementById("own-question-window-content")
      .getElementsByTagName("input")[0]
      .value.trim();
    if (name && !collectionArray[collectionIndex].getNames().includes(name)) {
      createCollectionElementRow(name, collectionIndex);
      removeQuestionWindow();

      showAlert("Sikeresen hozzáadtad az új elemet ", false);
    } else {
      if (!name) {
        showAlert("Nem hagyhatod üresen a mezőt", true);
      } else {
        showAlert("Ez a név már foglalt ", true);
      }
    }
  }
}

function renameCollectionElement(collectionIndex, id) {
  if (collectionIndex < collectionArray.length) {
    let name = document
      .getElementById("own-question-window-content")
      .getElementsByTagName("input")[0]
      .value.trim();
    console.log(!collectionArray[collectionIndex].getKeys().includes(id));
    if (
      id &&
      name &&
      collectionArray[collectionIndex].getKeys().includes(id) &&
      !collectionArray[collectionIndex].getNames().includes(name)
    ) {
      collectionArray[collectionIndex].renameCollectionElement(id, name);
      console.log(collectionArray);
      showAlert("Sikeresen Átnevezted az elemet", false);
      removeQuestionWindow();
    } else {
      if (!name) {
        showAlert("Nem hagyhatod üresen a mezőt", true);
      } else if (collectionArray[collectionIndex].getNames().includes(name)) {
        showAlert("Ez a név már foglalt ", true);
      }
    }
  } else {
    showAlert("Hiba lépett fel az elem átnevezése során", true);
  }
}

function deleteCollectionElement(collectionIndex, id) {
  if (collectionIndex < collectionArray.length) {
    collectionArray[collectionIndex].deleteElement(id);
    console.log(collectionArray);
    removeQuestionWindow();
    showAlert("Sikeresen törölted az elemet", false);
  } else {
    showAlert("Hiba lépet fel a törlés során", true);
  }
}

function getCollectionByName(name) {
  for (let i = 0; i < collectionArray.length; i++) {
    if (name === collectionArray[i].name) {
      return i;
    }
  }
  return null;
}

function getCollectionByID(id) {
  for (let i = 0; i < collectionArray.length; i++) {
    if (collectionArray[i].getKeys().includes(id)) {
      return i;
    }
  }
}

function moveElement(collectionIndex, id) {
  if (collectionArray.length <= 1) {
    removeQuestionWindow();
    showAlert("Nincs hova áthelyezni az elemet", true);
  }
  const place = document.getElementById("own-question-window-select").value;
  const HTML_Element = collectionArray[collectionIndex].deleteToMove(id);
  collectionArray[collectionIndex].deleteElement(id);
  console.log(HTML_Element);
  const name = HTML_Element.getElementsByTagName("div")[0].value;
  collectionArray[getCollectionByName(place)].addToElements(
    id,
    name,
    HTML_Element
  );
  removeQuestionWindow();
  showAlert("Sikeresen áthelyezted az elemet", false);
}

function createAlert(content, error) {
  let alert = document.createElement("div");
  alert.innerHTML = content;
  elementDesigner(alert, "alert d-block w-50 position-fixed mb-2");
  elementDesigner(alert, error ? "alert-danger" : "alert-success");
  return alert;
}

function showAlert(content, error) {
  const alert = createAlert(content, error);
  document.body.appendChild(alert);
  setTimeout(() => {
    document.body.removeChild(alert);
  }, 3000);
}
