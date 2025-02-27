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
    elementDesigner(elemet,"form-control is-invalid bg-danger-subtle")
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


function elementDesigner(HTML_Element,style){
    if(HTML_Element instanceof Element && typeof style ==='string' ){
        HTML_Element.classList.add(...style.split(" "))
    }
    
}
