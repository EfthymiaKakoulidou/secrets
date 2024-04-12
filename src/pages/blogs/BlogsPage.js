import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Blog from "./Blog";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Profiles from "../profiles/Profiles";

function BlogsPage({ message, filter = "" }) {
  const [blogs, setBlogs] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query] = useState("");

  useEffect(() => {
    console.log("Effect triggered");
    const fetchBlogs = async () => {
      try {
        console.log("Fetching data...");
        const { data } = await axiosReq.get(`/blogposts/?${filter}search=${query}`);
        console.log("Fetched data:", data);
        setBlogs(data);
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching data:", err);
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchBlogs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);
  console.log("Rendering component");
  
  console.log(blogs)
  return (
    <Row className="h-100">
  
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="p-4">Admin blog </p>
        <Profiles mobile />

        {hasLoaded ? (
          <>
            {blogs.length ? (
              
              <InfiniteScroll
                children={blogs.map((blog) => (
                  <Blog key={blog.id} {...blog} setBlogs={setBlogs} />
                ))}
                dataLength={blogs.length}
                loader={<Asset spinner />}
                hasMore={!!blogs.next}
                next={() => fetchMoreData(blogs, setBlogs)}
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

export default BlogsPage;