import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import ReachoutEditForm from "./ReachoutEditForm";

const Reach_out = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    reach_out_content,
    id,
    setProfile,
    setReach_outs,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reach_out/${id}`);
      setProfile((prevProfile) => ({
        results: [
          {
            ...prevProfile.results[0],
            reach_outs_count: prevProfile.results[0].reach_outs_count - 1,
          },
        ],
      }));

      setReach_outs((prevReach_outs) => ({
        ...prevReach_outs,
        results: prevReach_outs.results.filter((reach_out) => reach_out.id !== id),
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
          {showEditForm ? (
            <ReachoutEditForm
              id={id}
              profile_id={profile_id}
              reach_out_content={reach_out_content}
              profileImage={profile_image}
              setReach_outs={setReach_outs}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{reach_out_content}</p>
          )}
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
export default Reach_out;