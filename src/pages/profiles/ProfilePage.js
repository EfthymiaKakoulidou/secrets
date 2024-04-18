import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Asset from '../../components/Asset'

import styles from '../../styles/ProfilePage.module.css'
import appStyles from '../../App.module.css'

import Profiles from './Profiles'
import { useParams } from 'react-router'
import { axiosReq } from '../../api/axiosDefaults'
import {
  useProfileData,
  useSetProfileData
} from '../../contexts/ProfileDataContext'
import { Image } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from '../posts/Post'
import { fetchMoreData } from '../../utils/utils'
import NoResults from '../../assets/no-results.png'
import { ProfileEditDropdown } from '../../components/MoreDropdown'

function ProfilePage () {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [profileSeecrets, setProfileSeecrets] = useState({ results: [] })

  const { id } = useParams()

  const { setProfileData } = useSetProfileData()
  const { pageProfile } = useProfileData()

  const [profile] = pageProfile.results

  // Fetch the profile data from the API.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileSeecrets }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}`),
            axiosReq.get(`/seecrets/?owner__profile=${id}`)
          ])
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] }
        }))
        setProfileSeecrets(profileSeecrets)
        setHasLoaded(true)
      } catch (err) {

      }
    }
    fetchData()
  }, [id, setProfileData])

  const mainProfile = (
    <>
      <Row noGutters className='px-3 text-center align-items-center'>
        <Col lg={3} className='text-lg-left position-relative'>
          <div className={styles.ProfileContainer}>
            <Image loading="lazy" className={styles.ProfileImage} roundedCircle src={profile?.image} />

          </div>
        </Col>

        <Col lg={6}>
          <strong className='m-2'>{profile?.owner}</strong>
        </Col>

        <Col lg={3} className='text-lg-left position-relative'>
          <div className={styles.ProfileContainer}>

            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
          </div>
        </Col>
        {profile?.content && <Col className='p-3'>{profile.content}</Col>}
      </Row>
    </>
  )

  const mainProfileSeecrets = (
    <>
      <hr />
      <p className='text-center'>{profile?.owner}'s secrets</p>
      <hr />
      {profileSeecrets.results.length
        ? (
          <InfiniteScroll
            children={profileSeecrets.results.map((seecret) => (
              <Post key={seecret.id} {...seecret} setPosts={setProfileSeecrets} />
            ))}
            dataLength={profileSeecrets.results.length}
            loader={<Asset spinner />}
            hasMore={!!profileSeecrets.next}
            next={() => fetchMoreData(profileSeecrets, setProfileSeecrets)}
          />
          )
        : (
          <Asset
            src={NoResults}
            message={`No results found, ${profile?.owner} hasn't posted yet.`}
          />
          )}
    </>
  )

  return (
    <Row>
      <Col className='py-2 p-0 p-lg-2' lg={6}>
        <p className='px-5 pt-5'>My Profile</p>
        <Container className={appStyles.Content}>
          {hasLoaded
            ? (
              <>
                {mainProfile}
                {mainProfileSeecrets}
              </>
              )
            : (
              <Asset spinner />
              )}
        </Container>
      </Col>
      <Col lg={4} className=' d-lg-block px-5 p-lg-2'>
        <p className='px-5 pt-5'>All profiles</p>
        <Profiles />
      </Col>
    </Row>
  )
}

export default ProfilePage
