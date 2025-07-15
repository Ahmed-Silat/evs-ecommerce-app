import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

function AppNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          🛍️ MyStore
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center gap-2">
          <Button variant="outline-light" onClick={() => navigate("/")}>
            Dashboard
          </Button>

          <Button
            variant="outline-light"
            onClick={() => dispatch(toggleCart())}
          >
            <FaShoppingCart className="me-1" />
            View Cart
            {cartCount > 0 && (
              <Badge bg="danger" className="ms-2">
                {cartCount}
              </Badge>
            )}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
