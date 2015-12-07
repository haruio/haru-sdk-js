import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'

import utility from '../../../utility/util.js'

/**
 * A component to PopularTags
 */
const PopularTags = React.createClass({
  render () {
    const RouteLink = ReactRouter.Link;
    if(utility.emptyObjectCheck(this.props.keyword)){
      const populartags = this.props.keyword.map((key, i) => {
        // 기존 CMS에서 색으로 내려주지만 그색과 다름.
        if(key.color == "#2F727B"){
          return (<RouteLink to="search" query={{q:key.keyword}} className="popul" key={i}>{key.keyword}</RouteLink>)
        } else {
          return (<RouteLink to="search" query={{q:key.keyword}}  key={i}>{key.keyword}</RouteLink>)
        }
      })

      return (<dl className="toggle_list">
        <dt>인기검색어</dt>
        <dd>{populartags}</dd>
      </dl>)
    } else {
      return false;
    }

  }
})

export default PopularTags


