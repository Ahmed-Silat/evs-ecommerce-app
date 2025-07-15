// src/components/CheckoutCartSummary.jsx
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function CheckoutCartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 5.0 : 0.0;
  const total = subtotal + shipping;

  return (
    <Card className="shadow-lg border-0 rounded-4 p-3">
      <h4 className="mb-3">Order Summary</h4>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between"
            >
              <div>
                <strong>{item.name}</strong>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  Qty: {item.quantity}
                </div>
              </div>
              <div className="fw-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </ListGroup.Item>
          ))}

          {/* Subtotal */}
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </ListGroup.Item>

          {/* Shipping */}
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </ListGroup.Item>

          {/* Total */}
          <ListGroup.Item className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Card>
  );
}

export default CheckoutCartSummary;
