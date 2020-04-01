// Will render
// <li class="">
//   <div class="view">
//     <input class="toggle" type="checkbox">
//     <label>TODO 1</label>
//     <button class="destroy"></button>
//   </div>
//   <input class="edit" value="TODO 1">
// </li>

import Stepan from '/src/lib/stepan.js';

export default class TodoItem extends Stepan.Component {
  render({isDone, title}) { // render will always accept data to render


    // TODO: Input must be checked if todo item is done

    //try-catch is used to properly handle incorrect/unimportant input.
    try {
      //Get an iterator over all completed todos:
      let todos = this.parent.querySelectorAll("li.completed").values(); 
      for (let todo of todos) {
        //Change to the "label" node. There is only one per li.
        if (todo == null)
          throw new Error("Todo is empty");
        
        let label = todo.querySelector("div > label");
        if (label == null)
          throw new Error("Label doesn't exist");

        if (label.textContent == title) //If the titles are equal, so are the TODO items.
          throw new Error(`\"${title}\" TODO element has already been completed.`);
      }
      const rootElement = Stepan.createElement('li', this.parent, { class: isDone && 'completed' });
      const todoViewContainer = Stepan.createElement('div', rootElement, { class: 'view' });
      const checkboxNode = Stepan.createElement('input', todoViewContainer, {class: "toggle", type: "checkbox"});
      if (isDone)
        checkboxNode.defaultChecked = true; 

      Stepan.createElement('label', todoViewContainer, {innerText: title});
      Stepan.createElement('button', todoViewContainer, {class: "destroy"});
      Stepan.createElement('input', todoViewContainer, { class: "edit", value: title });
  
      return rootElement

    } catch (error) {
      console.log(error); //display the error on the console, for clarity and debugging purposes.
      return null;
    }
  }
}
