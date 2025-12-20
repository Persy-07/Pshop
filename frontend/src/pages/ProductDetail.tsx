import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductDetail.css'

interface ProductData {
  id: number
  name: string
  brand: string
  rating: number
  reviews: number
  oldPrice: number
  currentPrice: number
  images: string[]
  storage: string[]
  sizes: string[]
  colors: { name: string; code: string }[]
  description: string
  features: string[]
  specifications: { label: string; value: string }[]
  customerReviews: {
    name: string
    rating: number
    date: string
    comment: string
    verified: boolean
  }[]
  flashSale: {
    active: boolean
    endTime: Date
    soldCount: number
    totalCount: number
  }
}

interface RecommendedProduct {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: number
  badge?: string
}

function ProductDetail() {
  const { id } = useParams()

  // Product Data (in a real app, this would come from an API)
  const [product] = useState<ProductData>({
    id: Number(id),
    name: 'Amazfit Pop 3s Smart Watch',
    brand: 'Amazfit',
    rating: 4,
    reviews: 1400,
    oldPrice: 150.0,
    currentPrice: 130.0,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500',
    ],
    storage: ['256 GB', '128 GB', '64 GB'],
    sizes: ['6.5"', '24.15"', '11.5"'],
    colors: [
      { name: 'Blue', code: '#4a90e2' },
      { name: 'Black', code: '#1a1a1a' },
      { name: 'Pink', code: '#ff6b9d' },
      { name: 'Orange', code: '#ff9500' },
    ],
    description:
      "La montre connectée Amazfit Pop 3s allie style et technologie. Dotée d'un écran AMOLED éclatant et d'un suivi de santé complet, elle vous accompagne au quotidien. Avec plus de 100 modes sportifs, un GPS intégré et une autonomie exceptionnelle de 12 jours, elle est parfaite pour les sportifs et les amateurs de technologie.",
    features: [
      'Écran AMOLED 1.43 pouces avec résolution HD',
      'Suivi de la fréquence cardiaque 24/7',
      'Surveillance du sommeil et du stress',
      'Plus de 100 modes sportifs intégrés',
      'GPS intégré pour un suivi précis',
      "Autonomie jusqu'à 12 jours",
      "Étanche jusqu'à 50 mètres (5 ATM)",
      'Notifications intelligentes depuis votre smartphone',
    ],
    specifications: [
      { label: "Taille de l'écran", value: '1.43 pouces' },
      { label: 'Résolution', value: '466 x 466 pixels' },
      { label: 'Batterie', value: '300 mAh' },
      { label: 'Autonomie', value: '12 jours' },
      { label: 'Connectivité', value: 'Bluetooth 5.2' },
      { label: 'Poids', value: '36 grammes' },
      { label: 'Matériaux', value: 'Aluminium et silicone' },
      { label: 'Compatibilité', value: 'iOS 10+ / Android 5+' },
    ],
    customerReviews: [
      {
        name: 'Marie Dubois',
        rating: 5,
        date: '15 Décembre 2025',
        comment:
          "Excellente montre connectée ! L'écran est magnifique et l'autonomie tient vraiment 12 jours. Le suivi du sport est très précis. Je recommande vivement !",
        verified: true,
      },
      {
        name: 'Jean Martin',
        rating: 4,
        date: '10 Décembre 2025',
        comment:
          "Très bon rapport qualité-prix. La montre est légère et confortable. Seul bémol : la synchronisation avec l'application pourrait être plus rapide.",
        verified: true,
      },
      {
        name: 'Sophie Laurent',
        rating: 5,
        date: '5 Décembre 2025',
        comment:
          "Je l'utilise depuis 2 semaines et je suis très satisfaite. Le design est élégant, parfait pour le sport et le quotidien. Les notifications fonctionnent parfaitement.",
        verified: true,
      },
      {
        name: 'Pierre Dupont',
        rating: 4,
        date: '1 Décembre 2025',
        comment:
          "Bon produit dans l'ensemble. Le GPS est précis et les modes sportifs sont variés. Dommage qu'il n'y ait pas plus de cadrans personnalisables.",
        verified: false,
      },
      {
        name: 'Claire Rousseau',
        rating: 5,
        date: '28 Novembre 2025',
        comment:
          "Meilleur achat de l'année ! La qualité de fabrication est au top, l'interface est intuitive. Le suivi du sommeil m'aide beaucoup. Bravo !",
        verified: true,
      },
    ],
    flashSale: {
      active: true,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000 + 24 * 60 * 1000),
      soldCount: 40,
      totalCount: 100,
    },
  })

  // Recommended Products
  const recommendedProducts: RecommendedProduct[] = [
    {
      id: 5,
      name: 'Casque Bluetooth Premium',
      price: 89.99,
      oldPrice: 129.99,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 5,
      badge: '-30%',
    },
    {
      id: 6,
      name: 'Écouteurs Sans Fil Pro',
      price: 149.99,
      image:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
      rating: 4,
      badge: 'Nouveau',
    },
    {
      id: 7,
      name: 'Montre Fitness Tracker',
      price: 79.99,
      oldPrice: 99.99,
      image:
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
      rating: 4,
    },
    {
      id: 8,
      name: 'Lunettes de Soleil Sport',
      price: 59.99,
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      rating: 5,
      badge: 'Bestseller',
    },
  ]

  // State
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedStorage, setSelectedStorage] = useState(1)
  const [selectedSize, setSelectedSize] = useState(2)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<
    'description' | 'specifications' | 'reviews'
  >('description')
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Flash Sale Timer
  useEffect(() => {
    if (!product.flashSale.active) return

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = product.flashSale.endTime.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      const hours = Math.floor(distance / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [product.flashSale])

  // Handlers
  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    console.log('Add to cart:', {
      product: product.name,
      storage: product.storage[selectedStorage],
      size: product.sizes[selectedSize],
      color: product.colors[selectedColor].name,
      quantity,
    })
    alert('Produit ajouté au panier!')
  }

  const handleBuyNow = () => {
    console.log('Buy now:', {
      product: product.name,
      storage: product.storage[selectedStorage],
      size: product.sizes[selectedSize],
      color: product.colors[selectedColor].name,
      quantity,
    })
    alert('Redirection vers la page de paiement...')
  }

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <div className="product-detail">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Accueil</Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/products">Produits</Link>
        <span className="breadcrumb-separator">›</span>
        <span>{product.name}</span>
      </div>

      {/* Flash Sale Banner */}
      {product.flashSale.active && (
        <div className="flash-sale-banner">
          <div className="flash-sale-left">
            <span className="flash-icon">⚡</span>
            <span className="flash-text">Flash Sale</span>
            <div className="flash-timer">
              <span className="timer-text">Se termine dans -</span>
              <span className="timer-value">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          <div className="flash-progress">
            <span className="progress-text">
              Vendu : {product.flashSale.soldCount}/
              {product.flashSale.totalCount}
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${
                    (product.flashSale.soldCount /
                      product.flashSale.totalCount) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Product Container */}
      <div className="product-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="main-image-wrapper">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="main-image"
            />
          </div>
          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-brand">
            <span className="brand-label">Marque :</span>
            <a href="#" className="brand-link">
              {product.brand}
            </a>
          </div>

          <div className="product-rating">
            <span className="stars">{renderStars(product.rating)}</span>
            <span className="review-count">
              ({product.reviews.toLocaleString()} Avis)
            </span>
          </div>

          <div className="price-section">
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            <span className="current-price">
              ${product.currentPrice.toFixed(2)}
            </span>
          </div>

          {/* Storage Options */}
          <div className="option-section">
            <div className="option-header">
              <span className="option-label">Stockage</span>
              <button
                className="clear-btn"
                onClick={() => setSelectedStorage(0)}
              >
                ✕ Effacer
              </button>
            </div>
            <div className="option-buttons">
              {product.storage.map((storage, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedStorage === index ? 'active' : ''}`}
                  onClick={() => setSelectedStorage(index)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="option-section">
            <div className="option-header">
              <span className="option-label">Taille</span>
              <button className="clear-btn" onClick={() => setSelectedSize(0)}>
                ✕ Effacer
              </button>
            </div>
            <div className="option-buttons">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedSize === index ? 'active' : ''}`}
                  onClick={() => setSelectedSize(index)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="option-section">
            <div className="option-header">
              <span className="option-label">Couleur</span>
            </div>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-option ${selectedColor === index ? 'active' : ''}`}
                  style={{ background: color.code }}
                  onClick={() => setSelectedColor(index)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity-section">
            <span className="quantity-label">Quantité :</span>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(-1)}
              >
                −
              </button>
              <input
                type="text"
                className="quantity-value"
                value={quantity}
                readOnly
              />
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              🛒 Ajouter au Panier
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Acheter
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="secondary-actions">
            <a href="#" className="secondary-action">
              <span className="action-icon">⚖️</span>
              <span>Comparer</span>
            </a>
            <a href="#" className="secondary-action">
              <span className="action-icon">❤️</span>
              <span>Ajouter aux Favoris</span>
            </a>
            <a href="#" className="secondary-action">
              <span className="action-icon">↗️</span>
              <span>Partager</span>
            </a>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="product-details-section">
        <div className="details-tabs">
          <button
            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Spécifications
          </button>
          <button
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Avis ({product.reviews})
          </button>
        </div>

        <div className="tab-content">
          {/* Description Tab */}
          {activeTab === 'description' && (
            <div className="description-content">
              <h3 className="content-title">À propos de ce produit</h3>
              <p className="description-text">{product.description}</p>

              <h3 className="content-title">Caractéristiques principales</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="specifications-content">
              <h3 className="content-title">
                Spécifications techniques complètes
              </h3>
              <div className="spec-table">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="spec-row">
                    <div className="spec-label">{spec.label}</div>
                    <div className="spec-value">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <div className="reviews-header">
                <div className="rating-summary">
                  <div className="rating-score">
                    <span className="score-number">{product.rating}.0</span>
                    <div className="score-stars">
                      {'★'.repeat(product.rating)}
                      {'☆'.repeat(5 - product.rating)}
                    </div>
                    <span className="score-text">
                      Basé sur {product.reviews} avis
                    </span>
                  </div>
                  <div className="rating-bars">
                    <div className="rating-bar-item">
                      <span className="bar-label">5★</span>
                      <div className="bar-container">
                        <div
                          className="bar-fill"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                      <span className="bar-percent">70%</span>
                    </div>
                    <div className="rating-bar-item">
                      <span className="bar-label">4★</span>
                      <div className="bar-container">
                        <div
                          className="bar-fill"
                          style={{ width: '20%' }}
                        ></div>
                      </div>
                      <span className="bar-percent">20%</span>
                    </div>
                    <div className="rating-bar-item">
                      <span className="bar-label">3★</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{ width: '5%' }}></div>
                      </div>
                      <span className="bar-percent">5%</span>
                    </div>
                    <div className="rating-bar-item">
                      <span className="bar-label">2★</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{ width: '3%' }}></div>
                      </div>
                      <span className="bar-percent">3%</span>
                    </div>
                    <div className="rating-bar-item">
                      <span className="bar-label">1★</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{ width: '2%' }}></div>
                      </div>
                      <span className="bar-percent">2%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviews-list">
                {product.customerReviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">
                          {review.name.charAt(0)}
                        </div>
                        <div className="reviewer-details">
                          <div className="reviewer-name">
                            {review.name}
                            {review.verified && (
                              <span className="verified-badge">
                                ✓ Achat vérifié
                              </span>
                            )}
                          </div>
                          <div className="review-date">{review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="recommended-section">
        <div className="section-header">
          <h2 className="section-title">Produits Recommandés</h2>
          <p className="section-subtitle">Vous aimerez aussi</p>
        </div>

        <div className="recommended-grid">
          {recommendedProducts.map(item => {
            const badgeClass = item.badge?.startsWith('-')
              ? 'sale'
              : item.badge === 'Nouveau'
                ? 'new'
                : 'bestseller'

            return (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="recommended-card"
              >
                <div className="recommended-image-wrapper">
                  {item.badge && (
                    <span className={`product-badge ${badgeClass}`}>
                      {item.badge}
                    </span>
                  )}
                  <div className="recommended-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
                <div className="recommended-info">
                  <h3 className="recommended-name">{item.name}</h3>
                  <div className="recommended-rating">
                    <span className="stars">
                      {'★'.repeat(item.rating)}
                      {'☆'.repeat(5 - item.rating)}
                    </span>
                  </div>
                  <div className="recommended-price">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.25rem',
                      }}
                    >
                      {item.oldPrice && (
                        <span className="old-price-small">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="current-price-small">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
