export default function LoginPage() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
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
        Connexion
      </h1>

      {/* Email */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Email</label>
      <input
        type="email"
        placeholder="Votre email"
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "5px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "18px"
        }}
      />

      {/* Mot de passe */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Mot de passe</label>
      <input
        type="password"
        placeholder="Votre mot de passe"
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "5px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "18px"
        }}
      />

      {/* Bouton Connexion */}
      <button
        style={{
          width: "100%",
          padding: "18px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Se connecter
      </button>

      {/* Lien vers Register */}
      <div style={{ textAlign: "center", fontSize: "16px" }}>
        Pas encore de compte ?{" "}
        <a href="/register" style={{ color: "#0070f3", fontWeight: "bold" }}>
          Créer un compte
        </a>
      </div>
    </div>
  );
}
