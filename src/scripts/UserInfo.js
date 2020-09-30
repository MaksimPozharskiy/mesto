
export default class UserInfo {
  constructor({profileNameSelector, profileProfessionSelector}) {
    this._userName = document.querySelector(profileNameSelector);
    this._userProfession = document.querySelector(profileProfessionSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._userName.textContent,
      profession: this._userProfession.textContent
    }
    
    return userData;
  }

  setUserInfo({name, profession}) {
    this._userName.textContent =  name;
    this._userProfession.textContent = profession;
  }
}