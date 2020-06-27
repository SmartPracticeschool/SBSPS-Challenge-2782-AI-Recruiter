import {combineReducers} from 'redux'
import {UserReducer} from './user'

const reducer = combineReducers({
            user : UserReducer
})

export default reducer