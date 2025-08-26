import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border rounded px-4 py-2"
          required
        />
        <button className="btn-primary w-full">Envoyer</button>
      </form>
    </div>
  );
}