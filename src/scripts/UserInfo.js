class UserInfo {
    constructor (nameSelector, aboutSelector) {
        this.nameUser = document.querySelector(nameSelector);
        this.aboutUser = document.querySelector(aboutSelector);
    }
    setUserInfo({ userName, userAbout}) {
        this.nameUser.textContent = userName;
        this.aboutUser.textContent = userAbout;
    }
    getUserInfo() {
        return {
            name: this.nameUser.textContent,
            about: this.aboutUser.textContent
        }
    }
}
export default UserInfo 