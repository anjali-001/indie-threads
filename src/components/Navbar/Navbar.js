import React, { useState, useContext, useEffect } from "react";
import { Nav, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import AuthContext from '../../auth'
import fire from '../../fire'
import logo from "../../assets/logo.svg";
import img from "../../pages/Home/assets/Img1.png";
import { ExploreContext } from "../../context/ExploreContext";

import "./Navbar.css";

function NavHeader() {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const {data,setExpData,setFilData} = useContext(ExploreContext);
  const [search, setSearch] = useState("");
  const [loadingUser, setLoadingUser] = useState(true)
  
  const user = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const loggedIn = () => {
    if(sessionStorage.getItem("loggedIn")!== null){
      return true;
    }
    else{
      return false;
    }
  };

  const searchClick = () => {
    setToggle(!toggle);
    if (dropdown) setDropdown(false);
  };

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    filterCards()
  }, [search])

  useEffect(() => {

    const userRef = fire.firestore().collection("users");

    const getUsername = async () => {
        
        if(user.currentUser !== null){
          const userdata = await userRef.where("email", "==", user.currentUser.email).get()
          
          userdata.forEach(user => {
              setUserData(user.data());
              setLoadingUser(false);
          })
        }
    }
    
    
    getUsername();

  }, [user])
  

  const filterCards = () => {
    let arr=[];
    data.filter((item) => {
      if(item['title'].toLowerCase().includes(search.toLowerCase()))
        arr.push(item);
      else if(item.genre.filter(post => 
        {
          if(post.toLowerCase().includes(search.toLowerCase()))
          arr.push(item);
        }
      ));
    });
    setExpData(arr)
    setFilData(arr)
  };

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("loggedIn");
    fire.auth().signOut();
  }
  
  return (
    <div className="navHeader navHeader__style">
      <Navbar className="custom-container">
        <Navbar.Brand href="#">
          <img className="navLogo" src={logo} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navHeader__item" href="#">
            <Link className="navHeader__link" to="/">
            Home
            </Link>
          </Nav.Link>
          <Nav.Link className="navHeader__item" href="#">
            <Link className="navHeader__link" to="/explore">
            Explore
            </Link>
          </Nav.Link>
          <Nav.Link className="navHeader__item" href="#pricing">
            <Link className="navHeader__link" to="/">
            Threads
            </Link>
          </Nav.Link>
        </Nav>
        <div className="navHeader__searchBorder">
          {toggle ? (
            <input
              placeholder="Search all games"
              type="text"
              className="navHeader__input"
              onChange={searchInput}
            />
          ) : null}
          <Link
            to="/explore"
            className={
              window.location.pathname == "/explore" && toggle
                ? "disable-click"
                : ""
            }
          >
            <FeatherIcon
              className="navHeader__search navHeader__icon"
              icon="search"
              onClick={searchClick}
            />
          </Link>
        </div>
        <div className="navHeader__dropdown">
          <FeatherIcon
            className="navHeader__user navHeader__icon"
            icon="user"
            onClick={() => setDropdown(!dropdown)}
          />
          {dropdown && loggedIn()? (
            <div className="navHeader__dropdownContent">
              <img className="mx-auto" src={img} />
              {
                loadingUser !== true? 
                (
                  <p className="navbar__username">{userData.username}</p>                
                ) :  <p>Loading...</p>
              }
                <button className="">
                  <Link className="navHeader__Profile-icon" to={{
                      pathname:"/user/f",
                      props:  {
                        user:user
                      }
                    }}>
                    Profile
                  </Link>                  
                </button>
                <button className="" onClick={handleLogout}>Sign Out</button>
            </div>
          ) : null}
          {dropdown && !user.currentUser ? (
            <div className="navHeader__dropdownContent2">
              <Link className="" to="/login">Sign In/Register</Link>
            </div>
          ) : null}
        </div>
      </Navbar>
    </div>
  );
}

export default NavHeader;
