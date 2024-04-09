import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/UseClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async() => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
      <NavLink
        to="/seecrets/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-plus"></i>Add secret
      </NavLink>
  )
  
  const loggedInIcons = <>
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
    <i className="fas fa-stream"></i>My Diary
    </NavLink>

    <NavLink
      className={styles.NavLink}
      to="/"
      onClick = {handleSignOut}
    >
      <i className="fa-solid fa-sign-out-alt"></i>Sign Out
    </NavLink>

    <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
      <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
    </NavLink>

    <NavLink
        className={styles.NavLink}
        to={`/blogs/create`}
      >
      Add blogpost
    </NavLink>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/blogposts"
    >
    <i className="fas fa-stream"></i>Admin's Blogposts
    </NavLink>
      
</>;
  const loggedOutIcons = (
    <>
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
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon }

        <Navbar.Toggle ref={ref}
          onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;