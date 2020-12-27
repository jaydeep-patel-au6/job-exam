import React, { Component, useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const UserProject = () => {
  var [data, setData] = useState([]);
  var { state, dispatch } = useContext(UserContext);


  useEffect(() => {
    fetch("/allpost2", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Home", result);
        setData(result.posts);
      });
  }, []);

 

  //DELETEPOST

//   var deletePost = (postid) => {
//     console.log(postid);
//     fetch(`/deletepost/${postid}`, {
//       method: "delete",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("jwt"),
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("deletepost", result);
//         var newData = data.filter((item) => {
//           return item._id !== result._id;
//         });
//         setData(newData);
//       });
//   };

  return (
    <div className="home">
      {data.map((item) => {
        console.log(item);
        return (
          <div className="card home-card shadow p-3 mb-5 bg-white rounded">
            <h6>
              {/* <Link
                className="text-primary"
                style={{ fontSize: 30, color: 'red'}}
                to={
                  item.postedBy._id != state._id
                    ? `/profile/${item.postedBy._id}`
                    : "/profile"
                }
              >
                {item.postedBy.name}
              </Link> */}

              {/* {item.postedBy._id === state._id && (
                <i
                  className="material-icons"
                  style={{ color: "red", float: "right" }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )} */}
            </h6>
            
            <div className="">
             <div className="row">
              <div className="col"><img src={item.photo} /></div>
                <div className="col"><p>Project Description - {item.title}</p></div>
                <div className="col"> <p>Project Price in Rs - {item.body} </p><br></br></div>
             </div>
                

             

             
              
             
             
              
            </div>
          </div>
        );
      })}
    </div>
    
  );
};

export default UserProject;
