import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Reachout from "./Reachout";
import ReachoutCreateForm from './ReachoutCreateForm'
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Profiles from "../profiles/Profiles";


function ReachOutssPage({ message, filter = "" }) {
  const [reach_outs, setReach_outs] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Effect triggered");
    const fetchReach_outs = async () => {
      try {
        console.log("Fetching data...");
        const { data } = await axiosReq.get(`/reach_out/`);
        console.log("Fetched data:", data);
        setReach_outs(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchReach_outs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname]);
  console.log("Rendering component");
 
  return (
    <Row className="h-100">
      
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="p-4">Reach out to someone!</p>
        <Profiles mobile />
      <ReachoutCreateForm className={styles.form} />
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={4}>
      <p className="p-4">My Messages</p>
        {hasLoaded ? (
          <>
            {reach_outs.results.length ? (
              
              <InfiniteScroll
                children={reach_outs.results.map((reach_out) => (
                  <Reachout key={reach_out.id} {...reach_out} setReach_outs={setReach_outs} />
                ))}
                dataLength={reach_outs.results.length}
                loader={<Asset spinner />}
                hasMore={!!reach_outs.next}
                next={() => fetchMoreData(reach_outs, setReach_outs)}
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
      
    </Row>
  );
}

export default ReachOutssPage;