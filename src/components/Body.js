import React, { Component } from "react";
import Carousel from "./Carousel";
import EmptyRight from "./EmptyRight";
import ShopName from "./ShopName";

export default class Body extends Component {
  render() {
    return (
      <div class="row jumbotron mb-0 mx-0 pb-0">
        <ShopName></ShopName>
        <Carousel></Carousel>
        <EmptyRight></EmptyRight>
      </div>
    );
  }
}
