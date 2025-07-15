import { useParams } from "react-router-dom";
import { products } from "../mockData/Products";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
import RenderStars from "./RenderStars"; // Optional: for visual stars
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();

  if (!product) return <h4 className="text-center mt-5">Product not found</h4>;

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <Container>
        <Card className="shadow-lg border-0 rounded-4">
          <Row className="g-0">
            <Col md={6}>
              <Card.Img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-start"
                style={{
                  height: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              />
            </Col>
            <Col
              md={6}
              className="p-4 d-flex flex-column justify-content-center"
            >
              <Card.Body>
                <h2 className="mb-3">{product.name}</h2>
                <p className="text-muted">{product.description}</p>
                <h4 className="text-success fw-bold">
                  ${product.price.toFixed(2)}
                </h4>

                <div className="mb-2">
                  <strong>Category:</strong> {product.category}
                </div>
                <div className="mb-2">
                  <strong>Brand:</strong> {product.brand}
                </div>
                <div className="mb-2 d-flex align-items-center">
                  <strong className="me-2">Rating:</strong>
                  <span className="d-flex align-items-center">
                    <RenderStars rating={product.rating} />
                  </span>
                </div>
                <div className="mb-3">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`fw-bold ${
                      product.stock > 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>

                <Button
                  variant="primary"
                  className="w-100 py-2 mt-3"
                  disabled={product.stock <= 0}
                  onClick={() => dispatch(addToCart(product))}
                >
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default ProductDetails;
