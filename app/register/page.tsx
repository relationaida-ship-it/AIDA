export default function RegisterPage() {
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
        Créer un compte
      </h1>

      {/* Prénom */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Prénom</label>
      <input
        type="text"
        placeholder="Votre prénom"
        style={inputStyle}
      />

      {/* Nom */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Nom</label>
      <input
        type="text"
        placeholder="Votre nom"
        style={inputStyle}
      />

      {/* Email */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Email</label>
      <input
        type="email"
        placeholder="Votre email"
        style={inputStyle}
      />

      {/* Téléphone */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
        Téléphone (optionnel)
      </label>
      <input
        type="tel"
        placeholder="Votre numéro"
        style={inputStyle}
      />

      {/* Langue */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
        Langue préférée
      </label>
      <select style={inputStyle}>
        <option>Français</option>
        <option>Anglais</option>
        <option>Arabe</option>
        <option>Turc</option>
        <option>Espagnol</option>
      </select>

      {/* Type de profil */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
        Type de profil
      </label>
      <select style={inputStyle}>
        <option>Utilisateur</option>
        <option>Accompagnant</option>
        <option>Travailleur social</option>
      </select>

      {/* Mot de passe */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
        Mot de passe
      </label>
      <input
        type="password"
        placeholder="Votre mot de passe"
        style={inputStyle}
      />

      {/* Confirmation */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>
        Confirmation du mot de passe
      </label>
      <input
        type="password"
        placeholder="Confirmez votre mot de passe"
        style={inputStyle}
      />

      {/* CGU */}
      <div style={{ margin: "20px 0", fontSize: "16px" }}>
        <input type="checkbox" id="cgu" />
        <label htmlFor="cgu" style={{ marginLeft: "10px" }}>
          J’accepte les Conditions Générales d’Utilisation
        </label>
      </div>

      {/* Bouton */}
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
        Créer mon compte
      </button>

      {/* Lien */}
      <div style={{ textAlign: "center", fontSize: "16px" }}>
        Déjà un compte ?{" "}
        <a href="/login" style={{ color: "#0070f3", fontWeight: "bold" }}>
          Se connecter
        </a>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "5px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "18px"
};
