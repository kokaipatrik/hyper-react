import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import Modal from "@/components/Modal";

class NewAd extends Component<WithTranslation> {
  public render() {
    const { t } = this.props;

    return (
      <Modal
        name="new-ad"
        content={
          <div className="container block__container">
            <div className="block__content">
              <div className="block__title">{t("New ad")}</div>
              <p className="block__description">
                {t("Please sign in to upload new ad.")}
              </p>
            </div>
          </div>
        }
      />
    );
  }
}

export default withTranslation()(NewAd);
