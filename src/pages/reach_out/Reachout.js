import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import appstyles from "../../styles/Reachout.module.css";
import { axiosRes } from "../../api/axiosDefaults";


const Reach_out = (props) => {
  
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    reach_out_to,
    truncateContent
  } = props;

 
  const [reachOutToName, setReachOutToName] = useState("");
  const truncatedContent = truncateContent ? (content ? content.substring(0, 30) : "") : content;
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
      <Media className={appstyles.Reachout}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Link className={appstyles.Reachout} to={`/reach_out/${id}`}>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner} reached out to</span>
         
        </Media.Body>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{reachOutToName}</span>
        </Media.Body>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Date}>{updated_at}</span>
        </Media.Body>
        <Media.Body className="align-self-center ml-2">
          
          <span>{truncatedContent}...</span>
        </Media.Body>
        </Link>
      </Media>
    </>
  );
};
export default Reach_out;