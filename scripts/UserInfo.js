class UserInfo {
    constructor (nameSelector, aboutSelector) {
        this.nameUser = document.querySelector(nameSelector);
        this.aboutUser = document.querySelector(aboutSelector);
    }
    setUserInfo() {
        this.nameUser.textContent = data.name;
        this.aboutUser.textContent = data.about;
    }
    getUserInfo() {
        return {
            name: this.nameUser.textContent,
            about: this.aboutUser.textContent,
        }
    }
}
export default UserInfo 