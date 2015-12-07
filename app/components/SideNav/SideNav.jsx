/**
 * Created by jungenpark on 9/25/15.
 */
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'


export default class SideNav extends React.Component  {
  constructor(props) {
    super(props)
  }

  componentDidMount(){

  }

  render () {
    return (
      <nav>
        <div>
          <dl>
            <dt>Channels</dt>
            <dd><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>아이돌</b><span>요즘 HOT한 아이돌</span></a></dd>
          </dl>
          <ul>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>Davichi in Hong Kong</b><span>Davichi in Hong Kong Davichi in Hong Kong</span></a></li>
            <li class="on"><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>아이돌</b><span>요즘 HOT한 아이돌</span></a></li>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>Davichi in Hong Kong</b><span>Davichi in Hong Kong Davichi in Hong Kong</span></a></li>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>Davichi in Hong Kong</b><span>Davichi in Hong Kong Davichi in Hong Kong</span></a></li>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>Davichi in Hong Kong</b><span>Davichi in Hong Kong Davichi in Hong Kong</span></a></li>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>아이돌</b><span>요즘 HOT한 아이돌</span></a></li>
            <li><a href=""><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /><b>Davichi in Hong Kong</b><span>Davichi in Hong Kong Davichi in Hong Kong</span></a></li>
          </ul>
          <dl className="category">
            <dt>Category</dt>
            <dd><a href="">Entertainment</a></dd>
          </dl>
          <ul className="category">
            <li><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
            <li className="on"><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Entertainment</a></li>
          </ul>
        </div>
        <a href="contents01_add.html">컨텐츠 작성하기</a>
        <ul id="lnb">
          <li><a href="contents01.html" className="l1_a">My Contents</a><b>9</b></li>
          <li><a href="contents02.html" className="l1_b">Contents List</a>
            <ul>
              <li><a href="contents02.html">발행된 Contents</a><b>96</b></li>
              <li><a href="contents02.html">예약된 Contents</a></li>
              <li><a href="contents02.html">삭제된 Contents</a></li>
            </ul>
          </li>
          <li><a href="contents03.html" className="l1_c">Contents 검수</a></li>
        </ul>
      </nav>)
  }
}
