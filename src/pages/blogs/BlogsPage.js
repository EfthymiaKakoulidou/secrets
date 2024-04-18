/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Blog from './Blog'
import Asset from '../../components/Asset'

import appStyles from '../../App.module.css'
import { useLocation } from 'react-router'
import { axiosReq } from '../../api/axiosDefaults'

import NoResults from '../../assets/no-results.png'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchMoreData } from '../../utils/utils'

function BlogsPage ({ message, filter = '' }) {
  const [blogs, setBlogs] = useState({ results: [] })
  const [hasLoaded, setHasLoaded] = useState(false)
  const { pathname } = useLocation()

  const [query] = useState('')

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosReq.get('/blogposts')

        setBlogs(data)
        setHasLoaded(true)
      } catch (err) {

      }
    }

    setHasLoaded(false)
    const timer = setTimeout(() => {
      fetchBlogs()
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [filter, query, pathname])

  return (
    <Row className='h-100'>

      <Col className='py-2 p-0 p-lg-2' lg={6}>
        <p className='px-5 pt-5'>Admin blog </p>
        <p className='px-5 pt-5'>In this blog you will find valuable information about what secret keeping means for your mental health and well being! </p>
        {hasLoaded
          ? (
            <>
              {blogs.results.length
                ? (

                  <InfiniteScroll
                    children={blogs.results.map((blog) => (
                      <Blog key={blog.id} {...blog} setBlogs={setBlogs} />
                    ))}
                    dataLength={blogs.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!blogs.next}
                    next={() => fetchMoreData(blogs, setBlogs)}
                  />
                  )
                : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults} message={message} />
                  </Container>
                  )}
            </>
            )
          : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
            )}
      </Col>

    </Row>
  )
}

export default BlogsPage
