"use client";
import { useState } from "react";

type ScanResult = {
  text: string;
  rdv: string;
  resume: string;
  traduction: string;
};

export default function ScannerPage() {
  const [result, setResult] = useState<ScanResult | null>(null);

  const simulateScan = () => {
    setResult({
      text: "Texte détecté dans le document",
      rdv: "Rendez-vous le 12/03/2026 à 14h00",
      resume: "Résumé automatique du document",
      traduction: "Traduction dans la langue choisie"
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
        lineHeight: 1.5,
        backgroundColor: "white",
        minHeight: "100vh",
        color: "black"
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#0070f3",
          textAlign: "center"
        }}
      >
        📷 Scanner un document
      </h1>

      {/* Prendre une photo */}
      <label
        style={{
          display: "block",
          backgroundColor: "#0070f3",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        Prendre une photo
        <input
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: "none" }}
          onChange={simulateScan}
        />
      </label>

      {/* Importer un fichier */}
      <label
        style={{
          display: "block",
          backgroundColor: "#e0e0e0",
          color: "black",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        Importer un fichier
        <input
          type="file"
          accept="image/*,application/pdf"
          style={{ display: "none" }}
          onChange={simulateScan}
        />
      </label>

      {/* Résultat */}
      {result && (
        <div
          style={{
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "30px"
          }}
        >
          <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "#0070f3" }}>
            Résultat du scan
          </h2>

          <p><strong>Texte détecté :</strong><br />{result.text}</p>
          <p><strong>Rendez-vous détecté :</strong><br />{result.rdv}</p>
          <p><strong>Résumé :</strong><br />{result.resume}</p>
          <p><strong>Traduction :</strong><br />{result.traduction}</p>

          <button
            style={{
              marginTop: "10px",
              padding: "12px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            🔊 Lire à l’oral
          </button>
        </div>
      )}
    </div>
  );
}
