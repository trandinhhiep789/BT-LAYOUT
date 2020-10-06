import React, { Component } from "react";

export default class ShopName extends Component {
  render() {
    return (
      <div className="col-xl-2 mr-4">
        <h3>Shop Name</h3>
        <div className="row">
          <div className="form-control">Category1</div>
          <div className="form-control">Category2</div>
          <div className="form-control">Category3</div>
        </div>
      </div>
    );
  }
}
