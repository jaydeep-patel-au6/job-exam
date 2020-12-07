import React, { Component } from "react";


export default class Course extends Component {
  render() {
    return (
      <div className="container">
        <center>
        <h2 className="title-2">I WANT TO LEARN</h2>
        <ul className="products ">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product box-2 shadow p-3 mb-5 bg-white rounded">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} width="50px" height="50px" ></img> </a>
                  <p className="p-title">{product.title}</p>
               
                
              </div>
            </li>
          ))}
        </ul>
        </center>
        
      </div>
    );
  }
}