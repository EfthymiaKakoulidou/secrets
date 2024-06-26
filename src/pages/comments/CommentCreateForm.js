/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import styles from '../../styles/CommentCreateEditForm.module.css'
import Avatar from '../../components/Avatar'
import { axiosRes } from '../../api/axiosDefaults'

function CommentCreateForm (props) {
  const { seecret, setSeecret, setComments, profileImage, profile_id } = props
  const [content, setContent] = useState('')

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axiosRes.post('/comments/', {
        content,
        seecret
      })
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results]
      }))
      setSeecret((prevSeecret) => ({
        results: [
          {
            ...prevSeecret.results[0],
            comments_count: prevSeecret.results[0].comments_count + 1
          }
        ]
      }))
      setContent('')
    } catch (err) {

    }
  }

  return (
    <Form className='mt-2 px-5' onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder='my comment...'
            as='textarea'
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type='submit'
      >
        post
      </button>
    </Form>
  )
}

export default CommentCreateForm
