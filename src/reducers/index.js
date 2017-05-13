import {combineReducers} from "redux";
import {INCREASE_COUNTER} from "../actions";
import {DECREASE_COUNTER} from "../actions";

function currentCount(state = 0, action) {
  if (action.type === INCREASE_COUNTER) {
    return state + 1;
  }
  if (action.type === DECREASE_COUNTER && state > 0) {
    return state - 1;
  }
  return state;
}

function specialText(state = [], action) {
  if(action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

function users(state = [], action) {
  if(action.type === "ADD_USER") {

  }
  if(action.type === "REMOVE_USER") {

  }
  return state;
}


export default combineReducers({
  currentCount,
  users,
  specialText
});
