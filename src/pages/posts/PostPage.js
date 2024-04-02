import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
    const { id } = useParams();
    const [seecret, setSeecret] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: seecret }] = await Promise.all([
              axiosReq.get(`/seecrets/${id}`),
            ]);
            setSeecret({ results: [seecret] });
            console.log(seecret);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);
    

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <Post {...seecret.results[0]} setSeecrets={setSeecret} postPage />
        <p>Post component</p>
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Profiles
      </Col>
    </Row>
  );
}

export default PostPage;