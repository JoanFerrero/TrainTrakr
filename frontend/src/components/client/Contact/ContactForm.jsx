import React, { useState } from "react";
import EmailService from "../../../services/EmailService";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    EmailService.sendEmail({ email: 'joan1smx@gmail.com ', username: name, email: email, content: message }, "contact")
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Página de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="border-2 border-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 border-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black font-bold mb-2">
            Motivo de Contacto
          </label>
          <textarea
            id="message"
            className="border-2 border-gray-200 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;