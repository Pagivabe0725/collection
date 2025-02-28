export  class Collection {

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


/**
 * Adds a new collection to the Elements array if the name is unique
 * @param {string} name The name of new Collection 
 * @param {Element} HTML_Element the HTML element of Collection container
 */
  addToElements(name,HTML_Element){
    if(!this.getKeys().includes(name.trim())){
        this.HTML_Element.appendChild(HTML_Element)
        this.Elements.push({[name]:HTML_Element})
    }
  }


 /**
  * Deletes the element at the specified index in the elements array if the index exists.
  * @param {number} index The index of the element to delete.
  */ 
  deleteElement(index){
    if (index < this.Elements.length) {
        const key = Object.keys(this.Elements[index])
        console.log(key)
        this.html.removeChild(this.Elements[index][key[0]]);
        this.Elements.splice(index, 1);
      }
  }


  renameCollection(newName){
    this.name=newName;
    this.html.getElementsByTagName('span')[1].textContent=this.name;
  }
}
