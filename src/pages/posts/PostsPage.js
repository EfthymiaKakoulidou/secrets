import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";

function PostsPage({ message, filter = "" }) {
  const [seecrets, setSeecrets] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchSeecrets = async () => {
      try {
        const { data } = await axiosReq.get(`/seecrets`);
        console.log("Seecrets API response:", data); // Log response for debugging
        setSeecrets(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching seecrets:", err); // Log error for debugging
        // Handle error here, e.g., display error message to the user
      }
    };

    console.log("Fetching seecrets..."); // Log message for debugging
    setHasLoaded(false);
    fetchSeecrets();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {seecrets.results && seecrets.results.length ? (
              seecrets.results.map((seecret) => (
                <Post key={seecret.id} {...seecret} setSeecrets={setSeecrets} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;