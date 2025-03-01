import { Collection } from "./class/Collection.js";

/**
 *Contains the `HTML` element of collection creator display `<button>`
 * @type {HTMLElement}
 */
const collectionCreatorDisplayButton = document.getElementById(
  "own-collection-creator-display-button"
);
/**
 *Contains the `HTML` element of collection creator `section`
 * @type {HTMLElement}
 */
const collectionCreatorSection = document.getElementById(
  "own-collection-creator"
);

/**
 * Handles the `click` event on the collection creator display `<button>`
 * {@link collectionCreatorDisplayHandler}
 */
collectionCreatorDisplayButton.addEventListener("click", () => {
  collectionCreatorDisplayHandler();
});

/**
 *Contains the `HTML` element of collection creator create `<button>`
 * @type {HTMLElement}
 */
const collectionCreatorCreateButton = document.getElementById(
  "own-collection-creator-create-button"
);

/**
 * Handles the `click` event on the collection creator create `<button>`
 * {@link createNewCollection}
 */
collectionCreatorCreateButton.addEventListener("click", () => {
  createNewCollection();
});

/**
 * Selects all `<input>` element of collection creator secion and handles the `input` event on them
 * {@link removeemphasisOfInfalidInputFields}
 */

Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
  (element, index) => {
    element.addEventListener("input", () => {
      removeemphasisOfInfalidInputFields(index);
    });
  }
);

/**
 * Contains the `HTML` element of `<main>`
 * @type {HTMLElement}
 */

const main = document.getElementById("own-main");

/**
 * A unique ID assigned to each elementRow.
 * This variable increments each time a new elementRow is created.
 * @type {number}
 */

let idStart = 0;

/**
 * Array of collection objects
 * {@type {Collection[]}}
 */
let collectionArray = [];

/**
 * It is `true` if the body do not contains an alert element,otherwise `false`
 * @type {boolean}
 */
let alertDisplayPermission = true;

/**
 * It is `true` if the body do not contains a questionWindow element,otherwise `false`
 * @type {boolean}
 */

let questionWindowPermission = true;

/**
 * this function is responible for returning a unique id and increments the idStart variable
 * @returns {string} the generated uique id
 */
const getNewID = function () {
  idStart++;
  return "r" + (idStart - 1);
};

/**
 * This function checks the display property of the collection creator section.
 * @return {boolean} `true` if the collection creator section is visible, otherwise `false`
 */
function isCollectionCreatorVisible() {
  return collectionCreatorSection.classList.contains("d-flex");
}

/**
 * Deletes the values of `<input>` fields if the collection creator section is invisible.
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
 * Changes the content of the collection creator `<button>`
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
 * Returns an `array` of invalid `HTML` `<input>` elements.
 * If no invalid elements are found, returns an empty `array`.
 * @returns {HTMLElement[]} An `array` of invalid `<input>` elements, or an empty array if none are found.
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
 * emphasis the invalid `<input>` fields provided in parameter
 * @param {Array<Element>} inputs An `array` of `HTML` `<input>` elements
 * {@link elementDesigner}
 */

function emphasisInvalidInputFields(inputs) {
  inputs.forEach((elemet) => {
    elementDesigner(elemet, "form-control is-invalid bg-danger-subtle");
  });
}

/**
 * Removes the emphasis from an invalid `<input>` field.
 * @param {Number} index The index of the current `<input>` element
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
 * Returns an `array` of `<input>` values if they are valid
 * @returns {String[]} An `array` of valid `<input>` values
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
 * Adds each style from provided string to the given `HTML` element
 * @param {Element} HTML_Element The target `HTML` element
 * @param {String} style Concatenation of `css class` names (space-separated string)
 */

function elementDesigner(HTML_Element, style) {
  if (HTML_Element instanceof Element && typeof style === "string") {
    HTML_Element.classList.add(...style.split(" "));
  }
}

/**
 * Checks if the name parameter is unique in the collectionArray list
 * @param {string} name
 * @returns {boolean} `true` if name is unique, otherwise `false`
 */

function isUniqueName(name) {
  for (let i = 0; i < collectionArray.length; i++) {
    console.log(collectionArray[i].name.trim());
    if (collectionArray[i].name.trim() === name.trim()) {
      return false;
    }
  }
  return true;
}

/**
 *Creates an `HTML` element that serves as the container for a collection.
 * @returns  {HTMLElement} the created container element
 * @ {@link elementDesigner}
 */
function createCollectionContainer() {
  let container = document.createElement("div");
  elementDesigner(
    container,
    "container mt-2 border border-3 border-secondary rounded w-100"
  );
  return container;
}

/**
 * Creates an `HTML` element that serves as the title row of collection
 * @param  {...string} args The `<span>` values for title row
 * @returns {HTMLElement} the generated title row element
 * {@link elementDesigner}
 */

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
      "col-4 col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start"
    );
    elementDesigner(contentSpan, "text-primary");
    containerSpan.appendChild(contentSpan);
    tRow.appendChild(containerSpan);
  }
  return tRow;
}

