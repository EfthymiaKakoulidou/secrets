/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import styles from '../../styles/CommentCreateEditForm.module.css'
import Avatar from '../../components/Avatar'
import { axiosRes } from '../../api/axiosDefaults'

function ReachoutCommentsCreateForm (props) {
  const { setReach_out, setReach_out_comments, profileImage, profile_id, reach_out } = props
  const [reach_out_comment_content, setReach_out_comment_content] = useState('')

  const handleChange = (event) => {
    setReach_out_comment_content(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axiosRes.post('/reach_out_comments/', {
        reach_out_comment_content,
        reach_out
      })
      setReach_out_comments((prevReach_out_comments) => ({
        ...prevReach_out_comments,
        results: [data, ...prevReach_out_comments.results]
      }))
      setReach_out((prevReach_out) => ({
        results: [
          {
            ...prevReach_out.results[0],
            comments_count: prevReach_out.results[0].reach_out_comments_count + 1
          }
        ]
      }))
      setReach_out_comment_content('')
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
            placeholder='Reply...'
            as='textarea'
            value={reach_out_comment_content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!reach_out_comment_content.trim()}
        type='submit'
      >
        post
      </button>
    </Form>
  )
}

export default ReachoutCommentsCreateForm
