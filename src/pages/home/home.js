import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";


const Home = () => {
  
    const currentUser = useCurrentUser();
    
    return (
      <Card className={styles.Post}>
        <Card.Body>
        Secrets is a secure and confidential platform designed to provide users with a safe space to share their secrets, write personal diaries, and engage in private messaging and comments. The app aims to offer emotional support and relief by allowing users to unburden themselves while also fostering connections with others going through similar experiences
        </Card.Body>
        
      </Card>
    );
  };
  
  export default Home;