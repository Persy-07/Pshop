import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Détail du produit {id}</h1>
      <p>Contenu à implémenter</p>
    </div>
  );
}

export default ProductDetail;
