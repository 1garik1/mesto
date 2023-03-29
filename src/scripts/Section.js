//import Card  from "./Card.js";
class Section {
    constructor({data, renderer}, containerSelector){
       this._initialArray = data;
       this._renderer = renderer;
        
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.append(element)
    }
    clear () {
        this._container.innerHTML = '';
    }
    renderItems() {
        this.clear();
        this._initialArray.forEach((item) => {
            this._renderer(item)
        }); 
    };
}

export default Section;