import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { BrowserRouter as Router, Link } from "react-router-dom"; //eslint-disable-line

import { currencyFormat } from "@/helpers/currency";

type CardProductProps = WithTranslation & {
  img: string;
  brand: string;
  name: string;
  price: number;
  url: string;
  details: Array<string>;
};

class CardProduct extends Component<CardProductProps> {
  public render() {
    const { t } = this.props;

    return (
      <div className="card card--product">
        <Link to={this.props.url}>
          <figure className="card__figure">
            <img
              src={this.props.img}
              alt={this.props.name}
              title={this.props.name}
              className="card__img"
            />
          </figure>
          <div className="card__content">
            {this.props.details.length > 0 && (
              <div className="card__details">
                <ul className="card__details__list">
                  {this.props.details.map((detail, i) => {
                    return (
                      <li className="card__details__item" key={i}>
                        {detail}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <span className="card__brand">{this.props.brand}</span>
            <h3 className="card__title">{this.props.name}</h3>
            <p className="card__price">{currencyFormat(this.props.price)}</p>

            <div className="card__btn-wrapper">
              <div className="btn btn-primary w-100 card__btn">
                {t("Details")}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default withTranslation()(CardProduct);
