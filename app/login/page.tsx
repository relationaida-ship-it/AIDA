export default function LoginPage() {
  return (
    <div style={{
      maxWidth: "420px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
        Connexion
      </h1>

      {/* Email */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Email
        <input
          type="email"
          placeholder="exemple@mail.com"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
      </label>

      {/* Mot de passe */}
      <label style={{ display: "block", marginBottom: "20px" }}>
        Mot de passe
        <input
          type="password"
          placeholder="Votre mot de passe"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
      </label>

      {/* Bouton principal */}
      <button
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Se connecter
      </button>

      {/* Mot de passe oublié */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a href="#" style={{ color: "#0070f3", fontSize: "14px" }}>
          Mot de passe oublié ?
        </a>
      </div>

      {/* Séparateur */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
        <span style={{ margin: "0 10px", color: "#666" }}>ou</span>
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
      </div>

      {/* Connexion Google */}
      <button
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px"
        }}
      >
        Continuer avec Google
      </button>

      {/* Connexion Apple */}
      <button
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Continuer avec Apple
      </button>

      {/* Créer un compte */}
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px" }}>Pas de compte ? </span>
        <a href="/register" style={{ color: "#0070f3", fontSize: "14px" }}>
          Créer un compte
        </a>
      </div>

    </div>
  );
}
