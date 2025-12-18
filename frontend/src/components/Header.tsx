import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#333", color: "white" }}>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>
          Pshop
        </Link>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Accueil
          </Link>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}>
            Produits
          </Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            Panier
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Connexion
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
