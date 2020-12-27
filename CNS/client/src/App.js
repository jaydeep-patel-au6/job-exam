import React, { useEffect, createContext,useReducer,useContext } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/screens/Home";
import Signin from "./components/screens/SignIn";
import Profile from "./components/screens/Profile";
import ProfileBlog from "./components/screens/ProfileBlog";
import Signup from "./components/screens/Signup"; 
import UserProfile from "./components/screens/UserProfile";
// import ScrapRequest1 from './components/screens/ScrapRequest'
// import ScrapStatus from './components/screens/ScrapData'
import { BrowserRouter, Switch, Route, Link,useHistory } from "react-router-dom";
import CretePost from "./components/screens/CreatePost";
import { reducer, initialState } from './reducers/userReducer'
import "./App.css";
// import Reset from './components/screens/Reset'
// import NewPassword from './components/screens/NewPassword'
import CreateBlog from './components/screens/CreateBlog'
import AllBlog from './components/screens/AllBlog'
import Footer from './components/Footer'
import Work from './components/userScreen/Work'
import UserBlog from './components/userScreen/UserBlog'
import UserProject from './components/userScreen/UserProject'
import Contact from './components/userScreen/Contact'
import AboutUs from './components/userScreen/AboutUs'



//Creating context
export var UserContext = createContext();

var Routing = () => {

  var history=useHistory()
  var {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/user'))
           history.push('/bloguser')
    }

    

    

   
  },[])
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user-work">
        <Work />
      </Route>
      <Route exact path="/user-aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/bloguser">
        <UserBlog />
      </Route>
      <Route exact path="/user-projectuser">
        <UserProject />
      </Route>
      <Route exact path="/user-contact">
        <Contact />
      </Route>
      <Route exact path="/allblog">
        <AllBlog />
      </Route>
      <Route exact path="/user-signin">
        <Signin />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/profileblog">
        <ProfileBlog />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/create">
        <CretePost />
      </Route>
      <Route exact path="/createblog">
        <CreateBlog />
      </Route>
      <Route exact path="/profile/:userid">
        <UserProfile />
      </Route>
     
     
    </Switch>
  );
};

function App() {
  var [state,dispatch]=useReducer(reducer,initialState)
  return (
   
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing/>
      <Footer></Footer>

    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
