export default function LoginPage() {
  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif",
        lineHeight: 1.5
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Connexion
      </h1>

      {/* Email */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Email
        <input
          type="email"
          placeholder="exemple@mail.com"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            fontSize: "18px"
          }}
        />
      </label>

      {/* Mot de passe */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Mot de passe
        <input
          type="password"
          placeholder="Votre mot de passe"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            fontSize: "18px"
          }}
        />
      </label>

      {/* Bouton principal */}
      <button
        style={{
          width: "100%",
          padding: "18px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        Se connecter
      </button>

      {/* Mot de passe oublié */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <a href="#" style={{ color: "#0070f3", fontSize: "16px" }}>
          Mot de passe oublié ?
        </a>
      </div>

      {/* Séparateur */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
        <span style={{ margin: "0 10px", color: "#666" }}>ou</span>
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
      </div>

      {/* Google */}
      <button
        style={{
          width: "100%",
          padding: "16px",
          backgroundColor: "blue",
          border: "2px solid #ccc",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "10px"
        }}
      >
        Continuer avec Google
      </button>

      {/* Apple */}
      <button
        style={{
          width: "100%",
          padding: "16px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "25px"
        }}
      >
        Continuer avec Apple
      </button>

      {/* Créer un compte */}
      <div style={{ textAlign: "center", fontSize: "16px" }}>
        Pas de compte ?{" "}
        <a href="/register" style={{ color: "#0070f3", fontWeight: "bold" }}>
          Créer un compte
        </a>
      </div>
    </div>
  );
}
