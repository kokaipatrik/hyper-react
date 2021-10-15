import React, { Component } from "react";

import Brands from "@/components/blocks/Brands";
import HomeBlog from "@/components/blocks/HomeBlog";
import HomeCurrentAds from "@/components/blocks/HomeCurrentAds";
import HomeSlider from "@/components/blocks/HomeSlider";
import Footer from "@/components/Footer";

class Home extends Component {
  public render() {
    return (
      <main className="page page--home">
        <HomeSlider />
        <HomeCurrentAds />
        <HomeBlog />
        <Brands />
        <Footer />
      </main>
    );
  }
}

export default Home;
