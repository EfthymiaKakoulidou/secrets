import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/UseRedirect";

function ReachoutEditForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [profiles, setProfiles] = useState([]);
  const [reachoutData, setReachoutData] = useState({
    reach_out_to: "",
    reach_out_content: "",
  });
  const { reach_out_to, reach_out_content } = reachoutData;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchReachout = async () => {
      try {
        const response = await axiosReq.get(`/reach_out/${id}/`);
        const reachout = response.data;
        setReachoutData({
          reach_out_to: reachout.reach_out_to,
          reach_out_content: reachout.reach_out_content,
        });
      } catch (error) {
        console.error("Error fetching reachout:", error);
      }
    };

    const fetchProfiles = async () => {
      try {
        const response = await axiosReq.get("/profiles/");
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchReachout();
    fetchProfiles();
  }, [id]);

  const handleChange = (event) => {
    setReachoutData({
      ...reachoutData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.put(`/reach_out/${id}/`, reachoutData);
      history.push(`/reach_out`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
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
                {profiles.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.username}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="reach_out_content"
                value={reach_out_content}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Update</Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ReachoutEditForm;