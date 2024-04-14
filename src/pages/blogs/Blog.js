import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoreDropdown } from "../../components/MoreDropdown";

const Blog = (props) => {
  const {
    id,
    owner,
    profile_id,
    title,
    content,
    image,
    updated_at,
    blogPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/blogpost/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/blogpost/${id}`);
      history.push(`/blogposts`);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
         
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && blogPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/blogpost/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        
      </Card.Body>
    </Card>
  );
};

export default Blog;