
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'
import urlParser from '../../utility/urlParser.js'

import ListInfo from '../ListInfo'
import InfiniteScroll from '../InfiniteScroll'

function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}

/**
 * A component to greet users
 */
const List = React.createClass({
  //mixins: [MasonryMixin('feedlist', masonryOptions)],

  loadMore(){
    console.log('inifinite load')
  },

  render(){
    const RouteLink = ReactRouter.Link;
    if(this.props.feeds != undefined && Object.keys(this.props.feeds).length != 0){
      var feedsbetalist = [];
      var pos = 0;

      var tempfeed = [];
      var hastemp = false;
      // TODO : 임시로 후다닥 만들엇음.. 나중에 리펙토링 진짜 진짜 필요할듯
      // TODO :  refectoring 1순위..
      if(this.props.emphasis == true) {
        for (var i = 0; i < this.props.feeds.length; i++) {
          const feed = this.props.feeds[i]
          if (feed.type == "collage" || feed.isShownFeed == false) {
            continue;
          }

          if (feed.colSpan == 2) {
            if (pos % 2 == 1) {
              hastemp = true;
              tempfeed =
                <li key={i} className="col2"><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img
                  src={urlParser.parseImage(feed.metadata.thumbnail.emphasis)} alt=""/><ListInfo
                  feed={feed}/></em></RouteLink></li>
            } else {
              feedsbetalist.push(
                <li key={i} className="col2"><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img
                  src={urlParser.parseImage(feed.metadata.thumbnail.emphasis)} alt=""/><ListInfo
                  feed={feed}/></em></RouteLink></li>
              )
            }
            pos += 2;
          } else if (feed.rowSpan == 2) {
            if (pos % 2 == 1) {
              hastemp = true;
              tempfeed =
                <li key={i} className="row2"><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img
                  src={urlParser.parseImage(feed.metadata.thumbnail.emphasis)} alt=""/><ListInfo
                  feed={feed}/></em></RouteLink></li>
            } else {
              feedsbetalist.push(
                <li key={i} className="row2"><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img
                  src={urlParser.parseImage(feed.metadata.thumbnail.emphasis)} alt=""/><ListInfo
                  feed={feed}/></em></RouteLink></li>
              )
            }
            pos += 2;
          } else {
            feedsbetalist.push(
              <li key={i}><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img
                src={urlParser.parseImage(feed.metadata.thumbnail.normal)} alt=""/><ListInfo feed={feed}/></em>

                <p>{feed.title}</p></RouteLink></li>
            )

            if (hastemp) {
              hastemp = false;
              feedsbetalist.push(tempfeed);
            }
            pos += 1;
          }
        }
      } else {
        feedsbetalist = this.props.feeds.filter((feed)=>{ return feed.type != "collage" && feed.isShownFeed != false}).map((feed, i) => {
          return (
            <li key={i}><RouteLink to={"detail"} params={{contentid:feed.stringId}}> <em><img src={urlParser.parseImage(feed.metadata.thumbnail.normal)} alt="" /><ListInfo feed={feed} /></em><p>{feed.title}</p></RouteLink></li>
          )
        })
      }

      // infiniteScroll 에 대한 위치를 고민좀 해보자.
      return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true}
          >
          <ul className="list">
            {feedsbetalist}
          </ul>
        </InfiniteScroll>
      )
    } else {
      return (<ul className="list"></ul>)
    }
  }
})

export default List
