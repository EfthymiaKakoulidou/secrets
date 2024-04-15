import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/UseRedirect";
import styles from "../../styles/ReachoutCreateForm.module.css";

function ReachoutCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [profiles, setProfiles] = useState([]);
  const [reachoutData, setReachoutData] = useState({
    reach_out_to: "",
    content: "",
  });
  const { reach_out_to, content } = reachoutData;
  const history = useHistory();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axiosReq.get("/profiles/");
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchProfiles();
  }, []);

  const handleChange = (event) => {
    setReachoutData({
      ...reachoutData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosReq.post("/reach_out/", reachoutData);
      history.push(`/reach_out/`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
console.log(profiles);
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={5} lg={12} className="px-5">
          <Container>
            <Form.Group>
              <Form.Label>Reach Out To</Form.Label>
              <Form.Control
                as="select"
                name="reach_out_to"
                value={reach_out_to}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                {profiles.results?.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.owner}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="content"
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className={styles.button} type="submit">
              Create
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ReachoutCreateForm;