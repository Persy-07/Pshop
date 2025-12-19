# Stratégie Git - Pshop

Ce document décrit la stratégie de gestion des branches Git pour le projet Pshop.

## Modèle de Branches (Git Flow Simplifié)

### Branches Principales

#### `main`

- **Branche de production**
- Contient uniquement du code stable et testé
- Chaque commit sur `main` correspond à une version déployable
- Protection : Aucun push direct, uniquement via Pull Request
- Tag : Chaque release est taggée (v1.0.0, v1.1.0, etc.)

#### `develop`

- **Branche de développement**
- Branche d'intégration pour les nouvelles fonctionnalités
- Code fonctionnel mais pas nécessairement prêt pour la production
- Base pour créer les branches de fonctionnalités

### Branches Temporaires

#### `feature/*` - Nouvelles fonctionnalités

```bash
# Créer une branche feature depuis develop
git checkout develop
git pull origin develop
git checkout -b feature/nom-de-la-fonctionnalite
```

**Exemples :**

- `feature/auth-system`
- `feature/payment-integration`
- `feature/product-search`

**Workflow :**

1. Créer depuis `develop`
2. Développer la fonctionnalité
3. Commits réguliers
4. Pull Request vers `develop`
5. Supprimer après merge

#### `bugfix/*` - Corrections de bugs (develop)

```bash
# Créer une branche bugfix depuis develop
git checkout develop
git pull origin develop
git checkout -b bugfix/description-du-bug
```

**Exemples :**

- `bugfix/login-validation`
- `bugfix/cart-total-calculation`

#### `hotfix/*` - Corrections urgentes (production)

```bash
# Créer une branche hotfix depuis main
git checkout main
git pull origin main
git checkout -b hotfix/description-urgente
```

**Exemples :**

- `hotfix/security-vulnerability`
- `hotfix/critical-crash`

**Workflow :**

1. Créer depuis `main`
2. Corriger le bug critique
3. Tester
4. PR vers `main` ET `develop`
5. Tag nouvelle version
6. Supprimer après merge

#### `release/*` - Préparation de release

```bash
# Créer une branche release depuis develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

**Workflow :**

1. Créer depuis `develop`
2. Tests finaux, corrections mineures
3. Mise à jour de version
4. PR vers `main` et `develop`
5. Tag sur `main`
6. Supprimer après merge

## Conventions de Nommage

### Branches

- **feature/** : nouvelles fonctionnalités
- **bugfix/** : corrections de bugs
- **hotfix/** : corrections urgentes en production
- **release/** : préparation de versions
- **chore/** : tâches de maintenance (dépendances, config)
- **docs/** : documentation uniquement

### Commits (Convention Conventional Commits)

```
type(scope): description courte

[corps optionnel]

[footer optionnel]
```

**Types :**

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, pas de changement de code
- `refactor`: Refactoring
- `test`: Ajout/modification de tests
- `chore`: Tâches de maintenance
- `perf`: Amélioration de performance

**Exemples :**

```bash
feat(auth): add JWT authentication
fix(cart): correct total price calculation
docs(readme): update installation instructions
chore(deps): update dependencies
```

## Workflow de Développement

### 1. Nouvelle Fonctionnalité

```bash
# 1. Mettre à jour develop
git checkout develop
git pull origin develop

# 2. Créer la branche feature
git checkout -b feature/ma-fonctionnalite

# 3. Développer et commiter
git add .
git commit -m "feat(module): description"

# 4. Pousser régulièrement
git push origin feature/ma-fonctionnalite

# 5. Créer une Pull Request vers develop
# 6. Après validation et merge, supprimer la branche
git branch -d feature/ma-fonctionnalite
```

### 2. Correction de Bug

```bash
# Depuis develop
git checkout develop
git pull origin develop
git checkout -b bugfix/nom-du-bug

# Corriger, commiter, pousser
git add .
git commit -m "fix(module): description"
git push origin bugfix/nom-du-bug

# PR vers develop
```

### 3. Hotfix Urgent

```bash
# Depuis main
git checkout main
git pull origin main
git checkout -b hotfix/probleme-critique

# Corriger rapidement
git add .
git commit -m "fix(critical): description"
git push origin hotfix/probleme-critique

# PR vers main ET develop
```

### 4. Release

```bash
# Depuis develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Mettre à jour versions, changelog
git commit -m "chore(release): bump version to 1.0.0"
git push origin release/v1.0.0

# PR vers main
# Après merge sur main:
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Merger aussi dans develop
```

## Règles de Protection des Branches

### Branch `main`

- ✅ Require pull request reviews (1 approbation minimum)
- ✅ Require status checks to pass (CI/CD)
- ✅ Require branches to be up to date
- ✅ No force push
- ✅ No deletion

### Branch `develop`

- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ No force push

## Pull Request Guidelines

### Template de PR

```markdown
## Description

[Description claire de ce qui a été fait]

## Type de changement

- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Tests

- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Tests manuels effectués
- [ ] Tous les tests passent

## Checklist

- [ ] Code formaté (Prettier)
- [ ] Pas d'erreurs ESLint
- [ ] Documentation mise à jour
- [ ] Changelog mis à jour (si applicable)
```

### Revue de Code

- Au moins 1 approbation requise
- Vérifier la qualité du code
- Tester localement si nécessaire
- Pas de merge si CI/CD échoue

## Versioning (SemVer)

Format : `MAJOR.MINOR.PATCH` (ex: 1.2.3)

- **MAJOR** : Changements incompatibles (breaking changes)
- **MINOR** : Nouvelles fonctionnalités (rétro-compatibles)
- **PATCH** : Corrections de bugs

## Commandes Utiles

```bash
# Voir toutes les branches
git branch -a

# Supprimer une branche locale
git branch -d nom-branche

# Supprimer une branche distante
git push origin --delete nom-branche

# Mettre à jour toutes les branches
git fetch --all --prune

# Voir l'historique graphique
git log --oneline --graph --all

# Nettoyer les branches mergées
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d
```

## Configuration Initiale

```bash
# Créer la branche develop
git checkout -b develop
git push origin develop

# Définir develop comme branche par défaut (sur GitHub/GitLab)
# Settings > Branches > Default branch > develop
```

## Bonnes Pratiques

1. **Commits atomiques** : Un commit = une modification logique
2. **Messages clairs** : Suivre la convention Conventional Commits
3. **Pull avant push** : Toujours pull avant de pousser
4. **Branches à jour** : Merger régulièrement develop dans les features
5. **Tests** : Tester avant de créer une PR
6. **Revue** : Ne pas merger ses propres PR
7. **Nettoyage** : Supprimer les branches après merge
8. **Communication** : Documenter les décisions importantes

## Ressources

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
