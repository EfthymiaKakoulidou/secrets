import React, { useRef, useState, } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/UseRedirect";

function BlogCreateForm() {
  useRedirect("loggedOut");
    const [errors, setErrors] = useState({});

    const [blogData, setBlogData] = useState({
      title: "",
      content: "",
      image: "",
    });
    const { title, content, image } = blogData;

    const imageInput = useRef(null);
    const history = useHistory();
  
    const handleChange = (event) => {
      setBlogData({
        ...blogData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleChangeImage = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setBlogData({
          ...blogData,
          image: URL.createObjectURL(event.target.files[0]),
        });
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", imageInput.current.files[0]);
  
      try {
        await axiosReq.post("/blogposts/", formData);
        history.push(`/blogposts/`);
      } catch (err) {
        
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    const textFields = (
      <div className="text-center">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
  
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
  
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (

      <Row className="h-100 " md={12}>
        <Col className="py-2 px-5 p-md-2" md={12} lg={6}>
        <p className="px-5 pt-5">Add admin blogpost  </p>
        <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 px-5 p-md-2" md={12} lg={10}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            
          </Container>
        
          <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
      </Row>
    </Form>
    </Col>
    </Row>
  );
}

export default BlogCreateForm;