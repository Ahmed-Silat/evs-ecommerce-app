import { Offcanvas, Button, Image, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeFromCart, updateQuantity } from "../store/cartSlice";

function AddToCartDrawer() {
  const dispatch = useDispatch();
  const { cartItems, showCart } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Offcanvas
      show={showCart}
      onHide={() => dispatch(closeCart())}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="d-flex mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-3 w-100">
                  <h6>{item.name}</h6>
                  <p className="text-muted mb-1">${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: parseInt(e.target.value),
                          })
                        )
                      }
                      style={{ width: "60px" }}
                    />
                    <Button
                      size="sm"
                      variant="danger"
                      className="ms-2"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <hr />
            <h5>Total: ${total.toFixed(2)}</h5>
            <Button variant="success" className="w-100 mt-2">
              Checkout
            </Button>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default AddToCartDrawer;
