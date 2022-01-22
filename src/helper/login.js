import Axios from 'axios'
import AppUrl from '../data/api/AppUrl';


export const setToken = (token) => {
    localStorage.setItem('token', token);
    return true
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const removeToken = () => {
    localStorage.removeItem('token')
    return true
}

export const logout = (history) => {
    localStorage.removeItem('token')
    history.push("/")
}

export const seTAuthToken = (token) => {
    Axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
}

export const isTokenValid = (history) => {
    let token = localStorage.getItem('token')
    Axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    Axios.get(AppUrl.me)
        .then((res) => {
            if (!res.data.token) {
                history.push("/")
            } else {
                // store.dispatch({ type: 'ME', payload: res.data })
                // setToken(res.data.token)
                // seTAuthToken(res.data.token)
                history.push("/admin")
            }
        })
        .catch((error) => {
            console.log(error)
            history.push("/")
        })
}