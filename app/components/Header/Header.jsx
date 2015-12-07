import './Header.css'
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router'

const logo = require("image!../../asset/img/logo.png")
const defaultimage = require("image!../../asset/img/default.png")


export default class Header extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render () {
   return (
     <header>
       <h1><a href=""><img src={logo} alt="MAKE US" /></a></h1>
       <ul>
         <li><a href="contents01.html">Contents Management</a></li>
         <li><a href="service01.html">Service Management</a></li>
         <li><a href="system01.html">System Management</a></li>
       </ul>
       <dl>
         <dt>Korea</dt>
         <dd>
           <a href="" className="on">Korea</a>
           <a href="">English</a>
           <a href="">Indonesia</a>
         </dd>
       </dl>
       <p>
         <b><a href="">PinkjjangPinkjjang</a></b>
         <img src={defaultimage} alt="" /><a href="">3</a>
       </p>
     </header>)
  }
}
