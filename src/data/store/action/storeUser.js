import Axios from 'axios'
import AppUrl from './../../api/AppUrl'
import { getToken, logout } from "../../../helper/login"
import { toast } from 'react-toastify';

const storeUser = (data, history, callback) => dispatch => {

    let tokenStr = getToken()
    return Axios.post(AppUrl.storeUser, data, { 'Content-Type': 'application/json', headers: { "Authorization": `Bearer ${tokenStr}` } })
        .then((res) => {
            toast.success("Succesfully Saved", {
                position: "bottom-center"
            })
            callback(true)

        })
        .catch((error) => {
            console.log(error)
            if (error.response.status == 401) {
                logout(history)
            } else {
                Object.keys(error.response.data.errors).forEach(function(key) {
                    toast.error(error.response.data.errors[key][0], {
                        position: "bottom-center"
                    })
                });

            }
            callback(false)

        })
}

export default storeUser