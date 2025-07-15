import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // ⭐️ Star icons
import { products } from "../mockData/Products"; // Adjust path if needed
import RenderStars from "./RenderStars";

function ProductCards() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-3">
      {products.map((product) => (
        <Col key={product.id}>
          <Card className="h-100 shadow-sm product-card">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{
                height: "500px", // Consistent height
                width: "100%", // Fill card width
                objectFit: "cover", // Crop to fit container nicely
                objectPosition: "center", // Center the image content
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                {product.description}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold">${product.price.toFixed(2)}</span>
                <div>{<RenderStars rating={product.rating} />}</div>
              </div>
              <div className="mt-2">
                <small className="text-muted">
                  Category: {product.category} | Brand: {product.brand}
                </small>
              </div>
              <div>
                <small
                  className={`fw-semibold ${
                    product.stock > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductCards;
