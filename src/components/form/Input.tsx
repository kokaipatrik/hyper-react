import React, { ChangeEvent, Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

type InputProps = WithTranslation & {
  type: string;
  name: string;
  title: string;
};

type InputState = {
  value: string;
};

class Input extends Component<InputProps, InputState> {
  constructor(props: any) {
    super(props);
  }

  public state: InputState = {
    value: "",
  };

  public render() {
    const { t } = this.props;

    return (
      <div className="form-group">
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          value={this.state.value}
          className={`form-control ${this.hasValue() ? "has-value" : ""}`}
          onChange={this.handleChange}
        />
        <label className="label" htmlFor={this.props.name}>
          {t(this.props.title)}
        </label>
      </div>
    );
  }

  public handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.name, e.target.value);
  };

  public hasValue = (): boolean => {
    if (this.state.value) return true;
    return false;
  };
}

export default withTranslation()(Input);
