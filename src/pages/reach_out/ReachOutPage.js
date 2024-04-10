import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Reachout from "./Reachout";
import ReachoutCreateForm2 from "./ReachoutCommentsCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import ReachoutCommentsCreateForm from "./ReachoutCommentsCreateForm";
import Reach_out_comment from "./Reach_out_comment";

function ReachOutPage() {
    const { id } = useParams();
    const [reach_out, setReach_out] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [reach_out_comments, setReach_out_comments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: reach_out }, { data: reach_out_comments }] = await Promise.all([
              axiosReq.get(`/reach_out/${id}`),
              axiosReq.get(`/reach_out_comments/?reach_out=${id}`),
            ]);
            setReach_out({ results: [reach_out] });
            setReach_out_comments(reach_out_comments);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);
     

console.log(reach_out)
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <Reachout {...reach_out.results[0]} setReach_outs={setReach_out} postPage />
        
        <Container className={appStyles.Content}>
          {currentUser ? (
        <ReachoutCommentsCreateForm
        profile_id={currentUser.profile_id}
        profileImage={profile_image}
        reach_out={id}
        setReach_out={setReach_out}
        setReach_out_comments={setReach_out_comments}
        />
        ) : reach_out_comments.results.length ? (
        "Comments"
        ) : null}
        {reach_out_comments.results.length ? (
            <InfiniteScroll
              children={reach_out_comments.results.map((comment) => (
                <Reach_out_comment
                  key={comment.id}
                  {...comment}
                  setReach_out={setReach_out}
                  setReach_out_comments={setReach_out_comments}
                />
              ))}
              dataLength={reach_out_comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!reach_out_comments.next}
              next={() => fetchMoreData(reach_out_comments, setReach_out_comments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Profiles
      </Col>
    </Row>
  );
}

export default ReachOutPage;