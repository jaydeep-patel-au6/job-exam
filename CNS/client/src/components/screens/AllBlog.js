import React, { Component, useState, useEffect, useContext } from "react";
import { UserContext } from "./../../App";
import { Link } from "react-router-dom";

const AllBlog = () => {
  var [data, setData] = useState([]);
  var { state, dispatch } = useContext(UserContext);


  useEffect(() => {
    fetch("/allblog", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Home", result);
        setData(result.blogs);
      });
  }, []);

 

  

  return (
    <div className="home">
      {data.map((item) => {
        console.log(item);
        return (
          <div className="card home-card shadow p-3 mb-5 bg-white rounded">
            <h6>
              <Link
                className="text-primary"
                style={{ fontSize: 30, color: 'red'}}
                to={
                  item.postedBy._id != state._id
                    ? `/profile/${item.postedBy._id}`
                    : "/profile"
                }
              >
                {item.postedBy.name}
              </Link>

              
            </h6>
            
            <div className="">
             <div className="row">
              <div className="col"><img src={item.photo} /></div>
                <div className="col"><p>Blog Title - {item.title}</p></div>
                <div className="col"> <p>Blog Discription - {item.body} </p><br></br></div>
             </div>
                

             

             
              
             
             
              
            </div>
          </div>
        );
      })}
    </div>
    
  );
};

export default AllBlog;
