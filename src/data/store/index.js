import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const allReducer = combineReducers({})
const initialValue = {
    person: { name: 'Ashik', email: 'ashikur@gmail.com' },
    game: { name: 'Football' },
    user: []
}
const middleware = [thunk]
const store = createStore(allReducer, initialValue, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store