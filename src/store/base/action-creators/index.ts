import { Dispatch } from "redux";

import { ActionType, Modal } from "./../action-types/index";
import { Action } from "./../actions/index";

export const modalToggle = (value: Modal) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MODAL_TOGGLE,
      payload: value,
    });
  };
};

export const backdropToggle = (value: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BACKDROP_TOGGLE,
      payload: value,
    });
  };
};
