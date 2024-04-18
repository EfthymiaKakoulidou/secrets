/* eslint-disable camelcase */
import React from 'react'
import styles from '../../styles/Diary.module.css'
import { Card, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Diary = ({ id, owner, title, content, updated_at, diaryPage, truncateContent }) => {
  const truncatedContent = truncateContent ? (content ? content.substring(0, 30) : '') : content

  return (
    <Card className={styles.Diary}>
      <Card.Body className='px-5'>
        <Media className='align-items-center justify-content-between px-5'>
          <div className='d-flex align-items-center'>
            <span className={styles.CustomFont}>{updated_at}</span>
          </div>
        </Media>
        <Link className={styles.Diary} to={`/diary/${id}`}>
          {title && <Card.Title className={styles.CustomFont}>{title}</Card.Title>}
          <p className={styles.CustomFont}>Dear Diary,</p>
          {content && <Card.Text className={styles.CustomFont}>{truncatedContent}...</Card.Text>}
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Diary
