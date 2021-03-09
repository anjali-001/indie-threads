import React, { useState } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import img from '../../pages/Home/assets/Img1.png'
import { Link } from "react-router-dom";
function NavHeader() {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown ] = useState(false);

  const searchClick = () => {
    setToggle(!toggle);
    if(dropdown) setDropdown(false)
  };

  return (
    <div className="navHeader navHeader__style">
      <Navbar className="custom-container">
        <Navbar.Brand href="/">
          <img className="navLogo" src={logo} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navHeader__item" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navHeader__item" href="/explore">
            Explore
          </Nav.Link>
          <Nav.Link className="navHeader__item" href="#pricing">
            Threads
          </Nav.Link>
        </Nav>
        <div className="navHeader__searchBorder">
          {toggle ? (
            <input
              placeholder="Search all games"
              type="text"
              className="navHeader__input"
            />
          ) : null}
          <Link
            to="/explore"
            className={
              (window.location.pathname == "/explore" && toggle ) ? "disable-click" : ""
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
          <FeatherIcon className="navHeader__user navHeader__icon" icon="user" onClick={()=> setDropdown(!dropdown)} />
          {dropdown?<div className="navHeader__dropdownContent" >
            <img className="mx-auto" src={img} />
            <p>username</p>
            <button className="">Sign in</button>
          </div>:null}
          
        </div>
          
      </Navbar>
    </div>
  );
}

export default NavHeader;
