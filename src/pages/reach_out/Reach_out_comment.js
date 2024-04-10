import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Reach_out_comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    reach_out_comment_content,
    id,
    setReach_out,
    setReach_out_comments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reach_out_comments/${id}`);
      setReach_out((prevReach_out) => ({
        results: [
          {
            ...prevReach_out.results[0],
            reach_out_comments_count: prevReach_out.results[0].reach_out_comments_count - 1,
          },
        ],
      }));

      setReach_out_comments((prevReach_out_comments) => ({
        ...prevReach_out_comments,
        results: prevReach_out_comments.results.filter((reach_out_comment) => reach_out_comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};
export default Reach_out_comment;