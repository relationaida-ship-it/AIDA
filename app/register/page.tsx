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

      {/* Nom */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Nom</label>
      <input
        type="text"
        placeholder="Votre nom"
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

      {/* Téléphone */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Téléphone</label>
      <input
        type="tel"
        placeholder="Votre numéro"
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

      {/* Langue */}
      <label style={{ fontSize: "18px", fontWeight: "bold" }}>Langue</label>
      <select
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "5px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "18px"
        }}
      >
        <option>Français</option>
        <option>Anglais</option>
        <option>Arabe</option>
        <option>Turc</option>
        <option>Espagnol</option>
      </select>

      {/* Bouton Créer un compte */}
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
        Créer un compte
      </button>

      {/* Lien vers Login */}
      <div style={{ textAlign: "center", fontSize: "16px" }}>
        Déjà un compte ?{" "}
        <a href="/login" style={{ color: "#0070f3", fontWeight: "bold" }}>
          Se connecter
        </a>
      </div>
    </div>
  );
}
