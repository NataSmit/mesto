export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;                //отвечает за создание и отрисовку данных на странице
    
    this._container = document.querySelector(containerSelector);
    
  }

  renderItems() {                    
    this._initialArray.reverse().forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(item) {                        
    this._container.prepend(item);
  }
}