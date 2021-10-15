import { ActionType, Modal } from "./../action-types/index";
import { Action } from "./../actions/index";

const modalReducerInitialState: Modal = {
  name: "",
  toggle: false,
};
const backdropReducerInitialState: boolean = false;

export const modalReducer = (
  state: Modal = modalReducerInitialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.MODAL_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export const backdropReducer = (
  state: boolean = backdropReducerInitialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.BACKDROP_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};
