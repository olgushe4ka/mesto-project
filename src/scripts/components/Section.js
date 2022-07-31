export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }
renderItems(items) {
    items.forEach(item => this._renderer(item));
}
addItem (element, order = 'before') {
    order === 'before' ? this._container.prepend(element) : this._container.append(element)
}
}
