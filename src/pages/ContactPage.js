import React from "react";

const ContactPage = () => (
  <div className="container mx-auto px-6 py-8">
    <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
    <form className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Nom"
        className="w-full border rounded px-4 py-2"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-4 py-2"
      />
      <textarea
        placeholder="Message"
        rows={5}
        className="w-full border rounded px-4 py-2"
      />
      <button className="btn-primary w-full">Envoyer</button>
    </form>
  </div>
);

export default ContactPage;