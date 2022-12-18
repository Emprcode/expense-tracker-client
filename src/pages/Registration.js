import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { CustomField } from "../components/customFields/CustomField";
import { toast } from "react-toastify";
import { postUser } from "../helpers/axioshelper";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (value && (name === "pin" || name === "confirmPin")) {
      if (!+value) {
        return toast.error("Only number allowed");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPin, ...rest } = form;

    if (confirmPin !== rest.pin) {
      toast.error("Pin doesnt match");
    }
    const { status, message } = await postUser(rest);
    toast[status](message);
  };

  const inputFields = [
    {
      label: "Full Name",
      placeholder: "Ram",
      name: "name",
      required: true,
      type: "text",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "ram@gmail.com",
      name: "email",
      required: true,
      type: "text",
      value: form.email,
    },
    {
      label: "Pin",
      placeholder: "****",
      name: "pin",
      type: "password",
      required: true,
      minLength: "4",
      maxLength: "4",
      value: form.pin,
    },
    {
      label: "Confirm Pin",
      placeholder: "****",
      name: "confirmPin",
      type: "password",
      required: true,
      minLength: "4",
      maxLength: "4",
      value: form.confirmPin,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page shadow-lg ">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center rounded">
            <div className="info p-2 pt-5 text-white text-center">
              <h1>👀Welcome to our system👀</h1>
              <p className="mt-4">
                Login to your account and Manage your finances
              </p>
            </div>
          </Col>
          <Col className="p-5">
            <div className="form">
              <h2>
                <i class="fa-solid fa-house-user"></i>Register
              </h2>
              <Form onSubmit={handleOnSubmit}>
                {inputFields.map((item, i) => (
                  <CustomField key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>

              <div className="text-end">
                Have an acount already
                <Link to="/">Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
