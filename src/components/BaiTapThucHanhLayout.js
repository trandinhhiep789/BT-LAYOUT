import React, { Component } from 'react'
import Body from './Body'
import Carousel from './Carousel'
import ChanTrang from './ChanTrang'
import Header from './Header'
import PageContent from './PageContent'
import ProductList from './ProductList'
import ShopName from './ShopName'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body></Body>
                <ChanTrang></ChanTrang>
            </div>
        )
    }
}
