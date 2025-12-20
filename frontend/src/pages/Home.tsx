import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

function Home() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [activeImages, setActiveImages] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
  })

  // Timer pour la promotion
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 35,
    seconds: 48,
  })

  // Images pour chaque produit
  const productImages = {
    product1: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400',
    ],
    product2: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
    ],
    product3: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400',
    ],
    product4: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    ],
  }

  const handleDotClick = (
    productKey: keyof typeof activeImages,
    index: number
  ) => {
    setActiveImages(prev => ({
      ...prev,
      [productKey]: index,
    }))
  }

  // Empêcher la navigation quand on clique sur les boutons
  const handleButtonClick = (e: React.MouseEvent, action: string) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(action)
    // Ici vous pouvez ajouter la logique pour favoris ou achat
  }

  const handleDotClickWithStop = (
    e: React.MouseEvent,
    productKey: keyof typeof activeImages,
    index: number
  ) => {
    e.preventDefault()
    e.stopPropagation()
    handleDotClick(productKey, index)
  }

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const scrollContainer = testimonialsRef.current
    if (!scrollContainer) return

    const scrollSpeed = 1
    let intervalId: ReturnType<typeof setInterval>
    let isScrolling = false

    const autoScroll = () => {
      if (scrollContainer && !isScrolling) {
        isScrolling = true

        scrollContainer.scrollLeft += scrollSpeed

        // Quand on atteint environ la moitié (fin des cartes originales)
        // On reset sans transition pour créer l'effet infini
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0
        }

        isScrolling = false
      }
    }

    intervalId = setInterval(autoScroll, 30)

    // Pause au survol
    const handleMouseEnter = () => {
      clearInterval(intervalId)
    }

    const handleMouseLeave = () => {
      intervalId = setInterval(autoScroll, 30)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearInterval(intervalId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">✨ Nouvelle Collection 2025</span>
            <h1 className="hero-title-luxury">
              Découvrez L'Excellence
              <br />
              de Nos Produits
            </h1>
            <p className="hero-description-luxury">
              Une sélection soigneusement choisie des meilleurs produits pour
              répondre à tous vos besoins. Qualité, style et innovation au
              rendez-vous.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-view-detail">
                Voir la Collection →
              </Link>
              <a href="#categories" className="btn-secondary">
                En savoir plus
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Produits</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Clients Satisfaits</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>4.9/5</h3>
                <p>Évaluation</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="Collection"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" id="categories">
        <div className="categories-container">
          <div className="section-header">
            <h2 className="section-title">Nos Catégories</h2>
            <p className="section-subtitle">Explorez notre collection</p>
          </div>
          <div className="categories-grid">
            <Link
              to="/products?category=electronique"
              className="category-card"
            >
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500"
                  alt="Électronique"
                />
                <div className="category-overlay">
                  <span className="category-cta">Explorer</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Électronique</h3>
                <p className="category-count">250 Produits</p>
              </div>
            </Link>

            <Link to="/products?category=mode" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500"
                  alt="Mode"
                />
                <div className="category-overlay">
                  <span className="category-cta">Explorer</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Mode & Style</h3>
                <p className="category-count">400 Produits</p>
              </div>
            </Link>

            <Link to="/products?category=maison" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500"
                  alt="Maison"
                />
                <div className="category-overlay">
                  <span className="category-cta">Explorer</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Maison & Décor</h3>
                <p className="category-count">350 Produits</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 18h32v24H4z" fill="#1a1a1a" opacity="0.1" />
                <rect
                  x="4"
                  y="14"
                  width="32"
                  height="28"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 20h8l8 8v14h-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="14" cy="46" r="4" fill="currentColor" />
                <circle cx="48" cy="46" r="4" fill="currentColor" />
                <path
                  d="M10 28h16M10 22h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="feature-title">Livraison Gratuite</h3>
            <p className="feature-description">
              Sur toutes les commandes de plus de 50€
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 8v48M32 8l-12 12M32 8l12 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.3"
                />
                <path
                  d="M52 32H12c-4 0-4-8 0-8h32c6 0 6 16 0 16H20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 48l-8-8 8-8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="44" cy="24" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="feature-title">Retour Facile</h3>
            <p className="feature-description">
              Retours gratuits sous 30 jours
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="16"
                  width="52"
                  height="36"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <rect
                  x="6"
                  y="24"
                  width="52"
                  height="8"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path
                  d="M14 40h12M14 46h8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="48"
                  cy="43"
                  r="8"
                  fill="#fff"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M48 40v-2a2 2 0 0 1 4 0v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="46"
                  y="42"
                  width="4"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="feature-title">Paiement Sécurisé</h3>
            <p className="feature-description">Transactions 100% sécurisées</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 8C18 8 8 18 8 28v12c0 3 2 5 5 5h4c2 0 4-2 4-4v-8c0-2-2-4-4-4h-2c0-8 6-14 14-14h6c8 0 14 6 14 14h-2c-2 0-4 2-4 4v8c0 2 2 4 4 4h4c3 0 5-2 5-5V28c0-10-10-20-24-20h-6z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 48c0 4 4 8 8 8s8-4 8-8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="17" cy="33" r="2" fill="currentColor" />
                <circle cx="47" cy="33" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="feature-title">Support 24/7</h3>
            <p className="feature-description">
              Service client toujours disponible
            </p>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending-section">
        <div className="trending-container">
          <div className="section-header">
            <h2 className="section-title">Produits Tendance</h2>
            <p className="section-subtitle">Les plus populaires du moment</p>
          </div>
          <div className="trending-grid">
            <Link to="/products/1" className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img
                    src={productImages.product1[activeImages.product1]}
                    alt="Lunettes de Soleil Designer"
                  />
                  <div className="image-dots">
                    {productImages.product1.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeImages.product1 === index ? 'active' : ''}`}
                        onClick={e =>
                          handleDotClickWithStop(e, 'product1', index)
                        }
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge bestseller">Bestseller</span>
                  <button
                    className="favorite-btn"
                    onClick={e => handleButtonClick(e, 'favorite-product1')}
                  >
                    ♥
                  </button>
                </div>
                <h3 className="trending-name">Lunettes de Soleil Designer</h3>
                <div className="trending-price-buy">
                  <div className="trending-price">
                    <span className="price-label">Prix</span>
                    <span className="current-price">89.99€</span>
                  </div>
                  <button
                    className="buy-now-btn"
                    onClick={e => handleButtonClick(e, 'buy-product1')}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/products/2" className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img
                    src={productImages.product2[activeImages.product2]}
                    alt="Montre Connectée Elite"
                  />
                  <div className="image-dots">
                    {productImages.product2.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeImages.product2 === index ? 'active' : ''}`}
                        onClick={e =>
                          handleDotClickWithStop(e, 'product2', index)
                        }
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge new">Nouveau</span>
                  <button
                    className="favorite-btn"
                    onClick={e => handleButtonClick(e, 'favorite-product2')}
                  >
                    ♥
                  </button>
                </div>
                <h3 className="trending-name">Montre Connectée Elite</h3>
                <div className="trending-price-buy">
                  <div className="trending-price">
                    <span className="price-label">Prix</span>
                    <span className="current-price">249.99€</span>
                  </div>
                  <button
                    className="buy-now-btn"
                    onClick={e => handleButtonClick(e, 'buy-product2')}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/products/3" className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img
                    src={productImages.product3[activeImages.product3]}
                    alt="Casque Audio Premium"
                  />
                  <div className="image-dots">
                    {productImages.product3.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeImages.product3 === index ? 'active' : ''}`}
                        onClick={e =>
                          handleDotClickWithStop(e, 'product3', index)
                        }
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge sale">-30%</span>
                  <button
                    className="favorite-btn"
                    onClick={e => handleButtonClick(e, 'favorite-product3')}
                  >
                    ♥
                  </button>
                </div>
                <h3 className="trending-name">Casque Audio Premium</h3>
                <div className="trending-price-buy">
                  <div className="trending-price">
                    <span className="price-label">Prix</span>
                    <span className="current-price">149.99€</span>
                  </div>
                  <button
                    className="buy-now-btn"
                    onClick={e => handleButtonClick(e, 'buy-product3')}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/products/4" className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img
                    src={productImages.product4[activeImages.product4]}
                    alt="Sneakers Sport Edition"
                  />
                  <div className="image-dots">
                    {productImages.product4.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeImages.product4 === index ? 'active' : ''}`}
                        onClick={e =>
                          handleDotClickWithStop(e, 'product4', index)
                        }
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge bestseller">Bestseller</span>
                  <button
                    className="favorite-btn"
                    onClick={e => handleButtonClick(e, 'favorite-product4')}
                  >
                    ♥
                  </button>
                </div>
                <h3 className="trending-name">Sneakers Sport Edition</h3>
                <div className="trending-price-buy">
                  <div className="trending-price">
                    <span className="price-label">Prix</span>
                    <span className="current-price">129.99€</span>
                  </div>
                  <button
                    className="buy-now-btn"
                    onClick={e => handleButtonClick(e, 'buy-product4')}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="trending-cta">
            <Link to="/products" className="btn-view-all">
              Voir Tout →
            </Link>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="flash-sale-section">
        <div className="flash-sale-container">
          <div className="flash-sale-product-image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              alt="Produit en Promotion"
            />
            <div className="discount-badge">-50%</div>
          </div>
          <div className="flash-sale-content">
            <div className="flash-sale-header">
              <span className="flash-badge">⚡ VENTE FLASH</span>
              <h2 className="flash-sale-title">
                Offre Limitée - Ne Manquez Pas !
              </h2>
              <p className="flash-sale-description">
                Profitez de réductions exceptionnelles sur une sélection de
                produits
              </p>
            </div>
            <div className="timer-container">
              <div className="timer-box">
                <div className="timer-value">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="timer-label">Jours</div>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-box">
                <div className="timer-value">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="timer-label">Heures</div>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-box">
                <div className="timer-value">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="timer-label">Minutes</div>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-box">
                <div className="timer-value">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="timer-label">Secondes</div>
              </div>
            </div>
            <Link to="/products" className="flash-sale-btn">
              Profiter de l'Offre →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">Ce Que Disent Nos Clients</h2>
            <p className="section-subtitle">
              Des milliers de clients satisfaits
            </p>
          </div>
          <div className="testimonials-grid" ref={testimonialsRef}>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Excellente expérience d'achat ! Produits de qualité et
                livraison rapide. Je recommande vivement."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Marie Dubois"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Marie Dubois</h4>
                  <p className="author-location">Paris, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Service client impeccable et produits conformes aux attentes.
                Une boutique en ligne à découvrir absolument !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Jean Martin"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Jean Martin</h4>
                  <p className="author-location">Lyon, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "J'adore cette boutique ! Grande variété de produits et prix
                très compétitifs. Mon site préféré pour le shopping en ligne."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Sophie Laurent"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Sophie Laurent</h4>
                  <p className="author-location">Marseille, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Produits de qualité exceptionnelle et service rapide. Une très
                belle découverte !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=8"
                    alt="Pierre Leroy"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Pierre Leroy</h4>
                  <p className="author-location">Toulouse, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Interface intuitive et paiement sécurisé. Je commande
                régulièrement sur ce site."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=20"
                    alt="Emma Bernard"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Emma Bernard</h4>
                  <p className="author-location">Bordeaux, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Très satisfait de mes achats. La qualité est toujours au
                rendez-vous !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=15"
                    alt="Lucas Moreau"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Lucas Moreau</h4>
                  <p className="author-location">Nantes, France</p>
                </div>
              </div>
            </div>

            {/* Duplicate cards for infinite scroll effect */}
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Excellente expérience d'achat ! Produits de qualité et
                livraison rapide. Je recommande vivement."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Marie Dubois"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Marie Dubois</h4>
                  <p className="author-location">Paris, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Service client impeccable et produits conformes aux attentes.
                Une boutique en ligne à découvrir absolument !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Jean Martin"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Jean Martin</h4>
                  <p className="author-location">Lyon, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "J'adore cette boutique ! Grande variété de produits et prix
                très compétitifs. Mon site préféré pour le shopping en ligne."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Sophie Laurent"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Sophie Laurent</h4>
                  <p className="author-location">Marseille, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Produits de qualité exceptionnelle et service rapide. Une très
                belle découverte !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=8"
                    alt="Pierre Leroy"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Pierre Leroy</h4>
                  <p className="author-location">Toulouse, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Interface intuitive et paiement sécurisé. Je commande
                régulièrement sur ce site."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=20"
                    alt="Emma Bernard"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Emma Bernard</h4>
                  <p className="author-location">Bordeaux, France</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Très satisfait de mes achats. La qualité est toujours au
                rendez-vous !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=15"
                    alt="Lucas Moreau"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Lucas Moreau</h4>
                  <p className="author-location">Nantes, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
