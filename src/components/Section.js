
class Section {
    constructor({items, renderer}, containerSelector){
       this._items = items;
       this._renderer = renderer;
        
        this._containerElement = document.querySelector(containerSelector);
    }
    addNewItem(item) {
        this._containerElement.prepend(item);
    }
    addItem(item) {
        this._containerElement.append(item);
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
        })

    };
}

export default Section;