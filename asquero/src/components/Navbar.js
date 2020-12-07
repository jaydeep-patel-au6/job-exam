import React from 'react';

class Navbar extends React.Component {
    render() {
      return (
        
        <div className="shadow p-3 mb-5 bg-white rounded fixed-top">
            <div className="container">
            <div>
            <h3 className="title float-left">Aquero</h3>
            <div className="float-right searchTitle">
           
            <input type="text" id="search1" name="fname" style={{background: "white", opacity: 1}} placeholder="Search for programming concept that you want to learn"/>
                        <button type="button" className="btn btn-danger" >Search</button>
            </div>
            </div>
        </div>
            
           

        </div>

        
        

      )
    }
  }

  export default Navbar