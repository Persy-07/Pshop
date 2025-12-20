import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Products.css";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  badge?: string;
}

function Products() {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 30;
  
  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterParam]);

  // Mock products data - 63 products for pagination demo
  const products: Product[] = [
    { id: 1, name: "Gracie looks women's stylish top", price: 10.00, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop", rating: 4.5, badge: "NEW" },
    { id: 2, name: "Wide linen-blend trousers", price: 12.00, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop", rating: 5.0, badge: "NEW" },
    { id: 3, name: "Women's oversized cotton crew neck T-Shirt", price: 15.00, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop", rating: 5.0, badge: "NEW" },
    { id: 4, name: "Gracie looks women's stylish top", price: 18.00, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop", rating: 4.0 },
    { id: 5, name: "GracieLooks men's stylish t-shirt", price: 20.00, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 6, name: "Wide Linen-Blend trousers", price: 22.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=400&fit=crop", rating: 5.0 },
    { id: 7, name: "Wide Linen-Blend trousers", price: 25.00, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=300&h=400&fit=crop", rating: 5.0 },
    { id: 8, name: "GracieLooks women's stylish top", price: 28.00, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 9, name: "Women's oversized cotton crew neck T-Shirt", price: 30.00, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 10, name: "Casual summer dress", price: 35.00, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 11, name: "Denim jacket classic", price: 45.00, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop", rating: 4.6, badge: "SALE" },
    { id: 12, name: "Sport running shoes", price: 55.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 13, name: "Leather handbag", price: 85.00, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 14, name: "Striped casual shirt", price: 32.00, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 15, name: "Winter wool scarf", price: 25.00, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 16, name: "Classic white sneakers", price: 48.00, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop", rating: 5.0 },
    { id: 17, name: "Summer floral skirt", price: 28.00, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=400&fit=crop", rating: 4.3 },
    { id: 18, name: "Business blazer", price: 95.00, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 19, name: "Yoga pants premium", price: 42.00, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 20, name: "Graphic tee collection", price: 18.00, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop", rating: 4.2 },
    { id: 21, name: "Slim fit jeans", price: 52.00, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 22, name: "Knit cardigan", price: 38.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 23, name: "Rain jacket waterproof", price: 68.00, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 24, name: "Formal dress pants", price: 58.00, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 25, name: "Cotton polo shirt", price: 28.00, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 26, name: "Ankle boots leather", price: 78.00, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 27, name: "Beach shorts", price: 22.00, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop", rating: 4.3 },
    { id: 28, name: "Hooded sweatshirt", price: 42.00, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 29, name: "Silk blouse elegant", price: 62.00, image: "https://images.unsplash.com/photo-1564257577-04e33234a850?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 30, name: "Track pants athletic", price: 35.00, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 31, name: "Evening gown", price: 125.00, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop", rating: 5.0, badge: "NEW" },
    { id: 32, name: "Casual loafers", price: 55.00, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 33, name: "Winter coat", price: 110.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 34, name: "Baseball cap", price: 18.00, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=400&fit=crop", rating: 4.2 },
    { id: 35, name: "Flannel shirt", price: 38.00, image: "https://images.unsplash.com/photo-1598032895397-b9372e628fcc?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 36, name: "Cocktail dress", price: 88.00, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 37, name: "Running shorts", price: 25.00, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop", rating: 4.3 },
    { id: 38, name: "Leather belt", price: 32.00, image: "https://images.unsplash.com/photo-1624222247344-52604d8b6281?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 39, name: "Turtleneck sweater", price: 48.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 40, name: "Chino pants", price: 45.00, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 41, name: "V-neck t-shirt", price: 15.00, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 42, name: "Puffer vest", price: 58.00, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 43, name: "Crossbody bag", price: 65.00, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 44, name: "Cargo shorts", price: 32.00, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop", rating: 4.3 },
    { id: 45, name: "Bomber jacket", price: 75.00, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 46, name: "Slip-on shoes", price: 42.00, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 47, name: "Maxi dress", price: 68.00, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 48, name: "Denim shorts", price: 28.00, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 49, name: "Zip-up hoodie", price: 45.00, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 50, name: "Office shirt", price: 38.00, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 51, name: "Tennis skirt", price: 32.00, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 52, name: "Parka jacket", price: 95.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=400&fit=crop", rating: 4.9 },
    { id: 53, name: "Crew socks pack", price: 12.00, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=300&h=400&fit=crop", rating: 4.2 },
    { id: 54, name: "Button-down shirt", price: 42.00, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 55, name: "Pencil skirt", price: 38.00, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=400&fit=crop", rating: 4.5 },
    { id: 56, name: "Windbreaker", price: 52.00, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 57, name: "Backpack canvas", price: 48.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop", rating: 4.8 },
    { id: 58, name: "Knit beanie", price: 15.00, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300&h=400&fit=crop", rating: 4.3 },
    { id: 59, name: "Tank top", price: 12.00, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop", rating: 4.4 },
    { id: 60, name: "Pleated trousers", price: 55.00, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop", rating: 4.7 },
    { id: 61, name: "Leather jacket classic", price: 150.00, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop", rating: 5.0, badge: "SALE" },
    { id: 62, name: "Sports bra", price: 28.00, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=400&fit=crop", rating: 4.6 },
    { id: 63, name: "Wrap dress", price: 72.00, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop", rating: 4.8 }
  ];

  const categories = [
    { name: "Femme", count: null, children: [
      { name: "Hauts", count: 40 },
      { name: "Robes", count: 18 },
      { name: "Jeans & Pantalons", count: 34 },
      { name: "Jupes", count: 21 },
      { name: "Vestes & Manteaux", count: 67 },
      { name: "Pulls & Cardigans", count: 5 },
      { name: "Vêtements de sport", count: 64 },
      { name: "Shorts", count: 21 }
    ]},
    { name: "Homme", count: null },
    { name: "Enfants", count: null }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2X", "3X"];

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  // Filter products based on URL parameter and search query
  const filteredProducts = products.filter(product => {
    const matchesFilter = filterParam === 'new' ? product.badge === 'NEW' : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Sidebar Filters */}
      <aside className="products-sidebar">
        <div className="filter-header">
          <h3>Filtres</h3>
          <button className="clear-filters">✕</button>
        </div>

        {/* Collections */}
        <div className="filter-section">
          <h4>Collections</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input type="radio" name="collection" defaultChecked />
              <span className="collection-badge all">Tout</span>
              <span className="filter-label">Meilleures ventes</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="collection" />
              <span className="filter-label">Nouveautés</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="collection" />
              <span className="filter-label">Accessoires</span>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div className="filter-section">
          <h4>Catégories</h4>
          <div className="categories-list">
            {categories.map((category) => (
              <div key={category.name} className="category-group">
                <div className="category-item">
                  <span className="category-name">{category.name}</span>
                </div>
                {category.children && (
                  <div className="subcategories">
                    {category.children.map((sub) => (
                      <div key={sub.name} className="subcategory-item">
                        <span>{sub.name}</span>
                        <span className="count">{sub.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="filter-section">
          <h4>Prix</h4>
          <div className="price-inputs">
            <div className="price-input-group">
              <span className="currency">$</span>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                placeholder="0.00"
              />
            </div>
            <span className="price-separator">À</span>
            <div className="price-input-group">
              <span className="currency">$</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                placeholder="100.00"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className="price-slider"
          />
        </div>

        {/* Size */}
        <div className="filter-section">
          <h4>Taille</h4>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="filter-section collapsed">
          <h4>
            Couleurs
            <button className="expand-btn">+</button>
          </h4>
        </div>

        {/* Availability */}
        <div className="filter-section collapsed">
          <h4>
            Disponibilité
            <button className="expand-btn">+</button>
          </h4>
        </div>

        {/* Shipping & Delivery */}
        <div className="filter-section">
          <h4>Livraison & Retour</h4>
          <div className="shipping-options">
            <div className="shipping-item">
              <span className="icon">🚚</span>
              <div>
                <div className="shipping-title">Livraison gratuite</div>
                <div className="shipping-desc">Livraison gratuite sur toutes les commandes</div>
              </div>
            </div>
            <div className="shipping-item">
              <span className="icon">🎧</span>
              <div>
                <div className="shipping-title">Support 24/7</div>
                <div className="shipping-desc">Assistance disponible 24h/24</div>
              </div>
            </div>
            <div className="shipping-item">
              <span className="icon">↩️</span>
              <div>
                <div className="shipping-title">Retour 30 jours</div>
                <div className="shipping-desc">Retour facile sous 30 jours</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="products-main">
        {/* Search Bar */}
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Effacer la recherche"
            >
              ✕
            </button>
          )}
        </div>

        <div className="products-header">
          <div className="results-info">
            Affichage de <span className="highlight">"{filteredProducts.length} résultats"</span> {filterParam === 'new' && '(Nouveautés)'}
          </div>
          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="4" width="18" height="3" rx="1"/>
                <rect x="3" y="10" width="18" height="3" rx="1"/>
                <rect x="3" y="16" width="18" height="3" rx="1"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`products-grid ${viewMode}`}>
          {filteredProducts
            .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
            .map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="product-card-link">
              <div className="product-card-products">
                <div className="product-image-wrapper">
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info-products">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button className="buy-now-btn-products">Acheter →</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>
          
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
            disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
          >
            →
          </button>
        </div>
      </main>
    </div>
  );
}

export default Products;
