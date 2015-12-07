import './Banner.css'
import React, { PropTypes } from 'react'

import Slider from 'react-slick'
import AppActions from '../../actions/AppActions'
import BannerStore from '../../stores/BannerStores'
import StoreWatchMixin from '../../mixin/StoreWatchMixin'

import urlParser from '../../utility/urlParser.js'

const banner_default = require("image!../../asset/img/banner_default.jpeg")

/**
 * A component to Banner
 * author : jungun.park
 */
var setting = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2500,
  seed: 600,
  slidesToShow: 1,
  slidesToScroll: 1
}

var component = React.createClass({
  render(){

  }
});


const Banner = React.createClass({
  mixins: [StoreWatchMixin(BannerStore, () => {return {banners: BannerStore.getBanners()}})],
  componentWillMount(){
    AppActions.getBanner();
  },
  render () {
    /// TODO : slider구현이 필요함, 당분간 react-slick을 사용,
    /// TODO : 인터넷이 느릴때 밀리는 증상 파악
    var bannerlist = [];

    /* 베너가 아무것도 없을 때 기본 베너 띄우기*/
    if (this.state.banners === undefined
      || this.state.banners.length == 0) {
      bannerlist = [<div key={1}><a href><img src={banner_default} alt="banner"/></a></div>]
    } else {
      bannerlist = this.state.banners.filter((ele)=>{return (ele.platform == "ALL" || ele.platform == "PC") ?  true : false})
                                     .map((banner, i) => {
          return (
            <div key={i}><a href={urlParser.parseBanner(banner.url).url}><img src={urlParser.parseImage(banner.images.large)} alt="banner"/></a></div>
          )
      })
    }
    return (
      <Slider {... setting}>
        {bannerlist}
      </Slider>
    )
  }
})

export default Banner
