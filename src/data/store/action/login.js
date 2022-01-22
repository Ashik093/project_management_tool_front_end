import Axios from "axios"
import AppUrl from '../../api/AppUrl'
import { toast } from 'react-toastify';
import { seTAuthToken, setToken } from '../../../helper/login'



export const LOGIN = 'LOGIN'
const login = (value, history) => dispatch => {
    Axios.post(AppUrl.login, {
            email: value.email,
            password: value.password
        })
        .then((res) => {
            if (!res.data.token) {
                toast.error('Credentials not match', {
                    position: "bottom-center"
                })
            } else {
                dispatch({ type: LOGIN, payload: res.data })
                setToken(res.data.token)
                seTAuthToken(res.data.token)
                history.push("/admin")
                toast.success('Login Success!', {
                    position: "bottom-center",
                })

            }
        })
        .catch((error) => {

            toast.error('Credentials not match', {
                position: "bottom-center"
            })
        })
}
export default login