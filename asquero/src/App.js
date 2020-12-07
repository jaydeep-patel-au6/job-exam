import logo from './logo.svg';
import './App.css';
import React from "react";
import data from "./data.json";
import Navbar from './components/Navbar'
import Main from './components/Main'
import Course from './components/Course'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
  return (
   <div>
     <Navbar></Navbar>
     <Main/>
     <Course products={this.state.products}></Course>
     <Footer></Footer>
   </div>
  );
  }
}

export default App;
