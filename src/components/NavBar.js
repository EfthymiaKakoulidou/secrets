import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import Col from "react-bootstrap/Col";
import { removeTokenTimestamp } from "../utils/utils";


const NavBar = ({ mobile }) => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [isSuperuser, setIsSuperuser] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/dj-rest-auth/user/ ");
        setIsSuperuser(response.data.is_superuser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleSignOut = async() => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      
    }
  };
 
  
  const loggedInIcons = <>

    <NavLink to="/" className="d-none d-lg-inline">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
    </NavLink>

    <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
      <i class="fa-solid fa-user"></i>{currentUser?.username}
      
    </NavLink>

    <NavLink
        to="/seecrets/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-plus"></i>Share a secret
      </NavLink>

    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/seecrets"
    >
      <i className="fas fa-stream"></i>Secrets
    </NavLink>

    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/diary"
    >
      <i class="fa-solid fa-book"></i>My Diary
    </NavLink>

    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/reach_out"
    >
      <i class="fa-solid fa-envelope"></i>Messages
    </NavLink>

    {isSuperuser && (
      <NavLink
        to="/blogs/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-plus"></i>Add blogpost
      </NavLink>
    )}

    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/blogposts"
    >
      <i class="fa-solid fa-align-justify"></i>Blog
    
    </NavLink>

    <NavLink
      className={styles.NavLink}
      to="/"
      onClick = {handleSignOut}
    >
      <i className="fa-solid fa-sign-out-alt"></i>Sign Out
    </NavLink>

</>;


  const loggedOutIcons = (
    <>
    <NavLink to="/" className="d-none d-lg-inline">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>

      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
  
  return (
    <Col className="py-2 px-5 p-lg-2" lg={12}>
      
      <Navbar expand="lg" className="p-2">

        <Navbar.Toggle className={styles.NavToggle} aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="navbar-nav" className={expanded ? "show" : ""}>
          <Nav className="mr-auto text-right flex-column">
            
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavLink to="/" className="p-2 d-flex justify-content-center align-items-center d-lg-none">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
    </Col>
  );
};

export default NavBar;