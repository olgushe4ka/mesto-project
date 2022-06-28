export const cards = function () {
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

  ];

  const nameInput = document.querySelector('.edit-form__field_title');
  const linkInput = document.querySelector('.edit-form__field_link');
  const popupEdit = document.querySelector('.popup-edit');

  //открытие попапов
  function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
  }

  //закрытие попапов
  function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
  }

  const photoPopup = document.querySelector('.popup-photo');
  const gridCreateButton = document.querySelector('.edit-form__create-button');

  //Добавление фото
  function renderCard(imageName, imageLink) {
    const photoTemplate = document.querySelector('#photo-grid').content;
    const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
    const photoElement = photoItem.querySelector('.photo-grid__photo');


    photoItem.querySelector('.photo-grid__photo').src = imageLink;
    photoItem.querySelector('.photo-grid__name').textContent = imageName;

    photoItem.querySelector('.photo-grid__heart').addEventListener('click', function (evt) {
      evt.target.classList.toggle('photo-grid__heart_black');
    });

    photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', function () {
      photoItem.remove();
    });


    photoElement.addEventListener('click', function () {

      document.querySelector('.popup-photo__photo').src = imageLink;
      document.querySelector('.popup-photo__title').textContent = imageName;

      openPopup(photoPopup);

    });

    return photoItem;
  };


  function addCard(value, container) {
    const card = renderCard(value.name, value.link);
    container.prepend(card);
  }


  initialCards.forEach((item) => {
    const cards = document.querySelector('.photo-grid');
    addCard(item, cards);
  });


  gridCreateButton.addEventListener('click', function () {
    const cards = document.querySelector('.photo-grid');

    const card = renderCard(nameInput.value, linkInput.value);

    nameInput.value = '';
    linkInput.value = '';

    cards.prepend(card);

    closePopup(popupEdit);
  });



}();
