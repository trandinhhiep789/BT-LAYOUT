import React, { Component } from "react";

export default class ProductItems extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4 p-1px mt-2">
        <div className="card h-100 w-100">
          <img className="card-img-top" src="http://placehold.it/700x400" alt />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo magni sapiente, tempore debitis beatae culpa natus
              architecto.
            </p>
          </div>
          <div className="card-footer">
            <i class="fa fa-star text-secondary "></i>
            <i class="fa fa-star text-secondary "></i>
            <i class="fa fa-star text-secondary "></i>
            <i class="fa fa-star text-secondary "></i>
            <i class="fa fa-star-half-alt text-secondary"></i>
          </div>
        </div>
      </div>
    );
  }
}
