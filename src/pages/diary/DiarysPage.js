import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Diary from "./Diary";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import DiaryCreateForm from "./DiaryCreateForm";

function DiarysPage({ message, filter = "" }) {
  const [diarys, setDiarys] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();


  useEffect(() => {
 
    const fetchSeecrets = async () => {
      try {
       
        const { data } = await axiosReq.get(`/diary`);
        
        setDiarys(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching data:", err);
       
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchSeecrets();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname]);
  
  return (
    <Row className="h-100">
      
      <Col className="py-2 p-0 p-lg-2" lg={6}>

      <p className="px-5 pt-5">My Diary</p>
        <DiaryCreateForm/>
        <p className="px-5 pt-5">Sometimes it helps to just write stuff down. </p>
            <p className="px-5 ">In some cases you might not be ready to open up to the world. </p>
            <p className="px-5 ">This space is just for you, to document your secrets and your thoughts.
            In this diary like in real life, you cannot change the past. Reading through your diary will make you observe your journey and realize
            how long you have come! </p>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={4}>
        <p className="px-5 pt-5">My Diary entries</p>

        {hasLoaded ? (
          
          <>
            {diarys.results.length ? (
              
              <InfiniteScroll
                children={diarys.results.map((diary) => (
                  <Diary key={diary.id} {...diary} setDiarys={setDiarys} truncateContent={true} />
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
      
    </Row>
  );
}

export default DiarysPage;