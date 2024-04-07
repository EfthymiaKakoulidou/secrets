import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";


const Profiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    Profiles: { results: [] },
  });
  const { Profiles } = profileData;
 
 
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/"
        );
        setProfileData((prevState) => ({
          ...prevState,
          Profiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);
  
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {Profiles.length ? (
        <>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {Profiles.slice(0, 4).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
              ))}
            </div>
          ) : (
            Profiles.map((profile) => (
              <p key={profile.id}>{profile.owner}</p>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default Profiles;