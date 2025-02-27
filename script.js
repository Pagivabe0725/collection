const collectionCreatorDisplayButton = document.getElementById(
  "own-collection-creator-display-button"
);
const collectionCreatorSection = document.getElementById(
  "own-collection-creator"
);

collectionCreatorDisplayButton.addEventListener("click", () => {
  collectionCreatorDisplayHandler();
});

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
