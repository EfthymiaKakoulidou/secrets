import React from "react";
import styles from "../../styles/Diary.module.css";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";


const Diary = ({ id, owner, title, content, updated_at, diaryPage, truncateContent }) => {


  const truncatedContent = truncateContent ? (content ? content.substring(0, 30) : "") : content;

  return (
    <Card className={styles.Diary}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        <Link className={styles.Diary} to={`/diary/${id}`}>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          {content && <Card.Text>{truncatedContent}...</Card.Text>}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Diary;