/**
 * Creates a `<div>` element that contains three `<button>` elements
 * Adds handlers to these `<buttons>`
 * @returns {HTMLElement} created `<div>` element
 * {@link elementDesigner}
 * {@link createQuestionWindow}
 * {@link renameCollection}
 * {@link addElementToCollection}
 * {@link setPicture}
 */
function createButtonsOfTitleRow() {
  let index = collectionArray.length;
  let containerDiv = document.createElement("div");
  let renameButton = document.createElement("button");
  let addButton = document.createElement("button");
  let pictureButton = document.createElement("label");
  elementDesigner(
    containerDiv,
    "col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end gap-1"
  );
  elementDesigner(renameButton, "btn btn-light");
  elementDesigner(addButton, "btn btn-light");
  elementDesigner(pictureButton, "btn btn-light");
  renameButton.innerHTML = "Átnevez";
  pictureButton.innerHTML = "Kép";
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
  pictureButton.addEventListener("click", () => {
    createQuestionWindow("Kép linkje", "input", index, "Hozzáadom", () => {
      setPicture(index);
    });
  });
  containerDiv.appendChild(renameButton);
  containerDiv.appendChild(addButton);
  containerDiv.appendChild(pictureButton);
  return containerDiv;
}

/**
 * Creates a `<div>` element that contains a picture with the provided `src` attributes
 * @param {sring} src the `URL` of the `<img>` 
 * @returns {HTMLElement} the created div
 */

function pictureCreator(src) {
  const containerDiv = document.createElement("div");
  elementDesigner(
    containerDiv,
    "d-flex row align-items-center justify-content-center border-bottom border-secondary py-2"
  );
  const img = document.createElement("img");
  elementDesigner(img, "own-collection-img");
  img.src = src;
  img.alt = "Hiba a kép megadása során";
  containerDiv.appendChild(img);
  return containerDiv;
}

/**
 * This function sends the `src` atribute of the Collection 'class' if that is exist 
 * otherwise send an `<img>` element with this attribute 
 * @param {number} collectionIndex the index of current collection
 * {@link removeQuestionWindow}
 * {@link showAlert}
 * {@link showAlert}
 */

function setPicture(collectionIndex) {
  let src = document
    .getElementById("own-question-window-content")
    .getElementsByTagName("input")[0].value;
  console.log(src);
  if (!collectionArray[collectionIndex].src) {
    collectionArray[collectionIndex].setCollectionPicture(
      src,
      pictureCreator(src)
    );
    removeQuestionWindow();
    showAlert("A képet sikeresen beállítottad");
  } else {
    collectionArray[collectionIndex].setCollectionPicture(src, undefined);
    removeQuestionWindow();
    showAlert("A képet sikeresen módosítottad");
  }
}

/**
 * Creates an `HTML` element that is represent a collection container
 * and adds a new collection to the `collectionArray` list
 * {@link createCollectionContainer}
 * {@link createTitleRowOfCollection}
 * {@link createButtonsOfTitleRow}
 * {@link collectionCreatorDisplayHandler}
 * {@link showAlert}
 */
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
    collectionCreatorDisplayHandler();
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


/**
 * Creates a special `dropdown list`as an `HTML` element 
 * @returns {HTMLElement} the created `dropdown list`
 * {@link elementDesigner}
 */

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

/**
 * Creates the `options` for the special `dropdown list`
 * and adds the appropriate  `eventListener` to them
 * @param {string} id the unique id of the current row
 * @returns {HTMLElement} an `HTML` `<ul>` element
 * {@link elementDesigner}
 * {@link createQuestionWindow}
 * {@link getCollectionByID}
 * {@link moveElement}
 * {@link renameCollectionElement}
 * {@link deleteCollectionElement}
 */
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

/**
 * creates a row that is represent an element of collection.
 * and adds it to the collection
 * @param {string} name the content of `HTML` element.
 * @param {number} collectionIndex the index of current collection.
 * {@link getNewID}
 * {@link elementDesigner}
 * {@link createSpecialSelectList}
 * {@link createSpecialSelectListElements}
 */
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

/**
 * creates the title section of pop-up element
 * @param {string} title the title of the pop-up
 * @returns {HTMLElement} a `<div>` that contains the title 
 */
function createQuestionWindowTitle(title) {
  let windowTitle = document.createElement("div");
  windowTitle.innerHTML = title;
  windowTitle.id = "own-question-window-title";
  return windowTitle;
}

/**
 * Creates the content section of pop-up element
 * @param {HTMLElement} content a keyword selects the correct conttent type 
 * @param {number} collectionIndex the index of the current collection
 * @returns {HTMLElement} the created content section element
 * {@link createQuestionWindowSelectInput}
 */
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

/**
 * Creates the `<select>` section of the pop-up element
 * @param {number} collectionIndex the index of the current collection
 * @returns {HTMLElement} the created `<select>`
 */
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

