import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Blog from "./Blog";


function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: blog }] = await Promise.all([
              axiosReq.get(`/blogpost/${id}`),
              axiosReq.get(`/comments/?blog=${id}`),
            ]);
            setBlog({ results: [blog] });
            
          } catch (err) {
           
          }
        };
    
        handleMount();
      }, [id]);
    

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="px-5 pt-5">Blogpost </p>
      <Blog {...blog.results[0]} setBlogs={setBlog} blogPage />
       
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
       
      </Col>
    </Row>
  );
}

export default BlogPage;