import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Backdrop from "@/components/Backdrop";
import Header from "@/components/Header";
import Login from "@/components/modals/Login";
import NewAd from "@/components/modals/New";
import Category from "@/pages/Category";
import Home from "@/pages/Home";
import { Nav } from "@/types/models.type";

class App extends Component {
  private nav: Array<Nav> = [
    {
      name: "Sneaker",
      url: "/category/sneaker",
    },
    {
      name: "T-Shirt",
      url: "/category/t-shirt",
    },
    {
      name: "Sweatshirt",
      url: "/category/sweatshirt",
    },
    {
      name: "Accessories",
      url: "/category/accessories",
    },
  ];

  public render() {
    return (
      <div className="App">
        <Router>
          <Header nav={this.nav} />

          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/category/:name"
            component={(props: any) => (
              <Category name={props.match.params.name} />
            )}
          />
        </Router>
        <Login />
        <NewAd />
        <Backdrop />
      </div>
    );
  }
}

export default App;
