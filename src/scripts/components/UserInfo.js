export class UserInfo {
  constructor(userName, userAbout) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._name = "";
    this._about = "";
  }

  updateUserInfo = () => {
    this._userName.textContent = this._name;
    this._userAbout.textContent = this._about;
  };

  getUserInfo = () => {
    return {
      name: this._name,
      about: this._about
    };
  };

  setUserInfo = (newName, newAbout) => {
    this._name = newName;
    this._about = newAbout;
  }
}
