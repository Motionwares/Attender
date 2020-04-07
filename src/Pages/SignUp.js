import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from './../Assets/logo.svg';
import signUpIllustartion from './../Assets/signUpIllustartion.svg';

import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container className="py-5">
      <Row className="py-4">
        <Col md="7">
          <div className="d-flex flex-column">
            <img src={Logo} className="img-fluid mb-5" alt="logoImage" />
            <img src={signUpIllustartion} className="img-fluid mt-5" alt="logoImage" />
          </div>
        </Col>

        <Col md="5">
          <h1 className="h3 mt-4 font-weight-black">Sign Up</h1>

          <Form className="mt-5">
            <FormGroup>
              <Label className="grayColor mb-1" for="exampleEmail">Email</Label>
              <Input className="inputBg border-0 rounded-sm" type="email" name="email" id="exampleEmail" placeholder="johnmartin@email.com" />
            </FormGroup>

            <FormGroup className="mt-5">
              <Label className="grayColor mb-1" for="examplePassword">Password</Label>
              <Input className="inputBg border-0 rounded-sm" type="password" name="password" id="examplePassword" placeholder="**********" />
            </FormGroup>

            <div className="mt-4">&nbsp;</div>

            <button className="mb-2 btn btn-danger btn-block btn-lg rounded-sm">
              <span style={{ fontSize: "16px" }}>Sign Up</span>
            </button>

            <Link to="/" className="text-dark">Already have an account?, <span className="text-danger">Login</span></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;