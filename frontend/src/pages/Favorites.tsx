import { Link } from 'react-router-dom';
import './Favorites.css';

function Favorites() {
  // Mock favorites data
  const favorites = [
    {
      id: 1,
      name: "Gracie looks women's stylish top",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      rating: 4.5,
      badge: "NEW"
    },
    {
      id: 2,
      name: "Wide linen-blend trousers",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop",
      rating: 5.0
    },
    {
      id: 3,
      name: "Women's oversized cotton crew neck T-Shirt",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop",
      rating: 5.0
    }
  ];

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>Mes Favoris</h1>
        <p className="favorites-count">{favorites.length} produits</p>
      </div>

      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="favorite-card-link">
              <div className="favorite-card">
                <button className="remove-favorite" aria-label="Retirer des favoris">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <div className="favorite-image-wrapper">
                  {product.badge && (
                    <span className="favorite-badge">{product.badge}</span>
                  )}
                  <img src={product.image} alt={product.name} className="favorite-image" />
                </div>
                <div className="favorite-info">
                  <h3 className="favorite-name">{product.name}</h3>
                  <div className="favorite-rating">
                    <span className="stars">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="favorite-footer">
                    <span className="favorite-price">${product.price.toFixed(2)}</span>
                    <button className="add-to-cart-favorite">Ajouter au panier</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <h2>Aucun favori</h2>
          <p>Vous n'avez pas encore ajouté de produits à vos favoris</p>
          <Link to="/products" className="browse-products-btn">Découvrir les produits</Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
