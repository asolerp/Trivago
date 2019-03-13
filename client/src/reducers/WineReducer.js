import {
  WINES_LIST,
  ADD_WINE,
  SHOW_LIST,
  OPEN_MESSAGE,
  CLOSE_MESSAGE
} from "../actions/types";

const INITIAL_STATE = {
  wines: "",
  selection: [],
  cart: 0,
  showList: false,
  modal: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WINES_LIST:
      return { ...state, wines: [action.payload] };
    case ADD_WINE:
      return {
        ...state,
        cart: state.cart + 1,
        selection: state.selection.concat(action.payload)
      };
    case SHOW_LIST:
      return { ...state, showList: !state.showList };
    case OPEN_MESSAGE:
      return { ...state, modal: action.payload };
    case CLOSE_MESSAGE:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
