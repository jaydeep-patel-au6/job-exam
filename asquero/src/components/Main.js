import React from 'react'




class Main extends React.Component {
    render(){
        return (
            <div className="">
              
              <div className="background-img">
                  <center>
                <div>
                    <div className="background-main">
                        <p className="p-1">KNOW MORE, GROW</p>
                        <p className="p-2">MORE</p>
                        <p className="p-3a">Find the best programming cources and tutorials</p>
                    </div>
                    <div>
                        <div className="box">
                        <div className="box-child">
                        <input type="text" id="fname" name="fname" style={{background: "white", opacity: 1}} placeholder="Search for programming concept that you want to learn"/>
                        <button type="button" className="btn btn-danger" >Search</button>
                        </div>
                        </div>
                    </div>
                    
                </div>
                </center>
              </div>
               

               
            </div>
        )
    }
} 

export default Main