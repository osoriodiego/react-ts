// import { useState, ChangeEvent } from "react";
import { useForm } from "./hooks/useForm";

export const Form = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   console.log(formData);
  // }

  // function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   console.log(formData);
  // }

  const { formData, handleChange, handleSubmit } = useForm({
    name: "default name",
    email: "default email",
    phone: 1234567890,
    pass: "",
  });

  return (
    <>
      <h2>FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Enter your email"
            value={formData.email}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            placeholder="Enter your phone number"
            value={formData.phone}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pass"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pass
          </label>
          <input
            id="pass"
            name="pass"
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <pre>{JSON.stringify(formData)}</pre>
      </form>
    </>
  );
};
