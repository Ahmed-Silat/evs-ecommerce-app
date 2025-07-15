// src/pages/OrderSuccess.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/"); // or "/" depending on your app
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="text-center shadow-lg p-4 border-0 rounded-4">
              <h2 className="mb-3 text-success">🎉 Order Successful!</h2>
              <p className="mb-4">
                Thank you for your purchase. Your order has been placed and will
                be processed shortly.
              </p>
              <Button
                variant="primary"
                className="rounded-pill px-4"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderSuccess;
