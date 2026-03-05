export default function RegisterPage() {
  return (
    <div
      style={{
        maxWidth: "500px",
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
        Créer un compte
      </h1>

      {/* Prénom */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Prénom
        <input
          type="text"
          placeholder="Votre prénom"
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

      {/* Nom */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Nom
        <input
          type="text"
          placeholder="Votre nom"
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

      {/* Téléphone */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Téléphone (optionnel)
        <input
          type="tel"
          placeholder="06 12 34 56 78"
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

      {/* Langue */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Langue préférée
        <select
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            fontSize: "18px"
          }}
        >
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="ar">Arabe</option>
          <option value="es">Espagnol</option>
        </select>
      </label>

      {/* Type de profil */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Type de profil
        <select
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            fontSize: "18px"
          }}
        >
          <option value="user">Utilisateur</option>
          <option value="helper">Accompagnant</option>
        </select>
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

      {/* Confirmation */}
      <label style={{ display: "block", marginBottom: "18px", fontSize: "18px" }}>
        Confirmation du mot de passe
        <input
          type="password"
          placeholder="Confirmez votre mot de passe"
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

      {/* CGU */}
      <label
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
          fontSize: "16px"
        }}
      >
        <input type="checkbox" style={{ width: "22px", height: "22px", marginRight: "12px" }} />
        J’accepte les Conditions Générales d’Utilisation
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
          marginBottom: "25px",
          fontWeight: "bold"
        }}
      >
        Créer mon compte
      </button>

      {/* Déjà un compte */}
      <div style={{ textAlign: "center", fontSize: "16px" }}>
        Déjà un compte ?{" "}
        <a href="/login" style={{ color: "#0070f3", fontWeight: "bold" }}>
          Se connecter
        </a>
      </div>
    </div>
  );
}
