/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import appStyles from '../../App.module.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'
import Post from './Post'
import CommentCreateForm from '../comments/CommentCreateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import Comment from '../comments/Comment'
import Asset from '../../components/Asset'
import { fetchMoreData } from '../../utils/utils'
import InfiniteScroll from 'react-infinite-scroll-component'
import Profiles from '../profiles/Profiles'

function PostPage () {
  const { id } = useParams()
  const [seecret, setSeecret] = useState({ results: [] })
  const currentUser = useCurrentUser()
  const profile_image = currentUser?.profile_image
  const [comments, setComments] = useState({ results: [] })

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: seecret }, { data: comments }] = await Promise.all([
          axiosReq.get(`/seecrets/${id}`),
          axiosReq.get(`/comments/?seecret=${id}`)
        ])
        setSeecret({ results: [seecret] })
        setComments(comments)
      } catch (err) {

      }
    }

    handleMount()
  }, [id])

  return (
    <Row className='h-100'>

      <Col className='py-2 p-0 p-lg-2' lg={6}>
        <p className='px-5 pt-5'>Secret</p>
        <Post {...seecret.results[0]} setSeecrets={setSeecret} postPage />

        <Container className={appStyles.Content}>
          <CommentCreateForm
            profile_id={currentUser?.profile_id}
            profileImage={profile_image}
            seecret={id}
            setSeecret={setSeecret}
            setComments={setComments}
          />
          {comments.results.length
            ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setSeecret={setSeecret}
                    setComments={setComments}
                  />
                ))}
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
              )
            : null}
        </Container>
      </Col>
      <Col lg={4} className='d-none d-lg-block p-0 p-lg-2'>
        <p className='px-5 pt-5'>Profiles</p>
        <Profiles />
      </Col>
    </Row>
  )
}

export default PostPage
