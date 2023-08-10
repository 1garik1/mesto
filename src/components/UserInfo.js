class UserInfo {
    constructor ({profileName, profileJob, profileAvatar}) {
        this._userNameElement = document.querySelector(profileName);
        this._userAboutElement = document.querySelector(profileJob);
        this._userAvatarElement = document.querySelector(profileAvatar);
        
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
    setUserAvatar({userAvatarLink}) {
        this._userAvatarElement.src = userAvatarLink;
    }

    saveUserId(userId) {
        this._userId = userId;
      }
    
      getUserId() {
        return this._userId;
      }
        
    
}

export default UserInfo 