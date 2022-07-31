export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    userId,
    { handleDeleteClick, addLike, removeLike }
  ) {
    this._likes = data.likes;
    this._link = data.link;
    this._name = data.name;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._addLike = addLike;
    this._removeLike = removeLike;
    this._handleDeleteClick = handleDeleteClick;
  }
  _setEventListeners() {
    this._photo.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
    this._buttonLike.addEventListener("click", () => this._checkLike());
    this._element
      .querySelector(".photo-grid__delite-button")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });
  }
  _getElement() {

    const elementsCard = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return elementsCard;

  }

  generate() {
    this._element = this._getElement();
    this._element.querySelector(".photo-grid__name").textContent = this._name;
    this._buttonLike = this._element.querySelector(".photo-grid__heart");
    this._countLike = this._element.querySelector(".photo-grid__counter");
    this._photo = this._element.querySelector(".photo-grid__photo");
    this._deleteButton = this._element.querySelector(".photo-grid__delite-button");
    this._photo.alt = this._name;
    this._photo.src = this._link;
    this._countLike.textContent = this._likes.length;
    this._setEventListeners();
    this._element_place = this._element.querySelector(".photo-grid__item");

    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }
    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._buttonLike.classList.add("photo-grid__heart_black");
      }
    });
    return this._element;
  }
  deleteCard() {

    this._element_place.remove();
    this._element_place = null;
  };
  _checkLike() {
    if (this._buttonLike.classList.contains("photo-grid__heart_black")) {
      this._buttonLike.classList.remove("photo-grid__heart_black");
      this._removeLike();
    } else {
      this._buttonLike.classList.add("photo-grid__heart_black");
      this._addLike();
    }
  }
  refreshCount(data) {
    this._countLike.textContent = data.likes.length;
  }
}
