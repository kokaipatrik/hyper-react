import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

type CategoryProps = WithTranslation & {
  name: string;
};

class Category extends Component<CategoryProps> {
  render() {
    const { t } = this.props;
    return (
      <main className="page page--category">
        <h1 className="page__title">
          {t("Category")}: {this.props.name}
        </h1>
      </main>
    );
  }
}

export default withTranslation()(Category);
