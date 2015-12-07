import React, { PropTypes } from 'react'

import SideNav from '../components/SideNav'

/**
 * A component to Main
 */
const Main = React.createClass({
  componentDidMount(){

  },
  render () {
    return (
      <section id="container">

        <SideNav />
        <article id="contents_list">
          <ul id="tab_menu">
            <li><a href="" class="on">All</a></li>
            <li><a href="">Image Type</a></li>
            <li><a href="">Video Type</a></li>
          </ul>
          <fieldset id="search_box">
            <p>
              <label>날짜선택</label>
              <input type="text" placeholder="2015-08-08" /><a href="" class="btn_calendar"></a> ~
              <input type="text" placeholder="2015-08-08" /><a href="" class="btn_calendar"></a>
            </p>
            <p>
              <label>검색조건</label>
              <select>
                <option>제목</option>
                <option>작성자</option>
                <option>프로그램</option>
              </select>
            </p>
            <input type="text" placeholder="Search" /><a href="" class="btn_search"></a>
          </fieldset>
          <h2>발행된 Contents</h2>
          <ul class="list">
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/1219f9f5cf29b60b.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">12000</i>
						<i title="좋아요">9999</i>
						<i title="댓글">999</i>
						<i title="공유">690</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/4ada80b7b068013a.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                  <a href=""><img src="img/ct_edit4.png" alt="" title="예약변경" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">1200</i>
						<i title="좋아요">999</i>
						<i title="댓글">0</i>
						<i title="공유">69</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/1219f9f5cf29b60b.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">12000</i>
						<i title="좋아요">9999</i>
						<i title="댓글">999</i>
						<i title="공유">690</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/4ada80b7b068013a.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                  <a href=""><img src="img/ct_edit4.png" alt="" title="예약변경" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">1200</i>
						<i title="좋아요">999</i>
						<i title="댓글">0</i>
						<i title="공유">69</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/1219f9f5cf29b60b.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">12000</i>
						<i title="좋아요">9999</i>
						<i title="댓글">999</i>
						<i title="공유">690</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
            <li>
              <div>
                <span><img src="http://assets2.moncast.com/channel/713f94bf61bb8b8c.jpeg" alt="" /></span>
                <b><span>Entertainment</span><span>humor</span></b>
                <em style="background-image:url(http://assets2.moncast.com/thumb/4ada80b7b068013a.jpeg)"><span class="movie">3:45</span></em>
                <p>
                  <a href=""><img src="img/ct_edit1.png" alt="" title="수정" /></a>
                  <a href=""><img src="img/ct_edit2.png" alt="" title="삭제" /></a>
                  <a href=""><img src="img/ct_edit3.png" alt="" title="히스토리" /></a>
                  <a href=""><img src="img/ct_edit4.png" alt="" title="예약변경" /></a>
                </p>
              </div>
              <p>
                <i>Main</i>
					<span>
						<i title="뷰">1200</i>
						<i title="좋아요">999</i>
						<i title="댓글">0</i>
						<i title="공유">69</i>
					</span>
              </p>
              <dl>
                <dt>다비치 이해리가 아이유의 노래를 불렀다니 이해리가 아이유</dt>
                <dd>발행일시 : 2015-08-08 PM 12:25</dd>
                <dd>작성자 : 김태희</dd>
              </dl>
            </li>
          </ul>
        </article>
      </section>
    )
  }
})

export default Main
