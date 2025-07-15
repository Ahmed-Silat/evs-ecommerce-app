// src/components/CustomButton.jsx
import { Button } from "react-bootstrap";

function CustomButton({
  text,
  onClick,
  className = "",
  variant = "primary",
  size = "lg",
  ...rest
}) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`rounded-3 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
