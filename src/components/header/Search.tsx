import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import SearchIcon from "@/assets/svg/icons/search.svg";

type SearchProps = WithTranslation & {
  searchInput: any;
};

class Search extends Component<SearchProps> {
  public render() {
    const { t } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="block block--search">
            <div className="block__search">
              <input
                type="text"
                className="block__input form-control"
                placeholder={t("Search")}
                ref={this.props.searchInput}
              />
              <button className="block__btn">
                <img src={SearchIcon} alt="Search" title="Search" />
              </button>
            </div>
            <div className="block__related">
              <div className="block__title">{t("Popular keywords")}</div>

              <ul className="block__list">
                <li>Pine Green</li>
                <li>Yeezy</li>
                <li>Jordan 1</li>
                <li>Adidas</li>
                <li>Nike</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    const input = this.props.searchInput.current;
    if (input) input.focus();
  }
}

export default withTranslation()(Search);
