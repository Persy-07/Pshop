"# Pshop - Site de Vente

Site de vente de divers articles avec architecture frontend/backend séparée.

## Structure du Projet

```
Pshop/
├── frontend/          # Application React + TypeScript
│   ├── src/
│   │   ├── components/    # Composants réutilisables
│   │   ├── pages/         # Pages de l'application
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/           # API REST Node.js + Express
│   ├── src/
│   │   ├── routes/        # Routes de l'API
│   │   ├── controllers/   # Contrôleurs
│   │   ├── models/        # Modèles de données
│   │   ├── middleware/    # Middleware personnalisés
│   │   ├── utils/         # Utilitaires
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## Technologies Utilisées

### Frontend

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne et rapide
- **React Router** - Gestion des routes
- **Axios** - Client HTTP
- **ESLint & Prettier** - Qualité et formatage du code

### Backend

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Typage statique
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Variables d'environnement
- **ESLint & Prettier** - Qualité et formatage du code

## Installation

### Prérequis

- Node.js 18+ et npm

### Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` à partir de `.env.example`:

```bash
cp .env.example .env
```

Configurer les variables d'environnement dans `.env`:

```
PORT=5000
NODE_ENV=development
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
```

Créer un fichier `.env` à partir de `.env.example`:

```bash
cp .env.example .env
```

## Configuration VS Code

Le projet inclut des configurations VS Code pour améliorer l'expérience de développement :

- **Format automatique à la sauvegarde** - Prettier formate automatiquement votre code
- **Correction ESLint automatique** - Les erreurs ESLint sont corrigées à la sauvegarde
- **Extensions recommandées** - ESLint et Prettier

Pour profiter de ces fonctionnalités, installez les extensions recommandées lorsque VS Code vous le propose.

## Démarrage

### Démarrer le Backend (mode développement)

```bash
cd backend
npm run dev
```

Le serveur démarre sur `http://localhost:5000`

### Démarrer le Frontend (mode développement)

```bash
cd frontend
npm run dev
```

L'application démarre sur `http://localhost:3000`

## API Endpoints

### Produits

- `GET /api/products` - Liste tous les produits
- `GET /api/products/:id` - Récupère un produit
- `POST /api/products` - Crée un produit
- `PUT /api/products/:id` - Met à jour un produit
- `DELETE /api/products/:id` - Supprime un produit

### Utilisateurs

- `GET /api/users` - Liste tous les utilisateurs
- `GET /api/users/:id` - Récupère un utilisateur
- `POST /api/users/register` - Inscription
- `POST /api/users/login` - Connexion

### Commandes

- `GET /api/orders` - Liste toutes les commandes
- `GET /api/orders/:id` - Récupère une commande
- `POST /api/orders` - Crée une commande

## Scripts Disponibles

### Backend

- `npm run dev` - Démarre le serveur en mode développement avec rechargement automatique
- `npm run build` - Compile le TypeScript en JavaScript
- `npm start` - Démarre le serveur en mode production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run format:check` - Vérifie le formatage du code

### Frontend

- `npm run dev` - Démarre l'application en mode développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run format:check` - Vérifie le formatage du code

## Fonctionnalités à Implémenter

- [ ] Connexion à une base de données (MongoDB/PostgreSQL)
- [ ] Authentification JWT complète
- [ ] Gestion du panier
- [ ] Système de paiement
- [ ] Interface d'administration
- [ ] Upload d'images produits
- [ ] Recherche et filtres de produits
- [ ] Système de commentaires/avis
- [ ] Gestion des stocks
- [ ] Historique des commandes

## Auteur

**Perside Menayame**

## Licence

ISC"
