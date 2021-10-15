import "@glidejs/glide/src/assets/sass/glide.core.scss";

import Glide, { Options } from "@glidejs/glide";
import React, { Component, createRef } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import CardProduct from "@/components/cards/CardProduct";

interface Breakpoint {
  bp: number;
  left: number;
}

type HomeCurrentAdsState = {
  leftPeek: number;
  windowWidth: number;
};

class HomeCurrentAds extends Component<WithTranslation, HomeCurrentAdsState> {
  public state: HomeCurrentAdsState = {
    leftPeek: 10,
    windowWidth: 0,
  };

  private glideSlider = createRef<any>();

  public render() {
    const { t } = this.props;

    return (
      <div className="block block--home-current-ads">
        <div className="container">
          <div className="block__head">
            <h2 className="block__title">{t("Current ads")}</h2>
            <span className="block__link">{t("All")}</span>
          </div>
        </div>
        <div className="block__content">
          <div className="glide" ref={this.glideSlider}>
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides">
                {this.cards.map((card, i) => {
                  return (
                    <div className="glide__slide" key={i}>
                      <CardProduct
                        img={card.img}
                        brand={card.brand}
                        name={card.name}
                        price={card.price}
                        url={card.url}
                        details={card.details}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public calculateLeftPeek = (): void => {
    let value = 10;
    let w = window.innerWidth;
    const breakpoints: Array<Breakpoint> = [
      {
        bp: 576,
        left: 260,
      },
      {
        bp: 768,
        left: 350,
      },
      {
        bp: 992,
        left: 465,
      },
      {
        bp: 1200,
        left: 560,
      },
      {
        bp: 1400,
        left: 645,
      },
    ];

    if (this.state.windowWidth !== w) {
      this.setState({ windowWidth: w });

      for (var bp of breakpoints) {
        if (w > bp.bp) value = w / 2 - bp.left;
      }

      this.setState({ leftPeek: value });
    }
  };

  public glideConfig = (): void => {
    let config: Options = {
      type: "slider",
      perView: 6.25,
      bound: true,
      gap: 20,
      peek: {
        before: this.state.leftPeek,
        after: 0,
      },
      breakpoints: {
        1440: {
          perView: 5.25,
        },
        1200: {
          perView: 4.25,
        },
        992: {
          perView: 3.25,
        },
        768: {
          perView: 2.25,
        },
        576: {
          perView: 1.75,
        },
      },
    };

    new Glide(".glide", config).mount();
  };

  componentDidMount = (): void => {
    this.calculateLeftPeek();
    this.glideConfig();
    window.addEventListener("resize", this.calculateLeftPeek);
  };

  componentDidUpdate = (): void => {
    this.glideConfig();
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateLeftPeek);
  }

  public cards = [
    {
      img: "/src/assets/images/products/rookie-of-the-year.jpg",
      brand: "Nike Air Jordan",
      name: "Rookie of the year",
      price: 98000,
      url: "/product/nike-air-jordan/rookie-of-the-year-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/supreme-traveller-0.6l-bottle.jpg",
      brand: "Supreme",
      name: "Traveller 0.6L Bottle",
      price: 22000,
      url: "/product/supreme/traveller-0.6l-bottle-1",
      details: ["DS"],
    },
    {
      img: "/src/assets/images/products/350-v2-tail-light.jpg",
      brand: "Adidas Yeezy",
      name: "350 V2 Tail Light",
      price: 94500,
      url: "/product/adidas-yeezy/350-v2-tail-light-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/yellow-jacket.jpg",
      brand: "Supreme The North Face",
      name: "Yellow Jacket",
      price: 205000,
      url: "/product/supreme-the-north-face/yellow-jacket-1",
      details: ["DS", "L"],
    },
    {
      img: "/src/assets/images/products/350-v2-tail-light.jpg",
      brand: "Adidas Yeezy",
      name: "350 V2 Tail Light",
      price: 94500,
      url: "/product/adidas-yeezy/350-v2-tail-light-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/yellow-jacket.jpg",
      brand: "Supreme The North Face",
      name: "Yellow Jacket",
      price: 205000,
      url: "/product/supreme-the-north-face/yellow-jacket-1",
      details: ["DS", "L"],
    },
    {
      img: "/src/assets/images/products/rookie-of-the-year.jpg",
      brand: "Nike Air Jordan",
      name: "Rookie of the year",
      price: 98000,
      url: "/product/nike-air-jordan/rookie-of-the-year-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/supreme-traveller-0.6l-bottle.jpg",
      brand: "Supreme",
      name: "Traveller 0.6L Bottle",
      price: 22000,
      url: "/product/supreme/traveller-0.6l-bottle-1",
      details: ["DS"],
    },
    {
      img: "/src/assets/images/products/350-v2-tail-light.jpg",
      brand: "Adidas Yeezy",
      name: "350 V2 Tail Light",
      price: 94500,
      url: "/product/adidas-yeezy/350-v2-tail-light-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/yellow-jacket.jpg",
      brand: "Supreme The North Face",
      name: "Yellow Jacket",
      price: 205000,
      url: "/product/supreme-the-north-face/yellow-jacket-1",
      details: ["DS", "L"],
    },
    {
      img: "/src/assets/images/products/350-v2-tail-light.jpg",
      brand: "Adidas Yeezy",
      name: "350 V2 Tail Light",
      price: 94500,
      url: "/product/adidas-yeezy/350-v2-tail-light-1",
      details: ["DS", "EU42"],
    },
    {
      img: "/src/assets/images/products/yellow-jacket.jpg",
      brand: "Supreme The North Face",
      name: "Yellow Jacket",
      price: 205000,
      url: "/product/supreme-the-north-face/yellow-jacket-1",
      details: ["DS", "L"],
    },
  ];
}

export default withTranslation()(HomeCurrentAds);
