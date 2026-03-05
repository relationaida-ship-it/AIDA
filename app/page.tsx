"use client";
import { useState } from "react";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false);

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
        color: "black",
        paddingBottom: "120px"
      }}
    >
      {/* Bienvenue */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#0070f3"
        }}
      >
        Bienvenue, Utilisateur
      </h1>

      {/* Prochains rendez-vous */}
      <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "#0070f3" }}>
        Mes prochains rendez-vous
      </h2>

      <div
        style={{
          background: "white",
          color: "black",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <strong>Rendez-vous CAF</strong><br />
        12/03/2026 à 14h00<br />
        ⏳ Dans 5 jours
      </div>

      <div
        style={{
          background: "white",
          color: "black",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "25px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <strong>Rendez-vous Préfecture</strong><br />
        20/03/2026 à 09h30<br />
        ⏳ Dans 13 jours
      </div>

      {/* À faire */}
      <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "#0070f3" }}>
        À faire
      </h2>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px" }}>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🟠 Fournir justificatif de domicile</li>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🔴 Scanner pièce d’identité</li>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🟢 Déclarer changement d’adresse</li>
      </ul>

      {/* Actions rapides */}
      <h2 style={{ fontSize: "22px", marginBottom: "15px", color: "#0070f3" }}>
        Actions rapides
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>📅</div>
          <div>Agenda</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>💬</div>
          <div>Messages</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>🤖</div>
          <div>Assistant</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>📝</div>
          <div>Démarches</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>👤</div>
          <div>Profil</div>
        </div>
      </div>

      {/* MENU FLOTTANT DU BOUTON + */}
      {openMenu && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            zIndex: 200
          }}
        >
          <div
            style={{
              background: "white",
              padding: "15px 20px",
              borderRadius: "12px",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              width: "80%",
              textAlign: "center"
            }}
          >
            📷 Scanner un document
          </div>

          <div
            style={{
              background: "white",
              padding: "15px 20px",
              borderRadius: "12px",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              width: "80%",
              textAlign: "center"
            }}
          >
            📄 Ajouter un fichier
          </div>

          <div
            style={{
              background: "white",
              padding: "15px 20px",
              borderRadius: "12px",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              width: "80%",
              textAlign: "center"
            }}
          >
            🎤 Dicter un document
          </div>
        </div>
      )}

      {/* MENU DU BAS FINAL */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#003d99",
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          zIndex: 100
        }}
      >
        <a href="/" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>🏠</div>
          <div>Accueil</div>
        </a>

        <a href="/agenda" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>📅</div>
          <div>Agenda</div>
        </a>

        <a href="/ia" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>🤖</div>
          <div>Assistant</div>
        </a>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          style={{
            backgroundColor: "#00aaff",
            color: "white",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            marginTop: "-40px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            cursor: "pointer"
          }}
        >
          +
        </div>

        <a href="/messages" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>💬</div>
          <div>Messages</div>
        </a>

        <a href="/demarches" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>📝</div>
          <div>Démarches</div>
        </a>

        <a href="/profil" style={{ textAlign: "center", fontSize: "14px", color: "white", textDecoration: "none" }}>
          <div style={{ fontSize: "28px" }}>👤</div>
          <div>Profil</div>
        </a>
      </div>
    </div>
  );
}
