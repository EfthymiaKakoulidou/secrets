import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoreDropdown } from "../../components/MoreDropdown";

const Diary = ({ id, owner, title, content, updated_at, postPage, truncateContent }) => {
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/diary/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/diary/${id}`);
      history.push(`/diary`);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to truncate the content
  const truncatedContent = truncateContent ? (content ? content.substring(0, 30) : "") : content;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
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
      <Card.Body>
        <Link to={`/diary/${id}`}>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          {content && <Card.Text>{truncatedContent}</Card.Text>}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Diary;