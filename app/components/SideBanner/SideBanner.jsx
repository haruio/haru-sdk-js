import './SideBanner.css'
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'
const download_go = require("image!../../asset/img/download_go.png")

/**
 * A component to Banner
 * author : jungun.park
 */



export default class SideBanner extends React.Component{
  render (){
    const RouteLink = ReactRouter.Link;
    return (<div id="sideBanner">
      <dl>
        <dt><img src={download_go} alt="심심할땐 몬캐스트 다운로드 GO!" /></dt>
        <dd><a href="//play.google.com/store/apps/details?id=com.makeus.moncast" target="_blank">구글플레이</a></dd>
        <dd><a href="//itunes.apple.com/kr/app/id955367690?mt=8"  target="_blank">앱스토어</a></dd>
      </dl>
      <RouteLink to="upload">제보하러 가기</RouteLink>
    </div>)
  }
}
