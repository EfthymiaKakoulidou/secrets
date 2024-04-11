import React, { useEffect, useState } from "react";
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
    content,
    id,
    reach_out_to,
    setProfile,
    setReach_outs,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [reachOutToName, setReachOutToName] = useState("");

  useEffect(() => {
    const fetchProfileName = async () => {
      try {
        const response = await axiosRes.get(`/profiles/${reach_out_to}`);
        setReachOutToName(response.data.owner);
      } catch (error) {
        console.error("Error fetching profile name:", error);
      }
    };
    fetchProfileName();
  }, [reach_out_to]);

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Link to={`/reach_out/${id}`}>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner} reached out to</span>
          <span className={styles.Owner}>{reachOutToName}</span>
          <span className={styles.Date}>{updated_at}</span>
          <span className={styles.Date}>{content}</span>
        </Media.Body>
        </Link>
      </Media>
    </>
  );
};
export default Reach_out;