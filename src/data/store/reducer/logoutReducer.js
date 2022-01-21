import { LOGOUT } from "../action/login";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGOUT:
            return action.payload

        default:
            return state
    }
}
export default userReducer