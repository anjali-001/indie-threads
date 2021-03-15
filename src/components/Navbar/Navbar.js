import React, { useState, useContext, useEffect } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import img from "../../pages/Home/assets/Img1.png";
import { Link } from "react-router-dom";
import { ExploreContext } from "../../context/ExploreContext";
import AuthContext from '../../auth'

function NavHeader() {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const {data,setExpData,setFilData} = useContext(ExploreContext);
  const [search, setSearch] = useState("");
  // console.log("navData>>>>>>>>>>>>", data);
  const user = useContext(AuthContext)
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

  const filterCards = () => {
    // console.log(search)
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
    console.log(arr)
    setExpData(arr)
    setFilData(arr)
  };

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
          {dropdown && user.currentUser ? (
            <div className="navHeader__dropdownContent">
              <img className="mx-auto" src={img} />
              <p className="navbar__username">username</p>
              <button className="">Profile</button>
              <button className="">Sign Out</button>
            </div>
          ) : null}
          {dropdown && !user.currentUser ? (
            <div className="navHeader__dropdownContent2">
              <button className="">Sign In/Register</button>
            </div>
          ) : null}
        </div>
      </Navbar>
    </div>
  );
}

export default NavHeader;
