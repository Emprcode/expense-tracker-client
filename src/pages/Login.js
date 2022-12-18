import React from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { CustomField } from "../components/customFields/CustomField";
import { Link } from "react-router-dom";

const Login = () => {
  const inputFields = [
    // {
    //   label: "Full Name",
    //   placeholder: "Ram",
    //   name: "name",
    //   required: true,
    //   type: "text",
    // },
    {
      label: "Email",
      placeholder: "ram@gmail.com",
      name: "email",
      required: true,
      type: "text",
    },
    {
      label: "Password",
      placeholder: "********",
      name: "password",
      type: "password",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page shadow-lg ">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center rounded">
            <div className="info p-2 pt-5 text-white text-center">
              <h1>Welcome </h1>
              <p className="mt-4">
                Login to your account and Manage your finances
              </p>
            </div>
          </Col>
          <Col className="p-5">
            <div className="form">
              <h2>
                <i class="fa-solid fa-house-user"></i>Login
              </h2>
              <Form>
                {inputFields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="text-end">
               New to here?
                <Link to="/register">Register</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
