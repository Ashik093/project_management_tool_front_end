import { DASHBOARD } from "../action/dashboard";
const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case DASHBOARD:
            return action.payload

        default:
            return state
    }
}
export default dashboardReducer