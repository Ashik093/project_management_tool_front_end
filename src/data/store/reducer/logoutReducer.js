import { LOGOUT } from "../action/logout";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGOUT:
            return action.payload

        default:
            return state
    }
}
export default userReducer