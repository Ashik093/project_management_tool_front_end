import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducer/loginReducer'


const allReducer = combineReducers({ authenticateUser: loginReducer })
const initialValue = {
    authenticateUser: {},
}
const middleware = [thunk]
const store = createStore(allReducer, initialValue, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store