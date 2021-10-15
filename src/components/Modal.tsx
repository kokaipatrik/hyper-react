import React, { Component, KeyboardEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";

import ExitIcon from "@/assets/svg/icons/exit.svg";
import { actionCreators } from "@/store/base/index";

type ModalProps = {
  name: string;
  content: any;
};

class Modal extends Component<ModalProps> {
  public render() {
    return (
      <div
        className={`block block--modal block--modal-${this.props.name} ${
          this.isActive() ? "is-active" : ""
        }`}
      >
        <div className="block__head">
          <div
            className="block__exit"
            onClick={this.exit}
            onKeyDown={this.exitKeydown}
            aria-hidden="true"
          >
            <img
              src={ExitIcon}
              className="block__icon"
              alt="Exit"
              title="Exit"
            />
          </div>
        </div>
        {this.props.content}
      </div>
    );
  }

  public isActive = (): boolean => {
    if (
      this.props.modal.name == this.props.name &&
      this.props.modal.toggle == true
    )
      return true;
    return false;
  };

  public exit = (): void => {
    this.props.modalToggle({ name: this.props.modal.name, toggle: false });
    this.props.backdropToggle(false);
  };

  public exitKeydown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.code === "Escape") this.exit();
  };
}

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
    backdrop: state.backdrop,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
