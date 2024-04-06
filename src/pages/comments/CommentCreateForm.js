import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { setSeecret, setComments, profileImage, profile_id, seecretid } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        seecretid, 
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      console.log(data)
      setSeecret((prevSeecret) => {
        if (!prevSeecret || !prevSeecret.results || !prevSeecret.results[0]) {
          return prevSeecret; 
        }
      
        const updatedResults = [
          {
            ...prevSeecret.results[0],
            comments_count: isNaN(prevSeecret.results[0].comments_count) ? 1 : prevSeecret.results[0].comments_count + 1,
          },
        ];
      
        return {
          ...prevSeecret,
          results: updatedResults,
        };
      });
      setContent("");
    } catch (err) {
      console.log(err.response);
      console.log(err.response.data);
      console.log(content);
      console.log(seecretid);
      
    }
  };

  return (
    <Form className="mt-2" onSubmit={(event) => handleSubmit(event)}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;