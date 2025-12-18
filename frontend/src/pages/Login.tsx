import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion à implémenter
    console.log('Login:', { email, password })
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Se connecter
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Pas de compte ? <Link to="/register">S'inscrire</Link>
      </p>
    </div>
  )
}

export default Login
