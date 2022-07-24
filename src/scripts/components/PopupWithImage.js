import { Popup } from "./popup.js"


export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open({popupPhotoInput, popupTitleInput, imageLink, imageName }) {

    popupPhotoInput.src = imageLink;
    popupTitleInput.textContent = imageName;
    popupPhotoInput.alt = imageName;

    super.open()
  }

}



