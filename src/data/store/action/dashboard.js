import Axios from "axios"
import AppUrl from '../../api/AppUrl'
import { toast } from 'react-toastify';
import { getToken, logout } from '../../../helper/login'



export const DASHBOARD = 'DASHBOARD'
const dashboard = (history) => dispatch => {
    let tokenStr = getToken()
    Axios.get(AppUrl.dashboard, { 'Content-Type': 'application/json', headers: { "Authorization": `Bearer ${tokenStr}` } })
        .then((res) => {
            dispatch({ type: DASHBOARD, payload: res.data })
        })
        .catch((error) => {
            logout(history)
            toast.error('Session Expired', {
                position: "bottom-center"
            })
        })
}
export default dashboard