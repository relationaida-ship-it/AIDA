"use client";
import { useState } from "react";

export default function ScannerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFile = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/scan", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "sans-serif",
      backgroundColor: "white",
      minHeight: "100vh",
      color: "black"
    }}>
      <h1 style={{
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "25px",
        color: "#0070f3",
        textAlign: "center"
      }}>
        📷 Scanner un document
      </h1>

      {/* Prendre une photo */}
      <label style={{
        display: "block",
        backgroundColor: "#0070f3",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        fontSize: "22px",
        textAlign: "center",
        marginBottom: "20px",
        cursor: "pointer"
      }}>
        Prendre une photo
        <input
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: "none" }}
          onChange={handleFile}
        />
      </label>

      {/* Importer un fichier */}
      <label style={{
        display: "block",
        backgroundColor: "#e0e0e0",
        color: "black",
        padding: "20px",
        borderRadius: "12px",
        fontSize: "22px",
        textAlign: "center",
        marginBottom: "20px",
        cursor: "pointer"
      }}>
        Importer un fichier
        <input
          type="file"
          accept="image/*,application/pdf"
          style={{ display: "none" }}
          onChange={handleFile}
        />
      </label>

      {loading && (
        <p style={{ fontSize: "20px", color: "#0070f3", textAlign: "center" }}>
          ⏳ Analyse en cours...
        </p>
      )}

      {result && (
        <div style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px"
        }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "#0070f3" }}>
            Résultat du scan
          </h2>

          <p><strong>Texte détecté :</strong><br />{result.text}</p>
          <p><strong>Résumé :</strong><br />{result.resume}</p>
          <p><strong>Traduction :</strong><br />{result.translation}</p>
          <p><strong>Rendez-vous détectés :</strong><br />{result.rdv}</p>

          <p><strong>Checklist :</strong></p>
          <ul>
            {result.checklist.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
