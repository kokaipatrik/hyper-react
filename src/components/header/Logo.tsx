import React, { Component } from "react";

import HyperLogo from "@/assets/svg/logo.svg";

class Logo extends Component {
  public render() {
    return <img src={HyperLogo} alt="Hyper" title="Hyper" />;
  }
}

export default Logo;
