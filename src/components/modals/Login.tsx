import React, { ChangeEvent, Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import Input from "@/components/form/Input";
import Modal from "@/components/Modal";

type LoginState = {
  email: string;
  password: string;
};

class Login extends Component<WithTranslation, LoginState> {
  public state: LoginState = {
    email: "",
    password: "",
  };

  public render() {
    const { t } = this.props;

    return (
      <Modal
        name="login"
        content={
          <div className="container block__container">
            <div className="block__content">
              <div className="block__title">{t("Login")}</div>
              <div className="block__lead">
                {t("or")}{" "}
                <span className="block__register">{t("Register")}</span>
              </div>
              <div className="block__form">
                <Input
                  type="email"
                  name="email"
                  title="E-mail address"
                  onChange={this.setValue.bind(this)}
                />
                <Input
                  type="password"
                  name="password"
                  title="Password"
                  onChange={this.setValue.bind(this)}
                />
                <button className="btn btn-primary w-100" onClick={this.login}>
                  {t("Login")}
                </button>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  public setValue = (field: string, value: string): void => {
    this.setState({ [field]: value });
  };

  public login = (): void => {
    console.log(this.state.email, this.state.password);
  };
}

export default withTranslation()(Login);
