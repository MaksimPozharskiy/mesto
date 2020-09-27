import { construct } from "core-js/fn/reflect"

export default class UserInfo {
  constructor({userName, userProfession}) {
    this._userName = userName;
    this._userProfession = userProfession;
  }

  getUserInfo() {
    const userData = {
      name: this._userName,
      profession: this._userProfession
    }
    return userData;
  }

  setUserInfo({name, profession}) {
    this._userName = name;
    this._userProfession = profession;
  }
}