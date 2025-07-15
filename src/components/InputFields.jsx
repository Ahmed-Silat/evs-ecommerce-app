import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";

function InputFields({
  label,
  name,
  type,
  placeholder,
  required = false,
  showToggle = false,
}) {
  const [show, setShow] = useState(false);

  return (
    <Form.Group controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      {type === "password" && showToggle ? (
        <InputGroup>
          <Form.Control
            name={name}
            type={show ? "text" : "password"}
            placeholder={placeholder}
            size="lg"
            required={required}
          />
          <InputGroup.Text
            style={{ cursor: "pointer" }}
            onClick={() => setShow(!show)}
          >
            {show ? <FiEyeOff /> : <FiEye />}
          </InputGroup.Text>
        </InputGroup>
      ) : (
        <Form.Control
          name={name}
          type={type}
          placeholder={placeholder}
          size="lg"
          required={required}
        />
      )}
    </Form.Group>
  );
}

export default InputFields;
