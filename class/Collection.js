export class Collection {
  /**
   *
   * @param {string} name the name of Collection
   * @param {string} theme  the theme of Collection
   * @param {string} date  the creation date of Collection
   * @param {Element} html the HTML element of Collection container
   */

  constructor(name, theme, date, html) {
    this.date = date;
    this.theme = theme;
    this.name = name;
    this.Elements = [];
    this.html = html;
  }

  /**
   * Returns an array containing each identifier.
   * @returns {Array<string>} An array of identifiers.
   */

  getKeys() {
    let helperArray = [];
    this.Elements.forEach((element) => {
      helperArray.push(...Object.keys(element));
    });
    return helperArray;
  }

  getNames(){
    let helperArray=[]
    this.Elements.forEach(element=>{
  [...Object.values(element)].forEach(names =>{
    helperArray.push(names.name)
  })
    })
    return helperArray
  }

  /**
   * Adds a new collection to the Elements array if the name is unique
   * @param {string} name The name of new Collection
   * @param {Element} HTML_Element the HTML element of Collection container
   */
  addToElements(id, name, HTML_Element) {
    console.log(this.getNames())
    if (!this.getKeys().includes(id)) {
      this.html.appendChild(HTML_Element);
      this.Elements.push({ [id]: { HTML_Element: HTML_Element, name: name } });
    }
  }

  /**
   * Deletes the element at the specified index in the elements array if the index exists.
   * @param {number} index The index of the element to delete.
   */
  deleteElement(id) {
    let index = this.getKeys(this.Elements).indexOf(id);
    this.html.removeChild(this.Elements[index][id].HTML_Element);
    this.Elements.splice(index, 1);
  }

  renameCollection(newName) {
    this.name = newName;
    this.html.getElementsByTagName("span")[1].textContent = this.name;
  }

  renameCollectionElement(id, newName) {
    let index = this.getKeys().indexOf(id);
    let currentElement = this.Elements[index][id].HTML_Element;
    this.Elements[index][id].name = newName;
    currentElement.getElementsByTagName("div")[0].textContent =
      this.Elements[index][id].name;
  }
}
