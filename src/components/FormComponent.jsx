import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";
import InputFields from "./InputFields";

function FormComponent({
  title,
  inputs = [],
  buttonText,
  onSubmit,
  footer,
  error,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    for (let el of e.target.elements) {
      if (el.name) formData[el.name] = el.value;
    }
    onSubmit(formData);
  };

  return (
    <Card className="shadow-lg p-4 border-0 rounded-4">
      <Card.Body>
        <h3 className="text-center mb-4">{title}</h3>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input, idx) => (
            <InputFields key={idx} {...input} />
          ))}

          {/* ✅ Error message */}
          {error && (
            <div className="text-danger text-center mb-3">
              <small>{error}</small>
            </div>
          )}

          <CustomButton text={buttonText} />

          {footer && <div className="text-center mt-3">{footer}</div>}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormComponent;
