export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;                         //отвечает за создание и отрисовку данных на странице
    this._container = document.querySelector(containerSelector);
    
  }

  renderItems(servercards, userID) {                    
    servercards.reverse().forEach((item) => {
        this._renderer(item, userID);
    })
  }

  addItem(item) {                        
    this._container.prepend(item);
  }
}