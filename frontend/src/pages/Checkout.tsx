import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

interface OrderItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

function Checkout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    // Delivery
    deliveryMethod: 'standard',
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: 'T-shirt Premium Cotton',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      quantity: 2
    },
    {
      id: 2,
      name: 'Jean Slim Fit',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      quantity: 1
    }
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 9.99
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Process order
      console.log('Order submitted:', formData)
    }
  }

  return (
    <div className="checkout-container">
      {/* Progress Steps */}
      <div className="checkout-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span className="step-label">Livraison</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span className="step-label">Expédition</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span className="step-label">Paiement</span>
        </div>
      </div>

      <div className="checkout-layout">
        {/* Form Section */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="checkout-step">
                <h2 className="step-title">Informations de livraison</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="form-group">
                    <label>Nom *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Adresse *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Numéro et nom de rue"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Ville *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre ville"
                    />
                  </div>
                  <div className="form-group">
                    <label>Code postal *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      placeholder="75001"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Pays *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Luxembourg">Luxembourg</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Delivery Method */}
            {step === 2 && (
              <div className="checkout-step">
                <h2 className="step-title">Méthode de livraison</h2>
                
                <div className="delivery-options">
                  <label className={`delivery-option ${formData.deliveryMethod === 'standard' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      checked={formData.deliveryMethod === 'standard'}
                      onChange={handleInputChange}
                    />
                    <div className="option-content">
                      <div className="option-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="3" width="15" height="13"/>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                          <circle cx="5.5" cy="18.5" r="2.5"/>
                          <circle cx="18.5" cy="18.5" r="2.5"/>
                        </svg>
                        <div>
                          <div className="option-title">Livraison Standard</div>
                          <div className="option-description">3-5 jours ouvrés</div>
                        </div>
                      </div>
                      <div className="option-price">9,99 €</div>
                    </div>
                  </label>

                  <label className={`delivery-option ${formData.deliveryMethod === 'express' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      checked={formData.deliveryMethod === 'express'}
                      onChange={handleInputChange}
                    />
                    <div className="option-content">
                      <div className="option-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                        <div>
                          <div className="option-title">Livraison Express</div>
                          <div className="option-description">1-2 jours ouvrés</div>
                        </div>
                      </div>
                      <div className="option-price">19,99 €</div>
                    </div>
                  </label>

                  <label className={`delivery-option ${formData.deliveryMethod === 'pickup' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={handleInputChange}
                    />
                    <div className="option-content">
                      <div className="option-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <div>
                          <div className="option-title">Retrait en magasin</div>
                          <div className="option-description">Disponible sous 24h</div>
                        </div>
                      </div>
                      <div className="option-price">Gratuit</div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="checkout-step">
                <h2 className="step-title">Méthode de paiement</h2>
                
                <div className="payment-methods">
                  <label className={`payment-method ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <div className="method-content">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                      <span>Carte bancaire</span>
                    </div>
                  </label>

                  <label className={`payment-method ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    <div className="method-content">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.806.806 0 01-.795.68H7.72a.483.483 0 01-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z"/>
                        <path d="M2.434 0h5.71a2.509 2.509 0 012.494 2.158l1.54 9.773c.06.382-.238.73-.622.73h-1.81L9.25 9.806h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.806.806 0 01-.795.68H2.434"/>
                      </svg>
                      <span>PayPal</span>
                    </div>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="card-form">
                    <div className="form-group">
                      <label>Numéro de carte *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>

                    <div className="form-group">
                      <label>Nom sur la carte *</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        placeholder="JEAN DUPONT"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Date d'expiration *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          placeholder="MM/AA"
                          maxLength={5}
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          placeholder="123"
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'paypal' && (
                  <div className="paypal-info">
                    <p>Vous serez redirigé vers PayPal pour finaliser votre paiement en toute sécurité.</p>
                  </div>
                )}
              </div>
            )}

            {/* Form Actions */}
            <div className="form-actions">
              {step > 1 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setStep(step - 1)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Retour
                </button>
              )}
              <button type="submit" className="btn-primary">
                {step < 3 ? 'Continuer' : 'Confirmer la commande'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary-section">
          <div className="order-summary">
            <h3 className="summary-title">Résumé de la commande</h3>

            <div className="summary-items">
              {orderItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">Qté: {item.quantity}</div>
                  </div>
                  <div className="item-price">{(item.price * item.quantity).toFixed(2)} €</div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="total-row">
                <span>Livraison</span>
                <span>{shipping.toFixed(2)} €</span>
              </div>
              <div className="total-row total">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <div className="summary-security">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span>Paiement 100% sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
