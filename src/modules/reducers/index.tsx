import { combineReducers } from 'redux'
import * as todo from '../action'

export default combineReducers({
  ...todo
})