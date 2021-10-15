import React, { Component, KeyboardEvent } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { BrowserRouter as Router, Link } from "react-router-dom"; //eslint-disable-line

import { FooterContent, FooterLinkContent } from "@/types/models.type";

type FooterBlockProps = WithTranslation & {
  content: FooterContent;
};

type FooterBlockState = {
  isActive: boolean;
};

class FooterBlock extends Component<FooterBlockProps, FooterBlockState> {
  public state: FooterBlockState = {
    isActive: false,
  };

  public render() {
    const { t } = this.props;

    return (
      <div className="block block--footer">
        <h4 className="block__title">{t(this.getTitle())}</h4>
        <h4
          className={`block__title is-mobile ${
            this.state.isActive ? "is-active" : ""
          }`}
          onClick={this.mobileIsActiveToggle}
          aria-hidden="true"
        >
          {t(this.getTitle())}
        </h4>
        <div
          className={`block__content ${this.state.isActive ? "is-active" : ""}`}
        >
          {this.getContent().length > 0 && (
            <div className="block__list">
              {this.getContent().map((link: FooterLinkContent, i: number) => {
                return (
                  <div className="block__item" key={i}>
                    <Link to={link.url} className="block__link">
                      {link.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  public getTitle = (): string => {
    if (this.props.content) return this.props.content.title;
    return "";
  };

  public getContent = (): FooterLinkContent | any => {
    if (this.props.content) return this.props.content.content;
  };

  public mobileIsActiveToggle = (): void => {
    this.setState({ isActive: !this.state.isActive });
  };

  public mobileIsActiveToggleKeydown = (
    e: KeyboardEvent<HTMLDivElement>
  ): void => {
    if (e.code === "Escape") this.mobileIsActiveToggle();
  };
}

export default withTranslation()(FooterBlock);
