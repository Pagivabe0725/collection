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
  getValueOfInputFieldsOfCollectionCreatorSection();
});

Array.from(collectionCreatorSection.getElementsByTagName("input")).forEach(
  (element, index) => {
    element.addEventListener("click", () => {
      removeemphasisOfInfalidInputFields(index);
    });
  }
);

const main = document.getElementById("own-main")

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
  for(let i = 0; i<args.length;i++){
    let containerSpan = document.createElement('span')
    let contentSpan = document.createElement('span')
    containerSpan.innerHTML=labels[i]+"&nbsp"
    contentSpan.innerHTML=args[i]
    elementDesigner(containerSpan,"col-4 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start")
    elementDesigner(contentSpan,"text-primary")
    containerSpan.appendChild(contentSpan)
    tRow.appendChild(containerSpan)
  }
  return tRow
}

///TODO
function createButtonsOfTitleRow(){
    let containerDiv = document.createElement('div')
    let button1 = document.createElement('button') 
    let button2 = document.createElement('button')
    elementDesigner(containerDiv,"col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-1") 
    elementDesigner(button1,"btn btn-light")
    elementDesigner(button2,"btn btn-light")
    button1.innerHTML='Átnevez'
    button2.innerHTML='Hozzáad'
    containerDiv.appendChild(button1)
    containerDiv.appendChild(button2)
    return containerDiv
}


let d = createCollectionContainer()
let r = createTitleRowOfCollection('alma','körte','szilva')
let b = createButtonsOfTitleRow()
r.appendChild(b)
d.appendChild(r)

main.appendChild(d)
