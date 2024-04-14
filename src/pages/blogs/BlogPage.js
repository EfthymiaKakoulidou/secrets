import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Blog from "./Blog";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: blog }] = await Promise.all([
              axiosReq.get(`/blogpost/${id}`),
              axiosReq.get(`/comments/?blog=${id}`),
            ]);
            setBlog({ results: [blog] });
            
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);
    

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="p-4">Blogpost </p>
      <Blog {...blog.results[0]} setBlogs={setBlog} blogPage />
       
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
       
      </Col>
    </Row>
  );
}

export default BlogPage;