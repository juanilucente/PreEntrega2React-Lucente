import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.email.includes('@')) {
      setError("Por favor ingresa un correo electrónico válido.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulario enviado!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="contact-info">
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        <p>Email: support@lucenteparfums.com</p>
        <p>Teléfono: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
