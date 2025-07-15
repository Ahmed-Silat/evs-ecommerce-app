import { Button } from "react-bootstrap";

function CustomButton({ type = "submit", text, variant = "primary", size = "lg" }) {
  return (
    <Button type={type} variant={variant} size={size} className="w-100">
      {text}
    </Button>
  );
}

export default CustomButton;
