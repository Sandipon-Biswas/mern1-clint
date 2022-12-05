import React, { useContext, useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Logo from './Logo';
import './Nabber.css'
import { UserContext } from '../App';








const Nabber = () => {
  const {state,dispatch} = useContext(UserContext);

  // 
const Filternav = () => {
  if (state) {
    return(
    <>
    <NavLink to="/" className={({isActive})=> isActive ? "inactive" : "inactive"  } > Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > About</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > Contact</NavLink>
                <NavLink to="/logout" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > LogOut</NavLink>
    </>)
  } else {
    return(
    <>
    <NavLink to="/" className={({isActive})=> isActive ? "inactive" : "inactive"  } > Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > About</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > Contact</NavLink>
                <NavLink to="/login" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > Login</NavLink>
                <NavLink to="/signup" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > Signup</NavLink>
    </>)
  }
};

// 
    return (
<>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        < ><Link className="text-decoration-none"  to="/" > <Logo/> </Link></>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
                <Filternav/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </>
    )
}

export default Nabber
