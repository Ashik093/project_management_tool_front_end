import Axios from "axios"
import AppUrl from '../../api/AppUrl'
import { toast } from 'react-toastify';
import { removeToken, getToken } from '../../../helper/login'



export const LOGOUT = 'LOGOUT'
const logout = (history) => dispatch => {
    let tokenStr = getToken()
    Axios.post(AppUrl.logout, {}, { 'Content-Type': 'application/json', headers: { "Authorization": `Bearer ${tokenStr}` } })
        .then((res) => {
            dispatch({ type: LOGOUT, payload: {} })
            removeToken()
            history.push("/")
            toast.success('Logout Success!', {
                position: "bottom-center",
            })
        })
        .catch((error) => {

            toast.error('Credentials not match', {
                position: "bottom-center"
            })
        })
}
export default logout