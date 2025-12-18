import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Nos Produits</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.price}€</p>
            <Link to={`/products/${product.id}`}>Voir détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
