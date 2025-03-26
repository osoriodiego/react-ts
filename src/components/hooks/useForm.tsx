import { useState } from "react";

export const useForm = <T extends Record<string, string | number | boolean>>( initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return { formData, handleChange, handleSubmit };
};
