import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/netflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className=" fixed-top">

        <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={NetflixLogo} alt="Netflix logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle className="var custom-toggle" aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-between w-100 align-items-center">
              {/* Left Nav */}
              <Nav className="gap-3 " style={{ maxHeight: '100px' }}  navbarScroll>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Tv Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Latest</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
                <Nav.Link href="#">Browse by Languages</Nav.Link>
              </Nav>

              {/* Right Icons */}
              <Nav className="gap-3 header-icons " navbarScroll>
                <Nav.Link href="#"><SearchIcon /></Nav.Link>
                <Nav.Link href="#"><NotificationsIcon /></Nav.Link>
                <Nav.Link href="#"><AccountBoxIcon /></Nav.Link>
                <NavDropdown title="Lanuage" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Amharic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              </Nav>
      <Button className="nav-button" variant="outline-danger">Logout</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
};

export default Header;


