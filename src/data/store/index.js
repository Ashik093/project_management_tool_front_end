import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducer/loginReducer'
import dashboardReducer from './reducer/dashboardReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const allReducer = combineReducers({ authenticateUser: loginReducer, dashboard: dashboardReducer })
const initialValue = {
    authenticateUser: {},
    dashboard: {}
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, allReducer)
const middleware = [thunk]
export const store = createStore(persistedReducer, initialValue, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export const persistor = persistStore(store)