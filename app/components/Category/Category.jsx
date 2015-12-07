import React, { PropTypes } from 'react'

import urlParser from '../../utility/urlParser.js'

const banner_default = require("image!../../asset/img/banner_default.jpeg")

/**
 * A component to Banner
 * author : jungun.park
 */

const Category = React.createClass({
  render () {
    return (
      <dl id="category">
        <dt>카테고리</dt>
        <dd><a href="" className="on"><b>유머</b><span>Humor</span></a></dd>
        <dd><a href=""><b>이슈</b><span>Issue</span></a></dd>
        <dd><a href=""><b>연예</b><span>Entertainment</span></a></dd>
        <dd><a href=""><b>음악</b><span>Music</span></a></dd>
        <dd><a href=""><b>꿀팁</b><span>Good Tip</span></a></dd>
        <dd><a href=""><b>뷰티</b><span>Beauty</span></a></dd>
        <dd><a href=""><b>후방주의</b><span>NSFW</span></a></dd>
      </dl>
    )
  }
})

export default Category
