import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
function NavHeader() {
    return (
        <div className="navHeader">
  <Navbar className="navHeader__style">
    <Navbar.Brand href="/"><img className= "navLogo" src={logo}/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className ="navHeader__item" href="/">Home</Nav.Link>
      <Nav.Link className ="navHeader__item" href="#features">Explore</Nav.Link>
      <Nav.Link className ="navHeader__item" href="#pricing">Threads</Nav.Link>
    </Nav>
    <FeatherIcon className="navHeader__search navHeader__icon" icon="search"/>
    <FeatherIcon className="navHeader__user navHeader__icon" icon="user"/>
  </Navbar>

</div>
    )
}

export default NavHeader
