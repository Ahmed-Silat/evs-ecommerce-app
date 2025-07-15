import { Card, Form } from "react-bootstrap";
import InputFields from "./InputFields";

function FormComponent({ title, inputs, formData, setFormData, error }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="shadow-lg border-0 rounded-4 p-4">
      <Form onSubmit={handleSubmit}>
        <h3 className="mb-4">{title}</h3>

        {error && <div className="mb-3 text-danger fw-semibold">{error}</div>}

        {inputs.map((input) => (
          <InputFields
            key={input.name}
            {...input}
            value={formData[input.name] || ""}
            onChange={handleChange}
          />
        ))}
      </Form>
    </Card>
  );
}

export default FormComponent;
