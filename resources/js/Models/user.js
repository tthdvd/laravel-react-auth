class User {

    constructor() {
        this.init()
    }

    init() {
        this.id = Number(localStorage.getItem('userId'))
        this.name = localStorage.getItem('userName')
        this.email = localStorage.getItem('userEmail')
        this.loggedIn = localStorage.getItem('userLoggedIn')
    }

    /**
     *
     * @param data object
     * @param data.name string
     * @param data.email string
     * @param callback function
     */
    authenticated(data, callback) {
        localStorage.setItem('userId', data.id)
        localStorage.setItem('userName', data.name)
        localStorage.setItem('userEmail', data.email)
        localStorage.setItem('userLoggedIn', true)

        this.init()

        callback()
    }

    /**
     *
     * @return {boolean}
     */
    isLoggedIn() {
        return Boolean(this.loggedIn) === true
    }

    /**
     * Remove all user's data from local storage
     */
    destroy() {
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userLoggedIn')
    }

    /**
     *
     * @param callback function
     */
    logout(callback) {
        this.destroy()

        callback()
    }
}

export default new User()
