import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import FooterBlock from "@/components/blocks/FooterBlock";
import Logo from "@/components/header/Logo";
import { FooterContent, SocialLinkItem } from "@/types/models.type";

class Footer extends Component<WithTranslation> {
  public render() {
    const { t } = this.props;

    return (
      <footer className="footer footer--main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <FooterBlock content={this.findLinksContent("About us")} />
            </div>

            <div className="col-lg-3">
              <FooterBlock content={this.findLinksContent("Categories")} />
            </div>

            <div className="col-lg-3">
              <FooterBlock content={this.findLinksContent("Brands")} />
            </div>

            <div className="col-lg-3">
              <div className="block block--footer block--footer-without-links">
                <figure className="block__figure">
                  <Logo />
                </figure>

                <div className="block__copyright">
                  <p>2021 &copy; {t("All rights reserved.")}</p>
                  <p>
                    Designed & coded by{" "}
                    <a
                      href="https://kokai.xyz/"
                      target="_blank"
                      title="Patrik Kókai"
                      rel="noreferrer"
                    >
                      Patrik Kókai
                    </a>
                  </p>
                </div>

                <div className="block__links">
                  <nav className="nav nav--social-links">
                    {this.socialLinks.length > 0 && (
                      <ul className="nav__list">
                        {this.socialLinks.map(
                          (link: SocialLinkItem, i: number) => {
                            return (
                              <li className="nav__item" key={i}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  title={link.name}
                                  className="nav__link"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={link.img}
                                    alt={link.name}
                                    title={link.name}
                                    className="nav__img"
                                  />
                                </a>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  public findLinksContent = (title: string): FooterContent | any => {
    return this.links.find((l) => l.title === title);
  };

  public links: Array<FooterContent> = [
    {
      title: "About us",
      content: [
        {
          url: "/about-us/the-hyper-story",
          title: "The Hyper Story",
        },
        {
          url: "/about-us/originality",
          title: "Originality",
        },
        {
          url: "/about-us/media-offer",
          title: "Media offer",
        },
        {
          url: "/contact",
          title: "Contact",
        },
      ],
    },
    {
      title: "Categories",
      content: [
        {
          url: "/category/sneaker",
          title: "Sneaker",
        },
        {
          url: "/category/t-shirt",
          title: "T-Shirt",
        },
        {
          url: "/category/sweatshirt",
          title: "Sweatshirt",
        },
        {
          url: "/category/accessories",
          title: "Accessories",
        },
      ],
    },
    {
      title: "Brands",
      content: [
        {
          url: "/brand/jordan",
          title: "Jordan",
        },
        {
          url: "/brand/supreme",
          title: "Supreme",
        },
        {
          url: "/brand/the-north-face",
          title: "The North Face",
        },
        {
          url: "/brand/champion",
          title: "Champion",
        },
      ],
    },
  ];

  public socialLinks: Array<SocialLinkItem> = [
    {
      url: "https://twitter.com/hyper",
      name: "Hyper on Twitter",
      img: "/src/assets/svg/social/twitter.svg",
    },
    {
      url: "https://instagram.com/hyper",
      name: "Hyper on Instagram",
      img: "/src/assets/svg/social/instagram.svg",
    },
    {
      url: "mailto:hyper@hyp.er",
      name: "Send e-mail to us",
      img: "/src/assets/svg/social/email.svg",
    },
  ];
}

export default withTranslation()(Footer);
