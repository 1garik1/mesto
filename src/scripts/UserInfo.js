class UserInfo {
    constructor ({nameSelector, aboutSelector}) {
        this._nameUser = document.querySelector(nameSelector);
        this._aboutUser = document.querySelector(aboutSelector);
    }
    setUserInfo({ userName, userAbout}) {
        this._nameUser.textContent = userName;
        this._aboutUser.textContent = userAbout;
    }
    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent,
        }
    }
}
export default UserInfo 