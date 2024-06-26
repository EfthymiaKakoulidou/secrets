import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import appStyles from '../../App.module.css'
import btnStyles from '../../styles/Button.module.css'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'
import { useRedirect } from '../../hooks/UseRedirect'

function DiaryCreateForm () {
  useRedirect('loggedOut')
  const [errors, setErrors] = useState({})

  const [postData, setPostData] = useState({
    title: '',
    content: ''

  })
  const { title, content } = postData

  const history = useHistory()

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)

    try {
      await axiosReq.post('/diary/', formData)
      history.push('/diary/')
      setPostData({
        title: '',
        content: ''
      })
    } catch (err) {
      console.error('Error creating diary entry:', err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const textFields = (
    <div>
      <Form>
        <Form.Label>Dear Diary...</Form.Label>
        <Form.Control
          as='textarea'
          rows={6}
          name='content'
          value={content}
          onChange={handleChange}
        />
      </Form>
      {errors?.content?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}
      <div>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => {}}
        >
          cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type='submit'>
          create
        </Button>
      </div>
    </div>
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={12} md={12} lg={12} className=' px-5'>
          <Container className={appStyles.Content}>{textFields}</Container>

        </Col>

      </Row>
    </Form>
  )
}

export default DiaryCreateForm
