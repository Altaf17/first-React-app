import {createStore} from 'redux'
import CakeReducer from './Redux/CakeReducer'

const store = createStore(CakeReducer)

export default store