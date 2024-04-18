/* eslint-disable camelcase */
import React from 'react'
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import { axiosRes } from '../../api/axiosDefaults'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { MoreDropdown } from '../../components/MoreDropdown'

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    hugs_count,
    hug_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setSeecrets
  } = props

  const currentUser = useCurrentUser()
  const is_owner = currentUser?.username === owner
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/seecrets/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/seecrets/${id}`)
      history.push('/seecrets')
    } catch (err) {

    }
  }

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post('/hugs/', { hug: id })
      setSeecrets((prevSeecrets) => ({
        ...prevSeecrets,
        results: prevSeecrets.results.map((seecret) => {
          return seecret.id === id
            ? { ...seecret, hugs_count: seecret.hugs_count + 1, hug_id: data.id }
            : seecret
        })
      }))
    } catch (err) {

    }
  }

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/hugs/${hug_id}`)
      setSeecrets((prevSeecrets) => ({
        ...prevSeecrets,
        results: prevSeecrets.results.map((seecret) => {
          return seecret.id === id
            ? { ...seecret, hugs_count: seecret.hugs_count - 1, hug_id: null }
            : seecret
        })
      }))
    } catch (err) {

    }
  }

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className='align-items-center justify-content-between'>
          <Link to={`/profiles/${profile_id + 1}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className='d-flex align-items-center'>
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/seecrets/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner
            ? (
              <OverlayTrigger
                placement='top'
                overlay={<Tooltip>You posted this!</Tooltip>}
              >
                <i class='fa-solid fa-hand-holding-hand' />
              </OverlayTrigger>
              )
            : hug_id
              ? (
                <span onClick={handleUnlike}>
                  <i className={`fa-solid fa-hand-holding-hand ${styles.Heart}`} />
                </span>
                )
              : currentUser
                ? (
                  <span onClick={handleLike}>
                    <i className={`fa-solid fa-hand-holding-hand ${styles.HeartOutline}`} />
                  </span>
                  )
                : (
                  <OverlayTrigger
                    placement='top'
                    overlay={<Tooltip>Log in to hug someone!</Tooltip>}
                  >
                    <i className='far fa-heart' />
                  </OverlayTrigger>
                  )}
          {hugs_count}
          <Link to={`/seecrets/${id}`}>
            <i className='far fa-comments' />
          </Link>
          {comments_count}
          <Link to='/reach_out'>
            <i class='fa-solid fa-envelope' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Post
