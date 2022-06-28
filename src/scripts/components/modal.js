// Изменение профайла
export const modal = function () {
  const ProfileSaveButton = document.querySelector('.edit-form__save-button');
  const namePopupEdit = document.querySelector('.edit-form__field_name');
  const positionPopupEdit = document.querySelector('.edit-form__field_position');
  const positionProfile = document.querySelector('.profile__position');
  const nameProfile = document.querySelector('.profile__name');
  const popupProfile = document.querySelector('.popup-profile');

  function changeProfile(nameValue, positionValue) {
    nameProfile.textContent = nameValue;
    positionProfile.textContent = positionValue;
  }

  ProfileSaveButton.addEventListener('click', function () {

    changeProfile(namePopupEdit.value, positionPopupEdit.value);

    namePopupEdit.value = '';
    positionPopupEdit.value = '';

    closePopup(popupProfile);
  });

//закрытие попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}



}();
