import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/netflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className=" fixed-top">
        {/* <div className="header-container">
        <div className="header_left">
          <ul>
            <Navbar.Brand>
              <img src={NetflixLogo} alt="Netflix logo" width="100" />
            </Navbar.Brand>
        
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
            
          </ul>
        </div>
      </div> */}
        <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={NetflixLogo} alt="Netflix logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle className="var" aria-controls="navbarScroll" />

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
                {/* <Nav.Link href="#"><ArrowDropDownIcon /></Nav.Link> */}
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


// import React from "react";
// import "./Header.css";
// import NetflixLogo from "../../assets/images/netflixLogo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="fixed-top">
//       <Navbar expand="lg" className="bg-black">
//         <Container fluid>
//           <Navbar.Brand href="/">
//             <img src={NetflixLogo} alt="Netflix logo" width="100" />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <div className="d-flex justify-content-between w-100 align-items-center">
//               {/* Left Nav */}
//               <Nav className="gap-3">
//                 <NavLink to="/" className="nav-link">Home</NavLink>
//                 <NavLink to="/tv" className="nav-link">Tv Shows</NavLink>
//                 <NavLink to="/movies" className="nav-link">Movies</NavLink>
//                 <NavLink to="/latest" className="nav-link">Latest</NavLink>
//                 <NavLink to="/my-list" className="nav-link">My List</NavLink>
//                 <NavLink to="/languages" className="nav-link">Browse by Languages</NavLink>
//               </Nav>

//               {/* Right Icons */}
//               <Nav className="gap-3 header-icons">
//                 <NavLink to="#" className="nav-link"><SearchIcon /></NavLink>
//                 <NavLink to="#" className="nav-link"><NotificationsIcon /></NavLink>
//                 <NavLink to="#" className="nav-link"><AccountBoxIcon /></NavLink>
//                 <NavLink to="#" className="nav-link"><ArrowDropDownIcon /></NavLink>
//               </Nav>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
