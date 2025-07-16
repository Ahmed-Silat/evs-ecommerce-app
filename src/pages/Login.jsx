import { Container, Row, Col } from "react-bootstrap";
import FormComponent from "../components/FormComponent";
import { Link } from "react-router";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  const formInputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
      showToggle: true,
    },
  ];

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <FormComponent
              title="Welcome Back"
              buttonText="Login"
              onSubmit={handleLogin}
              inputs={formInputs}
              formData={formData}
              setFormData={setFormData}
              footer={
                <small>
                  Don’t have an account? <Link to="/signup">Sign Up</Link>
                </small>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
