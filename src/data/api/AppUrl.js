class AppUrl {
    static baseUrl = "http://localhost:8000/api"
    static login = this.baseUrl + '/auth/login'
    static me = this.baseUrl + '/me'
    static logout = this.baseUrl + '/auth/logout'
    static dashboard = this.baseUrl + '/dashboard'
}
export default AppUrl