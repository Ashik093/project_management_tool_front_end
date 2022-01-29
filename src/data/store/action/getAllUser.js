import Axios from "axios"
import { getToken, logout } from "../../../helper/login"
import AppUrl from "../../api/AppUrl"
import { toast } from 'react-toastify';

export const GETALLUSER = 'GETALLUSER'

const getAllUser = (history) => dispatch => {
    let tokenStr = getToken()
    Axios.get(AppUrl.getAllUser, { 'Content-Type': 'application/json', headers: { "Authorization": `Bearer ${tokenStr}` } })
        .then((res) => {
            dispatch({ type: GETALLUSER, payload: res.data })
        })
        .catch((error) => {
            //console.log(error)
            logout(history)
            toast.error('Session Expired', {
                position: "bottom-center"
            })
        })
}
export default getAllUser