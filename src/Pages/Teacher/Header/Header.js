import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }

    return (
        <>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="border border-bottom-2 fixed-top bg-light" style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}>
                <Container fluid>
                    <NavLink style={{ color: "#165aee" }} className="navbar-brand fw-bold" to="/home"> <img style={{ height: 60, width: 70 }} src="https://pbs.twimg.com/media/FIHQrBnUUAEI3ao?format=jpg&name=900x900" alt="banner" />Tutor Finder</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/teacher-dashboard">My Ads</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/post-pending">Pending</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/add-techer-ads">Add Post</NavLink>
                            {/* {
                                user?.email ?
                                    <div>
                                        <img style={{ height: 30, width: 30, borderRadius: "50%" }} src={user.photoURL} alt="user" />
                                        <span> {user.displayName}</span>
                                        <Button className="ms-2" onClick={logOut} variant="danger">LogOut</Button>
                                    </div>
                                    :
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/signin">Signin</NavLink>
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 100 }}>

            </div>
        </>
    );
};

export default Header;