/**
 * Create the interactive section of pop-up element
 * @param {string} buttonName the content of button 
 * @param {Function} buttonFunction the function that will be executed when the button is clicked.
 * @returns {HTMLElement} a `<div>` that is contains the action buttons.
 * {@link elementDesigner}
 * {@link removeQuestionWindow}
 */
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
/**
 * Adds a blurred `<div>` to the body with maximum width and height
 */
function bluredBackground() {
  let blur = document.createElement("div");
  blur.id = "own-blur-box";
  document.body.append(blur);
}
/**
 * Creates the container section of pop-up element
 * @returns {HTMLElement} a `<div>` with the appropriate style
 */
function createQuestionWindowContainer() {
  let widowContainerDiv = document.createElement("div");
  widowContainerDiv.id = "own-question-window-box";
  return widowContainerDiv;
}

/**
 * Removes the pop-up element from the body
 */

function removeQuestionWindow() {
  let blurBox = document.getElementById("own-blur-box");
  let questionWindow = document.getElementById("own-question-window-box");
  document.body.removeChild(blurBox);
  document.body.removeChild(questionWindow);
  questionWindowPermission = true;
}

/**
 * Creates a pop-up element
 * and adds to body
 * @param {string} title the title of pop-up element
 * @param {string} inputType the keyword that select the correct input type
 * @param {number} collectionIndex the index of current collection
 * @param {string} buttonName the content of `<button>` element
 * @param {Function} func the function that will be executed when the button is clicked
 * {@link createQuestionWindowContainer}
 * {@link createQuestionWindowTitle}
 * {@link createQuestionWindowContent}
 * {@link createQuestionWindowActionPart}
 */
function createQuestionWindow(
  title,
  inputType,
  collectionIndex,
  buttonName,
  func
) {
  if (questionWindowPermission) {
    questionWindowPermission = false;
    bluredBackground();
    let container = createQuestionWindowContainer();
    container.appendChild(createQuestionWindowTitle(title));
    container.appendChild(
      createQuestionWindowContent(inputType, collectionIndex)
    );
    container.appendChild(createQuestionWindowActionPart(buttonName, func));
    document.body.appendChild(container);
  }
}

/**
 * Renames the current collection
 * @param {number} collectionIndex the index of the 
 * {@link removeQuestionWindow}
 * {@link showAlert}
 */
function renameCollection(collectionIndex) {
  if (collectionIndex < collectionArray.length) {
    let name = document
      .getElementById("own-question-window-content")
      .getElementsByTagName("input")[0].value;

    if (name && isUniqueName(name)) {
      collectionArray[collectionIndex].renameCollection(name);
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

/**
 * Adds a new element to the current collection
 * @param {number} collectionIndex the index off current collection 
 * {@link createCollectionElementRow}
 * {@link removeQuestionWindow}
 * {@link showAlert}
 */

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

/**
 * Renames an element of the current collection
 * @param {number} collectionIndex the index of current collection 
 * @param {string} id the id of the selected element 
 * {@link showAlert}
 * {@link removeQuestionWindow}
 */

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

/**
 * Delete the selected element from the current collection
 * @param {number} collectionIndex the index of the current collection 
 * @param {string} id the id of the selected element 
 * {@link removeQuestionWindow}
 * {@link showAlert}
 */

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

/**
 * Returns the index of the collection that is contains the searched name
 * @param {string} name the searched name
 * @returns {number} the index of the collection with the searched name
 */

function getCollectionByName(name) {
  for (let i = 0; i < collectionArray.length; i++) {
    if (name === collectionArray[i].name) {
      return i;
    }
  }
  return null;
}

/**
 * Returns the index of the collection that contains the element id
 * @param {string} id the id of the selected element
 * @returns {number} the index of the collection
 */

function getCollectionByID(id) {
  for (let i = 0; i < collectionArray.length; i++) {
    if (collectionArray[i].getKeys().includes(id)) {
      return i;
    }
  }
}


/**
 * Moves the selected element from the current collection to the selected collection
 * @param {number} collectionIndex the index of the current collection 
 * @param {string} id the id of the selected element
 */

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

/**
 * Creates a alert box with the given content
 * @param {string} content the conent of alert box
 * @param {boolean} error if `true` the alert box will be success message,
 * otherwise will be danger message  
 * @returns {HTMLElement} the alert box
 */

function createAlert(content, error) {
  let alert = document.createElement("div");
  alert.innerHTML = content;
  elementDesigner(alert, "alert d-block w-50 position-fixed mb-2");
  elementDesigner(alert, error ? "alert-danger" : "alert-success");
  return alert;
}


/**
 * display the alert on the screen and then removes it
 * @param {string} content the conent of alert box
 * @param {boolean} error if `true` the alert box will be success message,
 */
function showAlert(content, error) {
  if (alertDisplayPermission) {
    const alert = createAlert(content, error);
    document.body.appendChild(alert);
    alertDisplayPermission = false;
    setTimeout(() => {
      document.body.removeChild(alert);
      alertDisplayPermission = true;
    }, 2000);
  }
}
