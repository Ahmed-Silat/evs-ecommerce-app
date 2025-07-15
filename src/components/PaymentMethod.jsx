// src/components/PaymentMethodSelector.jsx
import { Card, Form } from "react-bootstrap";

function PaymentMethod({ selectedMethod, setSelectedMethod }) {
  const methods = ["Cash on Delivery", "Credit Card", "JazzCash", "Easypaisa"];

  return (
    <Card className="shadow-sm border-0 rounded-4 p-3 mb-4">
      <h5 className="mb-3">Select Payment Method</h5>
      <Form>
        {methods.map((method, idx) => (
          <Form.Check
            key={idx}
            type="radio"
            id={`payment-${idx}`}
            label={method}
            name="paymentMethod"
            value={method}
            checked={selectedMethod === method}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="mb-2"
          />
        ))}
      </Form>
    </Card>
  );
}

export default PaymentMethod;
