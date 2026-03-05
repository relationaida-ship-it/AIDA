export default function RegisterPage() {
  return (
    <div style={{
      maxWidth: "450px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
        Créer un compte
      </h1>

      {/* Prénom */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Prénom
        <input
          type="text"
          placeholder="Votre prénom"
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

      {/* Nom */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Nom
        <input
          type="text"
          placeholder="Votre nom"
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

      {/* Téléphone */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Téléphone (optionnel)
        <input
          type="tel"
          placeholder="06 12 34 56 78"
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

      {/* Langue */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Langue préférée
        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        >
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="ar">Arabe</option>
          <option value="es">Espagnol</option>
        </select>
      </label>

      {/* Type de profil */}
      <label style={{ display: "block", marginBottom: "15px" }}>
        Type de profil
        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        >
          <option value="user">Utilisateur</option>
          <option value="helper">Accompagnant</option>
        </select>
      </label>

      {/* Mot de passe */}
      <label style={{ display: "block", marginBottom: "15px" }}>
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

      {/* Confirmation */}
      <label style={{ display: "block", marginBottom: "20px" }}>
        Confirmation du mot de passe
        <input
          type="password"
          placeholder="Confirmez votre mot de passe"
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

      {/* CGU */}
      <label style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <input type="checkbox" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "14px" }}>
          J’accepte les Conditions Générales d’Utilisation
        </span>
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
        Créer mon compte
      </button>

      {/* Déjà un compte */}
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px" }}>Déjà un compte ? </span>
        <a href="/login" style={{ color: "#0070f3", fontSize: "14px" }}>
          Se connecter
        </a>
      </div>

    </div>
  );
}
<div style={{ textAlign: "center", marginTop: "20px" }}>
  <a
    href="/"
    style={{
      display: "inline-block",
      padding: "14px 20px",
      backgroundColor: "#e0e0e0",
      borderRadius: "12px",
      fontSize: "18px",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold"
    }}
  >
    Retour à l’accueil
  </a>
</div>
