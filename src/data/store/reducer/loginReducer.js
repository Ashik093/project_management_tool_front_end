import { LOGIN } from "../action/login";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload

        default:
            return state
    }
}
export default userReducer