import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Home.css'

const testimonials = [
  { stars: 5, text: "Exceptional quality and impeccable customer service. I highly recommend this shop!", name: "Sophie M.", location: "Paris, France", img: 1 },
  { stars: 5, text: "Unique and elegant pieces. Fast delivery is a real plus. I'm delighted!", name: "Marie L.", location: "Lyon, France", img: 5 },
  { stars: 5, text: "The best site to find quality clothing. The value for money is unbeatable!", name: "Thomas B.", location: "Bordeaux, France", img: 3 },
  { stars: 5, text: "Amazing shopping experience! The products exceeded my expectations. Will definitely shop again!", name: "Emma R.", location: "London, UK", img: 8 },
  { stars: 4, text: "Great quality and stylish designs. Shipping was fast and packaging was perfect!", name: "Lucas M.", location: "Berlin, Germany", img: 12 },
  { stars: 5, text: "Love the attention to detail and customer care. Every purchase has been perfect!", name: "Isabella C.", location: "Milan, Italy", img: 9 },
  { stars: 5, text: "Fantastic selection and prices. The quality is consistently excellent!", name: "Oliver P.", location: "Amsterdam, Netherlands", img: 15 },
  { stars: 5, text: "Professional service and top-notch products. Couldn't ask for more!", name: "Sophia K.", location: "Madrid, Spain", img: 20 },
  { stars: 4, text: "Very satisfied with my purchases. Great quality and reasonable prices!", name: "James D.", location: "New York, USA", img: 25 },
  { stars: 5, text: "Outstanding collection and customer service. This is my go-to shop now!", name: "Mia W.", location: "Sydney, Australia", img: 30 }
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 34,
    seconds: 56
  })
  const testimonialsRef = useRef<HTMLDivElement>(null)
  
  const galleryImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&auto=format&fit=crop'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [galleryImages.length])

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
    const container = testimonialsRef.current
    if (!container) return

    const scroll = () => {
      const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0
      const gap = 24 // 1.5rem gap
      const scrollAmount = cardWidth + gap
      
      // Check if we're at the halfway point (after original 10 testimonials)
      const halfWidth = container.scrollWidth / 2
      
      if (container.scrollLeft >= halfWidth - scrollAmount) {
        // Reset to beginning without animation
        container.scrollLeft = container.scrollLeft - halfWidth
      }
      
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    const interval = setInterval(scroll, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ New Collection 2025</span>
            </div>
            <h1 className="hero-title-luxury">
              Elevate Your Style with Timeless Luxury
            </h1>
            <p className="hero-description-luxury">
              Discover refined fashion made for those who live boldly and dress beautifully. 
              Each piece blends modern elegance with timeless luxury.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-view-detail">
                Discover Collection
              </Link>
              <Link to="/products" className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5L10 15M5 10L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                View Trends
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>50k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Unique Products</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>4.9★</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img 
                src={galleryImages[currentSlide]} 
                alt="Fashion hero"
                className="hero-img"
              />
              
              {/* Product Card 1 */}
              <div className="product-card product-card-1">
                <div className="product-card-image">
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&auto=format&fit=crop" alt="Tailored Cotton Oxford" />
                </div>
                <div className="product-card-info">
                  <h4 className="product-name">Tailored Cotton Oxford</h4>
                  <p className="product-price">$778,000</p>
                  <div className="product-rating">
                    <span>★★★★★</span>
                  </div>
                </div>
                <button className="product-card-button">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5L12 7L10 9M10 11L12 13L10 15M6 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Product Card 2 */}
              <div className="product-card product-card-2">
                <div className="product-card-image">
                  <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&auto=format&fit=crop" alt="Classic Coat" />
                </div>
                <div className="product-card-info">
                  <h4 className="product-name">Classic Coat</h4>
                  <p className="product-price">$245,000</p>
                  <div className="product-rating">
                    <span>★★★★☆</span>
                  </div>
                </div>
                <button className="product-card-button">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5L12 7L10 9M10 11L12 13L10 15M6 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Gallery Carousel */}
              <div className="hero-gallery">
                <button 
                  className="gallery-nav gallery-prev"
                  onClick={() => setCurrentSlide(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className="gallery-images">
                  {galleryImages.map((img, index) => (
                    <div 
                      key={index}
                      className={`gallery-item ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button 
                  className="gallery-nav gallery-next"
                  onClick={() => setCurrentSlide(prev => (prev + 1) % galleryImages.length)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="section-header">
            <h2 className="section-title">Explore Our Collections</h2>
            <p className="section-subtitle">Find exactly what you're looking for</p>
          </div>
          <div className="categories-grid">
            <Link to="/products" className="category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop" alt="Women" />
                <div className="category-overlay">
                  <span className="category-cta">Discover →</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Women's Fashion</h3>
                <span className="category-count">2,500+ items</span>
              </div>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&auto=format&fit=crop" alt="Men" />
                <div className="category-overlay">
                  <span className="category-cta">Discover →</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Men's Collection</h3>
                <span className="category-count">1,800+ items</span>
              </div>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&auto=format&fit=crop" alt="Accessories" />
                <div className="category-overlay">
                  <span className="category-cta">Discover →</span>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">Accessories</h3>
                <span className="category-count">950+ items</span>
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
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24" fill="currentColor"/>
                <path d="M16 25L22 31L34 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-description">Carefully selected high-quality materials</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24" fill="currentColor"/>
                <circle cx="25" cy="25" r="12" stroke="white" strokeWidth="2.5"/>
                <path d="M25 13V25L32 28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-description">24h shipping worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24" fill="currentColor"/>
                <path d="M18 22L22 18L28 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 18V28C22 30 23 32 25 32C27 32 28 30 28 28V24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="25" cy="25" r="12" stroke="white" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className="feature-title">Free Returns</h3>
            <p className="feature-description">30 days to change your mind, no fees</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24" fill="currentColor"/>
                <rect x="18" y="20" width="14" height="12" rx="1.5" stroke="white" strokeWidth="2.5"/>
                <path d="M21 20V18C21 16 22 15 25 15C28 15 29 16 29 18V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Secure Payment</h3>
            <p className="feature-description">100% secure and encrypted transactions</p>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending-section">
        <div className="trending-container">
          <div className="section-header">
            <h2 className="section-title">Trending Products</h2>
            <p className="section-subtitle">Our customers' favorites</p>
          </div>
          <div className="trending-grid">
            <div className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop" alt="Product" />
                </div>
                <div className="product-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge bestseller">Best Seller</span>
                  <button className="favorite-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9 2.8 10 3.925C11 2.8 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z"/>
                    </svg>
                  </button>
                </div>
                <h4 className="trending-name">Tailored Oxford Shirt</h4>
                <div className="trending-price-buy">
                  <p className="trending-price">
                    <span className="price-label">Price</span>
                    <span className="current-price">$180.00</span>
                  </p>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop" alt="Product" />
                </div>
                <div className="product-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge new">New</span>
                  <button className="favorite-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9 2.8 10 3.925C11 2.8 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z"/>
                    </svg>
                  </button>
                </div>
                <h4 className="trending-name">Classic Coat</h4>
                <div className="trending-price-buy">
                  <p className="trending-price">
                    <span className="price-label">Price</span>
                    <span className="current-price">$245.00</span>
                  </p>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&auto=format&fit=crop" alt="Product" />
                </div>
                <div className="product-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <span className="trending-badge sale">-30%</span>
                  <button className="favorite-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9 2.8 10 3.925C11 2.8 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z"/>
                    </svg>
                  </button>
                </div>
                <h4 className="trending-name">Elegant Dress</h4>
                <div className="trending-price-buy">
                  <p className="trending-price">
                    <span className="price-label">Price</span>
                    <span className="current-price">$420.00</span>
                  </p>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="trending-card">
              <div className="trending-image-wrapper">
                <div className="trending-image">
                  <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&auto=format&fit=crop" alt="Product" />
                </div>
                <div className="product-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="trending-info">
                <div className="product-top">
                  <button className="favorite-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9 2.8 10 3.925C11 2.8 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z"/>
                    </svg>
                  </button>
                </div>
                <h4 className="trending-name">Premium Blazer</h4>
                <div className="trending-price-buy">
                  <p className="trending-price">
                    <span className="price-label">Price</span>
                    <span className="current-price">$890.00</span>
                  </p>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="trending-cta">
            <Link to="/products" className="btn-view-all">
              View All Products
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bestsellers-section">
        <div className="bestsellers-container">
          <div className="section-header">
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">Discover our customers' top picks</p>
          </div>
          
          <div className="bestsellers-grid">
            <div className="bestseller-card bestseller-large">
              <div className="bestseller-image">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop" alt="Best Seller" />
                <div className="bestseller-overlay">
                  <span className="bestseller-rank">#1</span>
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="bestseller-info">
                <div className="bestseller-header">
                  <div>
                    <h3 className="bestseller-name">Premium Leather Jacket</h3>
                    <p className="bestseller-category">Outerwear</p>
                  </div>
                  <button className="favorite-btn-white">
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 17.5L8.825 16.45C4.4 12.475 1.5 9.875 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.575 2.125 9 2.8 10 3.925C11 2.8 12.425 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.875 15.6 12.475 11.175 16.45L10 17.5Z"/>
                    </svg>
                  </button>
                </div>
                <div className="bestseller-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(1,284 reviews)</span>
                </div>
                <div className="bestseller-price-action">
                  <div className="price-section">
                    <span className="bestseller-price">$349.00</span>
                    <span className="sold-count">2.5k+ sold</span>
                  </div>
                  <Link to="/products" className="shop-now-btn">
                    Shop Now
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bestseller-small-grid">
              <div className="bestseller-card bestseller-small">
                <div className="bestseller-image">
                  <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&auto=format&fit=crop" alt="Best Seller" />
                  <div className="bestseller-overlay">
                    <span className="bestseller-rank">#2</span>
                  </div>
                </div>
                <div className="bestseller-info">
                  <h4 className="bestseller-name-small">Designer Sneakers</h4>
                  <div className="bestseller-meta">
                    <span className="stars-small">★★★★★</span>
                    <span className="bestseller-price-small">$189.00</span>
                  </div>
                  <Link to="/products" className="buy-now-btn-small">Buy Now</Link>
                </div>
              </div>

              <div className="bestseller-card bestseller-small">
                <div className="bestseller-image">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop" alt="Best Seller" />
                  <div className="bestseller-overlay">
                    <span className="bestseller-rank">#3</span>
                  </div>
                </div>
                <div className="bestseller-info">
                  <h4 className="bestseller-name-small">Classic Watch</h4>
                  <div className="bestseller-meta">
                    <span className="stars-small">★★★★☆</span>
                    <span className="bestseller-price-small">$299.00</span>
                  </div>
                  <Link to="/products" className="buy-now-btn-small">Buy Now</Link>
                </div>
              </div>

              <div className="bestseller-card bestseller-small">
                <div className="bestseller-image">
                  <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop" alt="Best Seller" />
                  <div className="bestseller-overlay">
                    <span className="bestseller-rank">#4</span>
                  </div>
                </div>
                <div className="bestseller-info">
                  <h4 className="bestseller-name-small">Luxury Handbag</h4>
                  <div className="bestseller-meta">
                    <span className="stars-small">★★★★★</span>
                    <span className="bestseller-price-small">$459.00</span>
                  </div>
                  <Link to="/products" className="buy-now-btn-small">Buy Now</Link>
                </div>
              </div>

              <div className="bestseller-card bestseller-small">
                <div className="bestseller-image">
                  <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop" alt="Best Seller" />
                  <div className="bestseller-overlay">
                    <span className="bestseller-rank">#5</span>
                  </div>
                </div>
                <div className="bestseller-info">
                  <h4 className="bestseller-name-small">Sunglasses</h4>
                  <div className="bestseller-meta">
                    <span className="stars-small">★★★★★</span>
                    <span className="bestseller-price-small">$149.00</span>
                  </div>
                  <Link to="/products" className="buy-now-btn-small">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Timer Section */}
      <section className="flash-sale-section">
        <div className="flash-sale-container">
          <div className="flash-sale-product-image">
            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop" alt="Sale product" />
            <div className="discount-badge">-50%</div>
          </div>
          <div className="flash-sale-content">
            <div className="flash-sale-header">
              <span className="flash-badge">🔥 FLASH SALE</span>
              <h2 className="flash-sale-title">Limited Offer - Don't Miss Out!</h2>
              <p className="flash-sale-description">
                Get 50% off our exclusive collection
              </p>
            </div>
            
            <div className="timer-container">
              <div className="timer-box">
                <div className="timer-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="timer-label">Days</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <div className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="timer-label">Hours</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <div className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="timer-label">Minutes</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-box">
                <div className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="timer-label">Seconds</div>
              </div>
            </div>

            <Link to="/products" className="flash-sale-btn">
              Claim Offer Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Over 50,000 happy customers</p>
          </div>
          <div className="testimonials-grid" ref={testimonialsRef}>
            {/* Render testimonials twice for infinite loop effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-stars">{"★".repeat(testimonial.stars)}{"☆".repeat(5 - testimonial.stars)}</div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={`https://i.pravatar.cc/150?img=${testimonial.img}`} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
