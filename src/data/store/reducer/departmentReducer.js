import { GETALLDEPARTMENT } from './../action/getAllDepartment'
const departmentReducer = (state = {}, action) => {
    switch (action.type) {
        case GETALLDEPARTMENT:
            return action.payload
        default:
            return state;
    }
}

export default departmentReducer