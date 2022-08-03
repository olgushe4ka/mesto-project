export default class UserInfo {
  constructor(userName, userAbout, userAvatar) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._avatarUser = userAvatar;
    this._name = "";
    this._about = "";
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
  }

  updateUserInfo = () => {
    this._userName.textContent = this._name;
    this._userAbout.textContent = this._about;
  };

  setAvatar(data) {
    this._avatarUser.src = data.avatar;
  }
}
