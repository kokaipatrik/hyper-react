import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; //eslint-disable-line

interface Brand {
  name: string;
  url: string;
  image: string;
}

class Brands extends Component {
  public render() {
    return (
      <div className="block block--brands">
        <div className="container block__container">
          <div className="row">
            {this.brands.length > 0 && (
              <div className="block__list">
                {this.brands.map((brand, i) => {
                  return (
                    <div className="block__item" key={i}>
                      <Link to={brand.url} className="block__link">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          title={brand.name}
                          className="block__img"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  public brands: Array<Brand> = [
    {
      name: "Jordan",
      url: "/brand/jordan",
      image: "/src/assets/svg/logos/jordan.svg",
    },
    {
      name: "Supreme",
      url: "/brand/supreme",
      image: "/src/assets/svg/logos/supreme.svg",
    },
    {
      name: "The North Face",
      url: "/brand/the-north-face",
      image: "/src/assets/svg/logos/the-north-face.svg",
    },
    {
      name: "Champion",
      url: "/brand/champion",
      image: "/src/assets/svg/logos/champion.svg",
    },
    {
      name: "Adidas",
      url: "/brand/adidas",
      image: "/src/assets/svg/logos/adidas.svg",
    },
    {
      name: "Nike",
      url: "/brand/nike",
      image: "/src/assets/svg/logos/nike.svg",
    },
    {
      name: "Anti Social Social Club",
      url: "/brand/anti-social-social-club",
      image: "/src/assets/svg/logos/anti-social-social-club.svg",
    },
    {
      name: "Bape",
      url: "/brand/bape",
      image: "/src/assets/svg/logos/bape.svg",
    },
  ];
}

export default Brands;
