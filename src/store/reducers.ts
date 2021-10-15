import { combineReducers } from "redux";

import { backdropReducer, modalReducer } from "./base/reducers/index";

export default combineReducers({
  modal: modalReducer,
  backdrop: backdropReducer,
});
