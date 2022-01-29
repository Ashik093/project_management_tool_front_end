class AppUrl {
    static baseUrl = "http://localhost:8000/api"
    static login = this.baseUrl + '/auth/login'
    static me = this.baseUrl + '/me'
    static logout = this.baseUrl + '/auth/logout'
    static dashboard = this.baseUrl + '/dashboard'
    static getAllUser = this.baseUrl + '/users'
    static storeUser = this.baseUrl + '/users'
}
export default AppUrl