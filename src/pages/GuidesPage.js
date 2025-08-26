import React from "react";

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos Guides</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Comment choisir sa batterie ?",
          "5 astuces pour prolonger la vie de votre batterie",
          "Sécurité : les bons réflexes en trottinette",
        ].map((title) => (
          <div key={title} className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <button className="btn-primary">Lire le guide</button>
          </div>
        ))}
      </div>
    </div>
  );
}