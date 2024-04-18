/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'
import { useRedirect } from '../../hooks/UseRedirect'
import styles from '../../styles/ReachoutCreateForm.module.css'
import { Alert } from 'react-bootstrap'

function ReachoutCreateForm () {
  useRedirect('loggedOut')
  const [errors, setErrors] = useState({})
  const [profiles, setProfiles] = useState([])
  const [reachoutData, setReachoutData] = useState({
    reach_out_to: '',
    content: ''
  })
  const { reach_out_to, content } = reachoutData
  const history = useHistory()

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axiosReq.get('/profiles/')
        setProfiles(response.data)
      } catch (error) {
        console.error('Error fetching profiles:', error)
      }
    }
    fetchProfiles()
  }, [])

  const handleChange = (event) => {
    setReachoutData({
      ...reachoutData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axiosReq.post('/reach_out/', reachoutData)
      history.push('/reach_out/')
      window.location.reload()
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={12} lg={12} className='px-5'>
          <Container>
            <Form.Group>
              <Form.Label>Reach Out To</Form.Label>
              <Form.Control
                as='select'
                name='reach_out_to'
                value={reach_out_to}
                onChange={handleChange}
              >
                <option value=''>Select...</option>
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
                as='textarea'
                rows={4}
                name='content'
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}
            <Button className={styles.button} type='submit'>
              Create
            </Button>
            <p>Getting closer may help!</p>
            <p>Here you can reach out to people privately.
              Contact the people you want to share your thoughts with, or just show your support without going public!
            </p>
          </Container>
        </Col>
      </Row>
    </Form>
  )
}

export default ReachoutCreateForm
