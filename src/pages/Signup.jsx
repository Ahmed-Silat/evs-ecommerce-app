import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ FIXED
import FormComponent from "../components/FormComponent";

function Signup() {
  const [error, setError] = useState("");

  const handleSignup = (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // clear error
    // TODO: Add signup logic
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <FormComponent
              title="Create Your Account"
              inputs={[
                {
                  label: "Full Name",
                  name: "fullName",
                  type: "text",
                  placeholder: "Enter your full name",
                  required: true,
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "Enter your email",
                  required: true,
                },
                {
                  label: "Password",
                  name: "password",
                  type: "password",
                  placeholder: "Enter your password",
                  required: true,
                  showToggle: true,
                },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "Re-enter your password",
                  required: true,
                  showToggle: true,
                },
              ]}
              buttonText="Sign Up"
              onSubmit={handleSignup}
              error={error} // ✅ Pass error to FormComponent
              footer={
                <small>
                  Already have an account? <Link to="/login">Login</Link>
                </small>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
