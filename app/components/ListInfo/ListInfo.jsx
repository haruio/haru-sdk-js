
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'
import urlParser from '../../utility/urlParser.js'

/**
 * A component to greet users
 */
const ListInfo = React.createClass({
  printTime(duration){
    return this.zeropad(Math.floor(duration / 60), 2) + ":" + this.zeropad(duration % 60)
  },
  zeropad(s, size){
    s = String(s);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  },
  render(){
    if(this.props.feed.type == "video") {
      return <span>{this.printTime(this.props.feed.metadata.video.duration)}</span>
    } else {
      return <span className="cnt">{this.props.feed.contentCnt}</span>
    }
  }
})

export default ListInfo
