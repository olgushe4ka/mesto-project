import { PopupWithImage } from "./PopupWithImage";

export class Card {
  //static _template = document.querySelector("#photo-grid").content;

  constructor({ data, delClickHandler }, cardSelector) {
    this._data = data;
    this._template = document.querySelector(cardSelector).content;
    this._delClickHandler = delClickHandler;
  }

  _renderCard(imageName, imageLink, imageLike) {
    this.photoItem = this._template
      .querySelector(".photo-grid__item")
      .cloneNode(true);
    const photoElement = this.photoItem.querySelector(".photo-grid__photo");
    const buttonDelete = this.photoItem.querySelector(".photo-grid__delite-button");
    const buttonLike = this.photoItem.querySelector(".photo-grid__heart");

    this.photoItem.querySelector(".photo-grid__photo").src = imageLink;
    this.photoItem.querySelector(".photo-grid__name").textContent = imageName; // this._data.name;
    this.photoItem.querySelector(".photo-grid__counter").textContent = imageLike.length;
    this.photoItem.querySelector(".photo-grid__photo").alt = imageName;

    buttonDelete.addEventListener("click", (evt) => {
      this._handleDeleteIconClick();
    });

    photoElement.addEventListener("click", (evt) => {
      this._handleCardClick();
    });

    buttonLike.addEventListener("click", (evt) => {
      this._handleLikeClick();
    });

    return this.photoItem;
  }

  _handleCardClick = () => {
  };

  _handleLikeClick = () => {
    // ...что должно произойти при клике на лайк
  };

  _handleDeleteIconClick = () => {
    this.photoItem.remove();
  };
}





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
