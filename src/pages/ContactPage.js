import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
      <div className="max-w-lg mx-auto space-y-4">
        <a
          href="mailto:florentgorski@proton.me?subject=Contact%20Volt-Nomade"
          className="btn-primary w-full text-center block"
        >
          ✉️ Écrire un e-mail
        </a>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="block text-sm font-medium">Nom</span>
            <input type="text" placeholder="Votre nom" className="w-full border rounded px-4 py-2" required />
          </label>
          <label className="block">
            <span className="block text-sm font-medium">Email</span>
            <input type="email" placeholder="vous@exemple.ch" className="w-full border rounded px-4 py-2" required />
          </label>
          <label className="block">
            <span className="block text-sm font-medium">Message</span>
            <textarea placeholder="Votre message" rows={5} className="w-full border rounded px-4 py-2" required />
          </label>
          <button className="btn-primary w-full">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
