class AppUrl {
    static baseUrl = "http://localhost:8000/api"
        //static baseUrl = "https://apipmt.the-ashikur.com/api"
    static login = this.baseUrl + '/auth/login'
    static me = this.baseUrl + '/me'
    static logout = this.baseUrl + '/auth/logout'
    static dashboard = this.baseUrl + '/dashboard'
        //user
    static getAllUser = this.baseUrl + '/users'
    static storeUser = this.baseUrl + '/users'
    static deleteUser = this.baseUrl + '/users/delete/'
        //department
    static getAllDepartment = this.baseUrl + '/department'
    static storeDepartment = this.baseUrl + '/department'
    static deleteDepartment = this.baseUrl + '/department/delete/'
    static updateDepartment = this.baseUrl + '/department/update'
}
export default AppUrl