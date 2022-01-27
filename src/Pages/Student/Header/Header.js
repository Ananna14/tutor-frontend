import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Button, Badge, Dropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { BagPlus, ListUl, Person, BsPersonCircle, BsPower } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth'
import './Header.css'
import blankImg from '../../../bannerImages/blank-profile.png';
import logo from '../../../bannerImages/logo-tutor-finder-1.png';

const Header = () => {
  const { user, logout, admin, teacher } = useAuth();
  const activeStyle = {
    fontWeight: "bold",
    color: "#A48484",
    borderBottom: "solid 2px #A48484"
  }
  const [scrolled, setScrolled] = useState(false);
  console.log(teacher);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="150" height="50" />
            </a>
          </div>
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-design" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-design" to="/about">Tutors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-design" to="/myOrder">My Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-design" to="/contact">Contact</Link>
              </li>
              {admin && <li className="nav-item">
                <Link className="nav-design" to="/admin">Admin Portal</Link>
              </li>}
              {teacher && <li className="nav-item">
                <Link className="nav-design" to="/teacher-dashboard">Teacher Portal</Link>
              </li>}
            </ul>
            {/* toggle loging logout  */}
            {!user?.email ?
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login" className='d-flex'><BsPersonCircle className="fs-5 pt-1" /> Login</Nav.Link>
              :
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <img src={user.photoURL || blankImg} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                  <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user.displayName}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={logout}><BsPower /> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
