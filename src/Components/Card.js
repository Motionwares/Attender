import React from 'react';


import Male from './../Assets/male.svg';
import Female from './../Assets/female.svg';


import { Card, CardBody } from 'reactstrap';

const CustomCard = (props) => {

  console.log(props);
  let genderImage = Male;

  if (props.gender === "Female") {
    genderImage = Female;
  }


  return (
    <Card className="text-center grayColor shadow-sm mt-3" style={{ height: "278px" }}>
      <CardBody className="d-flex flex-column justify-content-center align-items-center">

        <img src={genderImage} className="img-fluid" />

        <div className="mt-2">
          <p className="font18 mb-0 text-dark">
            {props.name}
          </p>

          <p className="font18 mb-0">
            {props.email}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default CustomCard
