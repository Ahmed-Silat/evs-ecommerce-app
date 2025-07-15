// src/components/CheckoutForm.jsx
import FormComponent from "./FormComponent";

function CheckoutForm({ formData, setFormData, error }) {
  const formInputs = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      required: true,
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      required: true,
      placeholder: "Enter your city",
    },
    {
      label: "Zip Code",
      name: "zip",
      type: "text",
      required: true,
      placeholder: "Enter your zip code",
    },
  ];

  return (
    <FormComponent
      title="Checkout"
      inputs={formInputs}
      formData={formData}
      setFormData={setFormData}
      error={error}
    />
  );
}

export default CheckoutForm;
