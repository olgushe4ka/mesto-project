




// export class Card {
//   // static _template = document.querySelector('#todo-item-template').content

//   constructor({data, delClickHandler, copyClickHandler, editClickHeandler}, todoSelector){
//       this._data = data;
//       this._template = document.querySelector(todoSelector).content
//       this._delClickHandler = delClickHandler;
//       this._copyClickHandler = copyClickHandler;
//       this._editClickHeandler = editClickHeandler;
//   }



//   createTodo(){
//       this.view = this._template.querySelector('.todo-item').cloneNode(true);
//       this.todoTaskText = this.view.querySelector('.todo-item__text');
//       const deletedTaskButton = this.view.querySelector('.todo-item__del');
//       const clonedTaskButton = this.view.querySelector('.todo-item__copy');
//       const editedTaskButton = this.view.querySelector('.todo-item__edit');

//       this.todoTaskText.textContent = this._data.name;


//       deletedTaskButton.addEventListener('click', (e) => {
//           this._delClickHandler(this);//не забыть передать аргументы
//       })

//       clonedTaskButton.addEventListener('click', (e) => {
//          this._copyClickHandler(this);
//       })

//       editedTaskButton.addEventListener('click', (event) => {
//           this._editClickHeandler(event, this)
//       })

//       return this.view;
//   }


//   getId(){
//       return this._data._id;
//   }

//   getData() {
//       return this._data;
//   }

//   setData(newData) {
//       this._data = newData;
//   }

//   remove() {
//       this.view.remove();
//       this.view = null;
//   }

// }











// // export class Card {
// //   constructor(data) {
// //     this._data = data; // ...данные карточки (включая информацию по лайкам)
// //   }

// //   handleCardClick = () => { //...что должно произойти при клике на картинку
// //   }

// //   handleLikeClick = (card) => {
// //     // ...что должно произойти при клике на лайк
// //   }

// //   handleDeleteIconClick = (card) => {
// //     //...что должно произойти при клике на удаление
// //   }
// // }


// // import { popupImage, popupElement, popupCloseButton } from '../utils/constants.js';

// // export default class Card {
// //   constructor(selector) {
// //     this._selector = selector;
// //   }

// //   _getElement() {
// //     const cardElement = document
// //       .querySelector(this._selector)
// //       .content
// //       .querySelector('.card')
// //       .cloneNode(true);

// //     return cardElement;
// //   }

// //   _handleOpenPopup() {
// //     popupImage.src = this._image;
// //     popupElement.classList.add('popup_is-opened');
// //   }

// //   _handleClosePopup() {
// //     popupImage.src = '';
// //     popupElement.classList.remove('popup_is-opened');
// //   }

// //   _setEventListeners() {
// //     this._element.addEventListener('click', () => {
// //       this._handleOpenPopup();
// //     });

// //     popupCloseButton.addEventListener('click', () => {
// //       this._handleClosePopup();
// //     });
// //   }
// // }
