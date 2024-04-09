import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function ReachoutCreateForm(props) {
  const { setProfile, setReach_outs, profileImage, profile_id, reach_out_to } = props;
  const [reach_out_content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await axiosRes.post("/reach_out", {
        reach_out_content,
        reach_out_to,
      });
      console.log('Response:', data);
      setReach_outs((prevReach_outs) => ({
        ...prevReach_outs,
        results: [data, ...prevReach_outs.results],
      }));
      console.log('Response:', data);
      setProfile((prevProfile) => ({
        results: [
          {
            ...prevProfile.results[0],
            reach_outs_count: prevProfile.results[0].reach_outs_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
      
    }
  };
  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="reach out to this profile..."
            as="textarea"
            value={reach_out_content}
            onChange={handleChange}
            rows={5}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!reach_out_content.trim()}
        type="submit"
      >
        reach out
      </button>
    </Form>
  );
}

export default ReachoutCreateForm;