export default function HomePage() {
  const userName = "Utilisateur"; // Plus tard : récupéré depuis la connexion

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "sans-serif",
      lineHeight: 1.5
    }}>
      
      {/* Bienvenue */}
      <h1 style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "20px" }}>
        Bienvenue, {userName}
      </h1>

      {/* Prochains rendez-vous */}
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Mes prochains rendez-vous</h2>

      <div style={{
        background: "#f5f5f5",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "15px"
      }}>
        <strong>Rendez-vous CAF</strong><br />
        12/03/2026 à 14h00<br />
        ⏳ Dans 5 jours
      </div>

      <div style={{
        background: "#f5f5f5",
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "25px"
      }}>
        <strong>Rendez-vous Préfecture</strong><br />
        20/03/2026 à 09h30<br />
        ⏳ Dans 13 jours
      </div>

      {/* À faire */}
      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>À faire</h2>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px" }}>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🟠 Fournir justificatif de domicile</li>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🔴 Scanner pièce d’identité</li>
        <li style={{ fontSize: "18px", marginBottom: "8px" }}>🟢 Déclarer changement d’adresse</li>
      </ul>

      {/* Actions rapides */}
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Actions rapides</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "40px"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>📅</div>
          <div>Calendrier</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>💬</div>
          <div>Échange</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>🤖</div>
          <div>IA</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>☑️</div>
          <div>Checklist</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>👤</div>
          <div>Profil</div>
        </div>
      </div>

      {/* Menu du bas */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop: "1px solid #ccc",
        padding: "10px 0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "28px" }}>📅</div>
        <div style={{ fontSize: "28px" }}>💬</div>

        {/* Bouton + */}
        <div style={{
          fontSize: "40px",
          background: "#0070f3",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
          +
        </div>

        <div style={{ fontSize: "28px" }}>🤖</div>
        <div style={{ fontSize: "28px" }}>👤</div>
      </div>
{/* MENU DU BAS */}
<div
  style={{
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "white",
    borderTop: "1px solid #ccc",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "sans-serif",
    zIndex: 100
  }}
>
  {/* Accueil */}
  <div style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ fontSize: "28px" }}>🏠</div>
    <div>Accueil</div>
  </div>

  {/* Agenda */}
  <div style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ fontSize: "28px" }}>📅</div>
    <div>Agenda</div>
  </div>

  {/* Bouton + */}
  <div
    style={{
      backgroundColor: "#0070f3",
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
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
    }}
  >
    +
  </div>

  {/* Messages */}
  <div style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ fontSize: "28px" }}>💬</div>
    <div>Messages</div>
  </div>

  {/* Démarches */}
  <div style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ fontSize: "28px" }}>🗒️</div>
    <div>Démarches</div>
  </div>

  {/* Profil */}
  <div style={{ textAlign: "center", fontSize: "14px" }}>
    <div style={{ fontSize: "28px" }}>👤</div>
    <div>Mon profil</div>
  </div>
</div>

    </div>
  );
}
