class UserInfo {
    constructor ({profileName, profileJob}) {
        this._userNameElement = document.querySelector(profileName);
        this._userAboutElement = document.querySelector(profileJob);
    }
    getUserInfo() {
        return {
            userName: this._userNameElement.textContent,
            userAbout: this._userAboutElement.textContent
        }
    }
    setUserInfo({ userName, userAbout}) {
        this._userNameElement.textContent = userName;
        this._userAboutElement.textContent = userAbout;
    }
}
export default UserInfo 
