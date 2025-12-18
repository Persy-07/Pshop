function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        background: "#333",
        color: "white",
        textAlign: "center",
        marginTop: "2rem",
      }}>
      <p>&copy; {new Date().getFullYear()} Pshop. Tous droits réservés.</p>
    </footer>
  );
}


export default Footer;
