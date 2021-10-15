import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import Jordan1 from "@/assets/images/jordan-1.jpg";

class HomeSlider extends Component<WithTranslation> {
  public render() {
    const { t } = this.props;

    return (
      <div className="block block--home-slider">
        <div className="container block__container">
          <div className="row block__row">
            <div className="col-lg-7 block__col">
              <figure className="block__figure">
                <img
                  src={Jordan1}
                  alt="Jordan 1"
                  title="Jordan 1"
                  className="block__img"
                />
                <div className="block__label">
                  <p className="block__subtitle">Air Jordan 1</p>
                  <p className="block__lead">
                    {t("Take a look at our offer, find your favorite model!")}
                  </p>
                </div>
              </figure>
            </div>
            <div className="col-lg-5 block__col">
              <div className="block__content">
                <h1 className="block__title">
                  {t("The number one hypebeast marketplace in the country.")}
                </h1>
                <p className="block__description">
                  {t(
                    "Trade your hypebeast stuff or find your dream garments on our website."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(HomeSlider);
