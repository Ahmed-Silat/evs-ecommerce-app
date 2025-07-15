// src/pages/Checkout.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutCartSummary from "../components/CheckoutCartSummary";
import PaymentMethod from "../components/PaymentMethod";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  //   const { cartItems } = useSelector((state) => state.cart);

  const handleOrderConfirmation = (data = formData) => {
    console.log("Full Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Address:", data.address);
    console.log("City:", data.city);
    console.log("ZIP Code:", data.zip);
    console.log("Payment Method:", paymentMethod);

    if (
      !data.fullName ||
      !data.email ||
      !data.address ||
      !data.city ||
      !data.zip
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (!paymentMethod) {
      setError("Please select a payment method.");
      return;
    }

    dispatch(clearCart());

    navigate("/order-success");
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center g-4">
          {/* Left Side: Form + Payment */}
          <Col md={6}>
            <div className="mb-4">
              <CheckoutForm
                formData={formData}
                setFormData={setFormData}
                error={error}
              />
            </div>
            <PaymentMethod
              selectedMethod={paymentMethod}
              setSelectedMethod={setPaymentMethod}
            />
            <div className="d-grid">
              <CustomButton
                text="Confirm Order"
                onClick={() => handleOrderConfirmation(formData)}
              />
            </div>
          </Col>

          {/* Right Side: Cart Summary */}
          <Col md={5}>
            <CheckoutCartSummary />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
