import React, { Component } from 'react'
import ProductItems from './ProductItems'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <ProductItems></ProductItems>
                    <ProductItems></ProductItems>
                    <ProductItems></ProductItems>
                </div>
                <div className="row">
                    <ProductItems></ProductItems>
                    <ProductItems></ProductItems>
                    <ProductItems></ProductItems>
                </div>
            </div>
        )
    }
}
