import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Diary from "./Diary";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Profiles from "../profiles/Profiles";
import DiaryCreateForm from "./DiaryCreateForm";

function DiarysPage({ message, filter = "" }) {
  const [diarys, setDiarys] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("Effect triggered");
    const fetchSeecrets = async () => {
      try {
        console.log("Fetching data...");
        const { data } = await axiosReq.get(`/diary`);
        console.log("Fetched data:", data);
        setDiarys(data);
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
 
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
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
            placeholder="Search diary entries"
          />
        </Form>
        <DiaryCreateForm/>
       
        {hasLoaded ? (
          
          <>
            {diarys.results.length ? (
              
              <InfiniteScroll
                children={diarys.results.map((diary) => (
                  <Diary key={diary.id} {...diary} setDiarys={setDiarys} />
                ))}
                dataLength={diarys.results.length}
                loader={<Asset spinner />}
                hasMore={!!diarys.next}
                next={() => fetchMoreData(diarys, setDiarys)}
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
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <Profiles/>
      </Col>
    </Row>
  );
}

export default DiarysPage;