import React, { Component, KeyboardEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";

import { actionCreators } from "@/store/base/index";

class Backdrop extends Component {
  public render() {
    return (
      <div
        className={`elem elem--backdrop ${
          this.props.backdrop ? "is-active" : ""
        }`}
        onClick={this.disableBackdrop}
        onKeyDown={this.disableBackdropKeydown}
        aria-hidden="true"
      ></div>
    );
  }

  public disableBackdrop = (): void => {
    if (this.props.backdrop) this.props.backdropToggle(!this.props.backdrop);
  };

  public disableBackdropKeydown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.code === "Escape") this.disableBackdrop();
  };
}

const mapStateToProps = (state: any) => {
  return {
    backdrop: state.backdrop,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
