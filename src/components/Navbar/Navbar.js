import React, {useState} from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
function NavHeader() {
  const [toggle,setToggle] = useState(false);

    return (
        <div className="navHeader navHeader__style">
  <Navbar className="custom-container">
    <Navbar.Brand href="/"><img className= "navLogo" src={logo}/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className ="navHeader__item" href="/">Home</Nav.Link>
      <Nav.Link className ="navHeader__item" href="#features">Explore</Nav.Link>
      <Nav.Link className ="navHeader__item" href="#pricing">Threads</Nav.Link>
    </Nav>
    <div className="navHeader__searchBorder">
    {toggle? <input placeholder="Search all games" type="text" className="navHeader__input"/>: null }
    <FeatherIcon className="navHeader__search navHeader__icon" icon="search"  onClick={() => setToggle(!toggle)}/>
    </div>
    <FeatherIcon className="navHeader__user navHeader__icon" icon="user"/>
  </Navbar>

</div>
    )
}

export default NavHeader
