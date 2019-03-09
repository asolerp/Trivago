
import {
    WINES_LIST
  } from "../actions/types";

const INITIAL_STATE = {
    wines: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WINES_LIST: 
        return {...state, wines: [action.payload]}
      default:
        return state;
    }
  };
