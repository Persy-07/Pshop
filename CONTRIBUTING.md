# Guide de Contribution - Pshop

Merci de votre intérêt pour contribuer au projet Pshop ! 🎉

## Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Stratégie de Branches](#stratégie-de-branches)
- [Standards de Code](#standards-de-code)
- [Pull Requests](#pull-requests)
- [Rapporter des Bugs](#rapporter-des-bugs)

## Code de Conduite

En participant à ce projet, vous acceptez de respecter un environnement respectueux et inclusif.

## Comment Contribuer

### 1. Fork et Clone

```bash
# Fork le projet sur GitHub, puis :
git clone https://github.com/VOTRE-USERNAME/Pshop.git
cd Pshop
```

### 2. Configuration de l'Environnement

```bash
# Backend
cd backend
npm install
cp .env.example .env
# Configurer les variables d'environnement

# Frontend
cd ../frontend
npm install
cp .env.example .env
```

### 3. Créer une Branche

```bash
# Depuis develop
git checkout develop
git pull origin develop
git checkout -b feature/ma-contribution
```

Consultez [GITFLOW.md](GITFLOW.md) pour plus de détails sur la stratégie de branches.

## Stratégie de Branches

Nous utilisons Git Flow simplifié :

- **main** : Production
- **develop** : Développement
- **feature/** : Nouvelles fonctionnalités
- **bugfix/** : Corrections de bugs
- **hotfix/** : Corrections urgentes

Voir [GITFLOW.md](GITFLOW.md) pour la documentation complète.

## Standards de Code

### Convention de Commits

Nous suivons [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description

feat(auth): add user registration
fix(cart): correct price calculation
docs(readme): update installation steps
```

**Types acceptés :**

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage (pas de changement de logique)
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Maintenance

### Style de Code

#### Frontend & Backend

```bash
# Vérifier le code
npm run lint

# Corriger automatiquement
npm run lint:fix

# Formater le code
npm run format
```

#### Règles ESLint et Prettier

- Utiliser des **single quotes** pour les strings
- Pas de **semicolons** (frontend), avec **semicolons** (backend)
- Indentation : **2 espaces**
- Longueur de ligne : **80 caractères**

### TypeScript

- Typage strict activé
- Éviter `any`, utiliser `unknown` si nécessaire
- Interfaces pour les types d'objets
- Types pour les fonctions

### React (Frontend)

- Composants fonctionnels avec Hooks
- Props typées avec TypeScript
- Un composant par fichier
- Nommage en PascalCase pour les composants

### Node.js (Backend)

- Architecture MVC
- Gestion d'erreurs appropriée
- Validation des entrées
- Middleware pour la logique partagée

## Pull Requests

### Avant de Soumettre

1. ✅ Vérifier que le code compile
2. ✅ Exécuter les tests (`npm test`)
3. ✅ Exécuter ESLint (`npm run lint`)
4. ✅ Formater le code (`npm run format`)
5. ✅ Tester manuellement les changements
6. ✅ Mettre à jour la documentation si nécessaire

### Soumettre une PR

1. **Push votre branche**

   ```bash
   git push origin feature/ma-contribution
   ```

2. **Créer la PR sur GitHub**

   - Base: `develop`
   - Compare: `feature/ma-contribution`
   - Remplir le template de PR
   - Ajouter des labels appropriés

3. **Attendre la revue**
   - Répondre aux commentaires
   - Effectuer les modifications demandées
   - Demander une nouvelle revue

### Critères d'Acceptation

- ✅ Code propre et lisible
- ✅ Tests passent
- ✅ Pas d'erreurs ESLint
- ✅ Documentation à jour
- ✅ Au moins 1 approbation
- ✅ Conflits résolus

## Rapporter des Bugs

### Template de Bug Report

```markdown
**Description**
Description claire du bug

**Étapes pour Reproduire**

1. Aller sur '...'
2. Cliquer sur '...'
3. Voir l'erreur

**Comportement Attendu**
Ce qui devrait se passer

**Comportement Actuel**
Ce qui se passe actuellement

**Screenshots**
Si applicable

**Environnement**

- OS: [e.g. Windows 10]
- Navigateur: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]
```

### Créer une Issue

1. Vérifier qu'une issue similaire n'existe pas déjà
2. Utiliser un titre clair et descriptif
3. Remplir le template de bug report
4. Ajouter des labels appropriés
5. Assigner si vous savez qui peut aider

## Proposer une Fonctionnalité

### Template de Feature Request

```markdown
**Problème / Besoin**
Description du problème ou besoin

**Solution Proposée**
Comment vous voyez la solution

**Alternatives**
Solutions alternatives considérées

**Contexte Additionnel**
Toute autre information pertinente
```

## Développement Local

### Backend

```bash
cd backend
npm run dev  # Démarre avec hot-reload
```

### Frontend

```bash
cd frontend
npm run dev  # Démarre sur http://localhost:3000
```

### Tests

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## Questions ?

- 📧 Contactez l'équipe : [email]
- 💬 Discussions : [GitHub Discussions]
- 📖 Documentation : [GITFLOW.md](GITFLOW.md), [README.md](README.md)

## Remerciements

Merci à tous les contributeurs qui participent à l'amélioration de Pshop ! 🙏
