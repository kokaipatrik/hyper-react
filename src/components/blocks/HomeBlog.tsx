import React, { Component } from "react";

import { BlogPostRecommender } from "@/types/models.type";

class HomeBlog extends Component {
  public render() {
    return (
      <div className="block block--home-blog">
        <div className="container block__container">
          <div className="row block__row">
            <div className="col-lg-6 block__col">
              <div className="block__content">
                <div className="block__date">
                  {this.blogPostRecommender.date}
                </div>
                <h3 className="block__title">
                  {this.blogPostRecommender.title}
                </h3>
                <p className="block__description">
                  {this.blogPostRecommender.description}
                </p>
              </div>
            </div>
            <div className="col-lg-6 block__col">
              <figure className="block__figure">
                <img
                  src={this.blogPostRecommender.img}
                  alt={this.blogPostRecommender.imgAlt}
                  title={this.blogPostRecommender.imgAlt}
                  className="block__img"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public blogPostRecommender: BlogPostRecommender = {
    img: "/src/assets/images/pine-green-2.jpg",
    imgAlt: "Pine Green 2",
    date: "2020. február 29.",
    title: "Megérkezett a 2020-as Pine Green.",
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
  };
}

export default HomeBlog;
