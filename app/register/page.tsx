"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    confirm: "",
    cgu: false,
    autoDocs: false,
    analytics: false,
  });

  function updateField(field: string, value: any) {
    setForm({ ...form, [field]: value });
  }

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
        {/* Logo + titre */}
        <div className="text-center">
          <div className="text-3xl font-bold text-sky-700 mb-1">AIDA</div>
          <h1 className="text-lg font-semibold text-sky-900">
            Créer un compte
          </h1>
        </div>

        {/* Formulaire */}
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Prénom"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
            onChange={(e) => updateField("prenom", e.target.value)}
          />

          <input
            type="text"
            placeholder="Nom"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
            onChange={(e) => updateField("nom", e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
            onChange={(e) => updateField("email", e.target.value)}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
            onChange={(e) => updateField("password", e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirmation du mot de passe"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm"
            onChange={(e) => updateField("confirm", e.target.value)}
          />

          {/* Cases à cocher */}
          <label className="flex items-center gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              onChange={(e) => updateField("cgu", e.target.checked)}
            />
            J'accepte les Conditions Générales d’Utilisation.
          </label>

          <label className="flex items-center gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              onChange={(e) => updateField("autoDocs", e.target.checked)}
            />
            J’autorise l’application à générer automatiquement des documents.
          </label>

          <label className="flex items-center gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              onChange={(e) => updateField("analytics", e.target.checked)}
            />
            J’accepte l’analyse anonyme de mes données d’usage.
          </label>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full rounded-full bg-sky-600 text-white py-2 text-sm font-semibold mt-2"
          >
            Créer mon compte
          </button>
        </form>

        {/* Lien bas */}
        <p className="text-center text-xs text-gray-500 mt-2">
          Déjà un compte ?{" "}
          <a href="/login" className="text-sky-700 font-semibold">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
