import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Diary from "./Diary";


function DiaryPage() {
    const { id } = useParams();
    const [diary, setDiary] = useState({ results: [] });
    

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: diary }] = await Promise.all([
              axiosReq.get(`/diary/${id}`),
              axiosReq.get(`/comments/?diary=${id}`),
            ]);
            setDiary({ results: [diary] });
            
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);
     

  return (
    <Row className="h-100">
 
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      <p className="px-5 ml-1 pt-5">Diary Entry </p>
      <Diary {...diary.results[0]} setDiarys={setDiary} diaryPage truncateContent={false} />
      
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={4}>
          
          </Col>
          
    </Row>
  );
}

export default DiaryPage;