import {combineReducers} from 'redux'
import WineReducer from './WineReducer.js'


export default combineReducers({
    wines: WineReducer,
})