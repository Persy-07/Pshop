import { useState } from 'react';
import './TrackOrder.css';

function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderStatus, setOrderStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une recherche de commande
    setTimeout(() => {
      setOrderStatus({
        orderNumber: orderNumber,
        status: 'En transit',
        estimatedDelivery: '25 Décembre 2025',
        trackingSteps: [
          { status: 'Commande passée', date: '20 Décembre 2025, 10:30', completed: true },
          { status: 'Commande confirmée', date: '20 Décembre 2025, 11:00', completed: true },
          { status: 'En préparation', date: '20 Décembre 2025, 14:00', completed: true },
          { status: 'Expédiée', date: '21 Décembre 2025, 09:00', completed: true },
          { status: 'En transit', date: '22 Décembre 2025, 08:00', completed: true, current: true },
          { status: 'En livraison', date: 'Estimation', completed: false },
          { status: 'Livrée', date: 'Estimation', completed: false }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="track-order-page">
      <div className="track-order-header">
        <h1>Suivre ma commande</h1>
        <p>Entrez votre numéro de commande et email pour suivre votre colis</p>
      </div>

      <div className="track-order-container">
        <form onSubmit={handleSubmit} className="track-form">
          <div className="form-group-track">
            <label htmlFor="orderNumber">Numéro de commande</label>
            <input
              id="orderNumber"
              type="text"
              placeholder="Ex: PS-2024-001234"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="track-input"
              required
            />
          </div>

          <div className="form-group-track">
            <label htmlFor="email">Adresse email</label>
            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="track-input"
              required
            />
          </div>

          <button type="submit" className="track-btn" disabled={loading}>
            {loading ? 'Recherche...' : 'Suivre ma commande'}
          </button>
        </form>

        {orderStatus && (
          <div className="order-status">
            <div className="status-header">
              <div className="status-info">
                <h2>Commande #{orderStatus.orderNumber}</h2>
                <div className="status-badge">{orderStatus.status}</div>
              </div>
              <div className="delivery-info">
                <span className="delivery-label">Livraison estimée</span>
                <span className="delivery-date">{orderStatus.estimatedDelivery}</span>
              </div>
            </div>

            <div className="tracking-timeline">
              {orderStatus.trackingSteps.map((step: any, index: number) => (
                <div 
                  key={index} 
                  className={`timeline-item ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''}`}
                >
                  <div className="timeline-marker">
                    {step.completed ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    ) : (
                      <div className="timeline-dot"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-status">{step.status}</h3>
                    <p className="timeline-date">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-actions">
              <button className="action-btn secondary">Contacter le support</button>
              <button className="action-btn primary">Voir les détails</button>
            </div>
          </div>
        )}

        <div className="track-info">
          <h3>Besoin d'aide ?</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📦</div>
              <h4>Où est ma commande ?</h4>
              <p>Suivez votre colis en temps réel avec notre système de suivi</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🕐</div>
              <h4>Délais de livraison</h4>
              <p>Livraison standard sous 3-5 jours ouvrés</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🔄</div>
              <h4>Retours gratuits</h4>
              <p>Retours faciles sous 30 jours après réception</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
