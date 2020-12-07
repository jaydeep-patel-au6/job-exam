import React, { Component } from "react";
import Timg from './images/t.jpg'
import Iimg from './images/link.jpg'
import Insta from './images/insta.png'
import Fimg from './images/f.jpg'


export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <center>
            
            <h5>Join Asquero Community</h5>
            
            <a href="">
            <img src={Timg} width="50px" height="50px" className="m-1 p-1 img-2"></img>
            </a>
            

            <a href="">
            <img src={Iimg} width="50px" height="50px" className="m-1 p-1"></img>
            </a>

            <a href="">
            <img src={Insta} width="50px" height="50px" className="m-1 p-1"></img>
            </a>

            <a href="">
            <img src={Fimg} width="50px" height="50px" className="m-1 p-1"></img>
            </a>
           
            <p className="copyright">Copyright © Asquero 2020</p>
        </center>
        
        
      </div>
    );
  }
}