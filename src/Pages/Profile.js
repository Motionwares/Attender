import React from 'react';
import BigProfile from './../Assets/bigProfile.svg';

// Libraries
import { Container } from 'reactstrap';

// Components
import Navbar from './../Components/Navbar';

const Profile = () => {

  const userEmail = localStorage.getItem("email");

  return (
    <>
      <Navbar />

      <Container>
        <div className="border shadow-sm my-3 py-5 text-center rounded">
          <img src={BigProfile} alt="ProfileImage" />

          <div className="mt-4">
            <p className="mb-0 font18 text-dark">Arya Stark</p>
            <p className="font18 grayColor">
              {userEmail}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;