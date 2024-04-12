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
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Profiles from "../profiles/Profiles";

function PostsPage({ message, filter = "" }) {
  const [seecrets, setSeecrets] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("Effect triggered");
    const fetchSeecrets = async () => {
      try {
        console.log("Fetching data...");
        const { data } = await axiosReq.get(`/seecrets/?${filter}search=${query}`);
        console.log("Fetched data:", data);
        setSeecrets(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchSeecrets();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);
  console.log("Rendering component");
  console.log(seecrets.results.results);
  console.log(seecrets)
  return (
    <Row className="h-100 justify-content-end">
    
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="p-4">Secrets</p>
        <Profiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
       
        {hasLoaded ? (
          <>
            {seecrets.results.length ? (
              
              <InfiniteScroll
                children={seecrets.results.map((seecret) => (
                  <Post key={seecret.id} {...seecret} setSeecrets={setSeecrets} />
                ))}
                dataLength={seecrets.results.length}
                loader={<Asset spinner />}
                hasMore={!!seecrets.next}
                next={() => fetchMoreData(seecrets, setSeecrets)}
              />
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
      <Col className="py-2 p-0 p-lg-2" lg={4}>
      <p className="p-4">Profiles</p>
        <Profiles/>
      </Col>
    </Row>
  );
}

export default PostsPage;