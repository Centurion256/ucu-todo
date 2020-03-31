
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);
    if (!(newElement instanceof HTMLElement))
    {
      throw new StepanError("Invalid newElement.");
    }
    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {
      if (!(parent instanceof HTMLElement) || parent == null)
      {
        throw new StepanError("No or invalid parent element."); //should remain unchecked
      }
      this.parent = parent;

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

    }
  
  static StepanError = class extends Error {
    constructor(errorMessage) {
      super(errorMessage); 
      this.name = "StepanError";
    }
  }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
