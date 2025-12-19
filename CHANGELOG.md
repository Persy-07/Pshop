# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Ajouté

- Configuration initiale du projet avec architecture frontend/backend séparée
- Backend Node.js + Express + TypeScript
  - Routes API pour produits, utilisateurs et commandes
  - Configuration ESLint et Prettier
  - Variables d'environnement (.env)
  - Structure MVC (routes, controllers, models, middleware, utils)
- Frontend React + Vite + TypeScript
  - Pages : Home, Products, ProductDetail, Cart, Login, Register
  - Composants : Layout, Header, Footer
  - React Router pour la navigation
  - Axios pour les requêtes API
  - Configuration ESLint et Prettier
- Configuration VS Code
  - Format automatique à la sauvegarde
  - Corrections ESLint automatiques
  - Extensions recommandées
- Documentation
  - README.md complet
  - GITFLOW.md - Stratégie de gestion des branches
  - CONTRIBUTING.md - Guide de contribution
  - Template de Pull Request
  - CHANGELOG.md
- Stratégie Git Flow
  - Branche `main` pour la production
  - Branche `develop` pour le développement
  - Convention de commits (Conventional Commits)
  - Protection des branches

### À venir

- [ ] Connexion à une base de données
- [ ] Authentification JWT complète
- [ ] Gestion du panier
- [ ] Système de paiement
- [ ] Interface d'administration
- [ ] Upload d'images produits
- [ ] Tests unitaires et d'intégration

---

## [0.1.0] - 2025-12-18

### Ajouté

- Initialisation du projet
- Structure de base frontend/backend
