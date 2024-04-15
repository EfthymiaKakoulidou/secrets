import React from "react";
import styles from "../../styles/Home.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import homepic2 from "../../assets/homepic2.jpg";

const Home = () => {
  
    const currentUser = useCurrentUser();
    
    return (
      <Row className="h-100 ">
        <Col className="py-2 p-0 p-lg-2" lg={6}>
          <h4 className="px-5 pt-5 text-center">Secrets</h4>
            <Card className={styles.Home}>
              <Card.Body className="p-4">
              Secrets is a secure and confidential platform designed to provide users with a safe space to share their secrets, write personal diaries, and engage in private messaging and comments. The app aims to offer emotional support and relief by allowing users to unburden themselves while also fostering connections with others going through similar experiences
              </Card.Body>
            </Card>
        </Col>
        <Col className="py-2 px-5 p-lg-2 mt-5 d-flex justify-content-center" lg={4}>
        <img src={homepic2} alt="tellsecrets"  />
        </Col>
      </Row>
    );
  };
  
  export default Home;