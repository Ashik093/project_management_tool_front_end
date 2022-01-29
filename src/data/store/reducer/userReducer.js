import { GETALLUSER } from "../action/getAllUser";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GETALLUSER:
            return action.payload
        default:
            return state;
    }
}

export default userReducer