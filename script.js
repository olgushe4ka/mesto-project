let editButton = document.querySelector('.profile__edit-button');
let popupProfile = document.querySelector('.popup-profile');
let popupEdit = document.querySelector('.popup-edit');
let popupCloseButton = document.querySelector('.popup__close-icon');
let likeButton = document.querySelector('.photo-grid__heart');
let photoGrid = document.querySelector('.photo-grid');
let addButton = document.querySelector('.profile__plus-button');
let gridCreateButton = document.querySelector('.edit-form__create-button');
let popupCloseButton2 = document.querySelector('.edit-popup__close-icon');
let ProfileSaveButton = document.querySelector('.edit-form__save-button');
const photoPopup = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.photo-popup__close-icon');



console.log(photoGrid)

function openPopupProfile() {
  const nameValue = document.querySelector('.profile__name').textContent;
  const positionValue = document.querySelector('.profile__position').textContent;

  document.querySelector('.edit-form__field_name').value = nameValue;
  document.querySelector('.edit-form__field_position').value = positionValue;

  popupProfile.classList.add('popup_opened')
}
editButton.addEventListener('click', openPopupProfile);


function openPopupEdit() {
  popupEdit.classList.add('popup_opened')
}
addButton.addEventListener('click', openPopupEdit);


function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopupProfile);

popupCloseButton2.addEventListener('click', closePopupEdit);

popupPhotoCloseButton.addEventListener('click',
  function () {
    photoPopup.classList.remove('popup_opened');
  }
)


// function closePopupEdit() {
//   popupEdit.classList.remove('popup_opened');
// popup.style.display = "none";
// }





// Изменение профайла
function changeProfile(nameValue, positionValue) {
  document.querySelector('.profile__name').textContent = nameValue;
  document.querySelector('.profile__position').textContent = positionValue;
}

ProfileSaveButton.addEventListener('click', function () {

  const name = document.querySelector('.edit-form__field_name');
  const position = document.querySelector('.edit-form__field_position');

  changeProfile(name.value, position.value);

  name.value = '';
  position.value = '';

  closePopupProfile();
});



//Добавление фото
function addPhoto(titleValue, linkValue) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');


  photoItem.querySelector('.photo-grid__photo').src = linkValue;
  photoItem.querySelector('.photo-grid__name').textContent = titleValue;

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__heart_black');
  });


  photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', function () {
    photoItem.remove();
  });

  photoElement.addEventListener('click', function () {

    document.querySelector('.popup-photo__photo').src = linkValue;
    document.querySelector('.popup-photo__title').textContent = titleValue;

    photoPopup.classList.add('popup_opened');
  });



  photoGrid.prepend(photoItem);
}

gridCreateButton.addEventListener('click', function () {
  const title = document.querySelector('.edit-form__field_title');
  const link = document.querySelector('.edit-form__field_link');

  addPhoto(title.value, link.value);

  title.value = '';
  link.value = '';

  closePopupEdit();
});


//Добавление фото при загрузке
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

function createinitialCard(value) {
  const photoTemplate = document.querySelector('#photo-grid').content;
  const photoItem = photoTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const photoElement = photoItem.querySelector('.photo-grid__photo');


  photoItem.querySelector('.photo-grid__photo').src = value.link;
  photoItem.querySelector('.photo-grid__name').textContent = value.name;

  photoItem.querySelector('.photo-grid__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__heart_black');
  });

  photoItem.querySelector('.photo-grid__delite-button').addEventListener('click', function () {
    photoItem.remove();
  });


  photoElement.addEventListener('click', function () {

    document.querySelector('.popup-photo__photo').src = value.link;
    document.querySelector('.popup-photo__title').textContent = value.name;

    photoPopup.classList.add('popup_opened');
  });



return photoItem;
  };


  function addinitialCard(value, container) {
    const card = createinitialCard(value);
    container.append(card);
  }

  initialCards.forEach((item) => {
    const cards = document.querySelector('.photo-grid');
    addinitialCard(item, cards);
  });
