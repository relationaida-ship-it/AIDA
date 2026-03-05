export default function IApage() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
        lineHeight: 1.5
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "25px",
          textAlign: "center"
        }}
      >
        Assistant IA
      </h1>

      {/* Scanner un document */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#0070f3",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "none"
        }}
      >
        📷 Scanner un document
      </a>

      {/* Résumer un document */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#e0e0e0",
          color: "black",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "none"
        }}
      >
        📝 Résumer un document
      </a>

      {/* Poser une question */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#f5f5f5",
          color: "black",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "none"
        }}
      >
        ❓ Poser une question (oral / écrit)
      </a>

      {/* Traduire un texte */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#f5f5f5",
          color: "black",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "none"
        }}
      >
        🌍 Traduire un texte
      </a>

      {/* Générer un document */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#f5f5f5",
          color: "black",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "22px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "none"
        }}
      >
        📄 Générer un document
      </a>

      {/* Supprimer historique */}
      <a
        href="#"
        style={{
          display: "block",
          backgroundColor: "#ffdddd",
          color: "red",
          padding: "15px",
          borderRadius: "12px",
          fontSize: "18px",
          textAlign: "center",
          marginTop: "40px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        🗑️ Supprimer l’historique IA
      </a>
    </div>
  );
}
