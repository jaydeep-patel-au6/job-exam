import React, { Component,useContext,useRef,useEffect,useState } from 'react';
import Profile from './screens/Profile';
import {Link,useHistory} from "react-router-dom";

import { UserContext } from './../App';
// import ScrapRequest from './screens/ScrapRequest';
import M from 'materialize-css'
import AllProject from './screens/AllProject'

const NavBar = () => {
  const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
     useEffect(()=>{
         M.Modal.init(searchModal.current)
     },[])

     
  var renderList=()=>{
    if (state)   
    {
      return[
        <div className="container" style={{ fontSize: 35}}>

        <li><Link to="/">All Project</Link></li>,
        <li><Link to="/allblog">All Blog</Link></li>,
        <li><Link to="/profile">Admin Project List</Link></li>,
        <li><Link to="/profileblog">Admin Blog List</Link></li>,
        <li><Link to="/create">Create Project</Link></li>,
        <li><Link to="/createblog">Create Blog</Link></li>,
        <li><Link to="/signup">SignUp Admin</Link></li>,
        
        
      

        <li><button
        className="btn btn-warning"
        onClick={() => {localStorage.clear()
          dispatch({type:"CLEAR"})
        history.push('/user-signin')}} 
      >
        LogOut
      </button></li></div>
      ]

    }else{
      return [
        <li><Link to="/user-aboutus">About Us</Link></li>,
        <li><Link to="/user-work">Our Work</Link></li>,
        <li><Link to="/bloguser">Blogs</Link></li>,
        <li><Link to="/user-projectuser">Projects</Link></li>,
        <li><Link to="/user-contact">Contact Us</Link></li>,
        <li><Link to="/user-signin">Admin</Link></li>,
        // <li><Link to="/signup">SignUp</Link></li>,
        
      ]

    }
  }

  const fetchUsers = (query)=>{
    setSearch(query)
    fetch('/search-users', {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query
      })
    }).then(res=>res.json())
    .then(results=>{
      setUserDetails(results.user)
    })
 }

    return ( <nav>
        <div className="nav-wrapper white" >
          <Link to={state?"/" : "/bloguser"} className="brand-logo left ml-5" >CNS</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
        <div id="modal1" class="modal" ref={searchModal} style={{color:"black"}}>
          <div className="modal-content">
          <input
            type="text"
            placeholder="search users"
            value={search}
            onChange={(e)=>fetchUsers(e.target.value)}
            />
             <ul className="collection">
               {userDetails.map(item=>{
                 return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
                   M.Modal.getInstance(searchModal.current).close()
                   setSearch('')
                 }}><li className="collection-item">{item.email}</li></Link> 
               })}
               
              </ul>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
          </div>
        </div>
      </nav> );
}
 
export default NavBar;