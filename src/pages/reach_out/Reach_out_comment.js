/* eslint-disable camelcase */
import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import styles from '../../styles/Comment.module.css'
import appstyles from '../../styles/Diary.module.css'


const Reach_out_comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    reach_out_comment_content
  } = props


  return (
    <>

      <Media className={appstyles.Diary}>

        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>

        <Media.Body className='px-5 align-self-center ml-2'>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
        </Media.Body>
        <p className='px-5'>{reach_out_comment_content}</p>
      </Media>
    </>
  )
}
export default Reach_out_comment
