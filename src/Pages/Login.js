import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from './../Assets/logo.svg';
import LoginIllustration from './../Assets/loginIllustration.svg';


import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container className="py-5">
      <Row className="py-4">
        <Col md="7">
          <div className="d-flex flex-column">
            <img src={Logo} className="img-fluid mb-5" alt="logoImage" />
            <img src={LoginIllustration} className="img-fluid mt-5" alt="logoImage" />
          </div>
        </Col>

        <Col md="5">
          <h1 className="h3 mt-4 font-weight-black">Login</h1>
          <p>Welcome back</p>

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

            <button className="btn btn-danger btn-block btn-lg rounded-sm mb-2">
              <span style={{ fontSize: "16px" }}>Login</span>
            </button>

            <Link to="/SignUp" className="text-dark">Don't have an account?, <span className="text-danger">Create one</span></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;