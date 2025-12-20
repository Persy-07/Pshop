import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  color: string
  size: string
  quantity: number
  inStock: boolean
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'T-shirt Premium Cotton',
      price: 29.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      color: 'Noir',
      size: 'M',
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: 'Jean Slim Fit',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      color: 'Bleu foncé',
      size: '32',
      quantity: 1,
      inStock: true
    },
    {
      id: 3,
      name: 'Sneakers Sport Style',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
      color: 'Blanc',
      size: '42',
      quantity: 1,
      inStock: true
    }
  ])

  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'PROMO20') {
      setAppliedPromo('PROMO20')
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = appliedPromo === 'PROMO20' ? subtotal * 0.2 : 0
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal - discount + shipping

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <div className="cart-empty-content">
          <div className="empty-cart-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
          <h2 className="empty-cart-title">Votre panier est vide</h2>
          <p className="empty-cart-text">Découvrez nos produits et commencez votre shopping</p>
          <Link to="/products" className="empty-cart-btn">
            Découvrir nos produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Mon Panier</h1>
        <p className="cart-subtitle">{cartItems.length} {cartItems.length > 1 ? 'articles' : 'article'}</p>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-details">
                <div className="cart-item-header">
                  <Link to={`/products/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                  </button>
                </div>

                <div className="cart-item-info">
                  <span className="cart-item-variant">
                    <span className="variant-label">Couleur:</span> {item.color}
                  </span>
                  <span className="cart-item-variant">
                    <span className="variant-label">Taille:</span> {item.size}
                  </span>
                  {item.inStock ? (
                    <span className="stock-badge in-stock">En stock</span>
                  ) : (
                    <span className="stock-badge out-of-stock">Rupture de stock</span>
                  )}
                </div>

                <div className="cart-item-footer">
                  <div className="quantity-selector">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                  </div>

                  <div className="cart-item-prices">
                    {item.originalPrice && (
                      <span className="original-price">{item.originalPrice.toFixed(2)} €</span>
                    )}
                    <span className="item-price">{(item.price * item.quantity).toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Continue Shopping */}
          <Link to="/products" className="continue-shopping">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Continuer mes achats</span>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="cart-summary-section">
          <div className="cart-summary">
            <h3 className="summary-title">Résumé de la commande</h3>

            {/* Promo Code */}
            <div className="promo-section">
              <label className="promo-label">Code promo</label>
              <div className="promo-input-group">
                <input 
                  type="text"
                  placeholder="Entrez votre code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-input"
                  disabled={!!appliedPromo}
                />
                {appliedPromo ? (
                  <button 
                    className="promo-btn applied"
                    onClick={() => {
                      setAppliedPromo(null)
                      setPromoCode('')
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </button>
                ) : (
                  <button 
                    className="promo-btn"
                    onClick={applyPromoCode}
                  >
                    Appliquer
                  </button>
                )}
              </div>
              {appliedPromo && (
                <span className="promo-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Code promo appliqué
                </span>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="summary-details">
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              {discount > 0 && (
                <div className="summary-row discount-row">
                  <span>Réduction (-20%)</span>
                  <span>-{discount.toFixed(2)} €</span>
                </div>
              )}
              <div className="summary-row">
                <span>Livraison</span>
                <span className={shipping === 0 ? 'free-shipping' : ''}>
                  {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}
                </span>
              </div>
              {subtotal < 100 && shipping > 0 && (
                <div className="shipping-info">
                  Plus que {(100 - subtotal).toFixed(2)} € pour la livraison gratuite
                </div>
              )}
            </div>

            <div className="summary-total">
              <span className="total-label">Total</span>
              <span className="total-amount">{total.toFixed(2)} €</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              <span>Passer la commande</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Security Icons */}
            <div className="security-badges">
              <div className="security-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Paiement sécurisé</span>
              </div>
              <div className="security-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Livraison rapide</span>
              </div>
              <div className="security-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10"/>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                </svg>
                <span>Retours gratuits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
