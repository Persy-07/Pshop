import { Link } from 'react-router-dom';
import './Showcase.css';

function Showcase() {
  const showcaseProducts = [
    {
      id: 1,
      name: "Collection Été 2024",
      description: "Découvrez notre nouvelle collection d'été avec des designs frais et modernes",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
      category: "Nouveauté",
      link: "/products?filter=new"
    },
    {
      id: 2,
      name: "Essentiels du Quotidien",
      description: "Les indispensables pour votre garde-robe de tous les jours",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      category: "Tendance",
      link: "/products"
    },
    {
      id: 3,
      name: "Style Élégant",
      description: "Des pièces sophistiquées pour toutes les occasions spéciales",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      category: "Premium",
      link: "/products"
    },
    {
      id: 4,
      name: "Confort & Style",
      description: "Alliez confort et style avec notre collection décontractée",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
      category: "Casual",
      link: "/products"
    },
    {
      id: 5,
      name: "Accessoires Tendance",
      description: "Complétez votre look avec nos accessoires sélectionnés",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop",
      category: "Accessoires",
      link: "/products"
    },
    {
      id: 6,
      name: "Sport & Lifestyle",
      description: "Performance et style pour votre vie active",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop",
      category: "Sport",
      link: "/products"
    }
  ];

  return (
    <div className="showcase-page">
      <div className="showcase-hero">
        <h1 className="showcase-title">Notre Vitrine</h1>
        <p className="showcase-subtitle">
          Explorez nos collections soigneusement sélectionnées pour vous
        </p>
      </div>

      <div className="showcase-grid">
        {showcaseProducts.map((item) => (
          <Link key={item.id} to={item.link} className="showcase-card">
            <div className="showcase-image-wrapper">
              <img src={item.image} alt={item.name} className="showcase-image" />
              <div className="showcase-overlay">
                <span className="showcase-category">{item.category}</span>
              </div>
            </div>
            <div className="showcase-content">
              <h3 className="showcase-name">{item.name}</h3>
              <p className="showcase-description">{item.description}</p>
              <button className="showcase-btn">
                Découvrir →
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="showcase-cta">
        <h2>Besoin d'aide pour choisir ?</h2>
        <p>Notre équipe est là pour vous conseiller</p>
        <Link to="/products" className="cta-btn">
          Voir tous les produits
        </Link>
      </div>
    </div>
  );
}

export default Showcase;
